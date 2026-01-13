"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  Save,
  Eye,
  ArrowLeft,
  Loader2,
  CheckCircle2,
  Clock,
  Image as ImageIcon,
  Bold,
  Italic,
  Heading1,
  Heading2,
  List,
  ListOrdered,
  Quote,
  Link as LinkIcon,
  Code,
} from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Textarea } from "@/shared/components/ui/textarea";
import { Badge } from "@/shared/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { toast } from "sonner";
import { BlogPost } from "@/features/blog/types/blog";

interface BlogEditorProps {
  initialData?: BlogPost;
  isNew?: boolean;
}

const categories = ["Tutorials", "Insights", "Productivity", "Security", "Updates"];

const toolbarButtons = [
  { icon: Bold, label: "Bold", action: "**" },
  { icon: Italic, label: "Italic", action: "*" },
  { icon: Heading1, label: "Heading 1", action: "# " },
  { icon: Heading2, label: "Heading 2", action: "## " },
  { icon: List, label: "Bullet List", action: "- " },
  { icon: ListOrdered, label: "Numbered List", action: "1. " },
  { icon: Quote, label: "Quote", action: "> " },
  { icon: Code, label: "Code", action: "`" },
  { icon: LinkIcon, label: "Link", action: "[](url)" },
];

export default function BlogEditor({ initialData, isNew = false }: BlogEditorProps) {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    excerpt: initialData?.excerpt || "",
    content: initialData?.content || "",
    category: initialData?.category || categories[0],
    tags: initialData?.tags?.join(", ") || "",
    coverImage: initialData?.coverImage || "",
    status: initialData?.status || "draft" as "draft" | "published",
  });

  // Auto-save functionality
  const savePost = useCallback(async (showToast = true) => {
    if (!formData.title.trim()) return;

    setIsSaving(true);

    // Simulate API call - replace with actual backend integration
    await new Promise((resolve) => setTimeout(resolve, 800));

    setLastSaved(new Date());
    setHasUnsavedChanges(false);
    setIsSaving(false);

    if (showToast) {
      toast.success("Post saved successfully");
    }
  }, [formData]);

  // Auto-save every 30 seconds if there are unsaved changes
  useEffect(() => {
    if (!hasUnsavedChanges) return;

    const autoSaveTimer = setTimeout(() => {
      savePost(false);
    }, 30000);

    return () => clearTimeout(autoSaveTimer);
  }, [hasUnsavedChanges, savePost]);

  // Track unsaved changes
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [hasUnsavedChanges]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setHasUnsavedChanges(true);
  };

  const handlePublish = async () => {
    if (!formData.title.trim() || !formData.content.trim()) {
      toast.error("Please fill in the title and content");
      return;
    }

    setFormData((prev) => ({ ...prev, status: "published" }));
    await savePost();
    toast.success("Post published successfully!");
    router.push("/admin/blogs");
  };

  const handleSaveDraft = async () => {
    setFormData((prev) => ({ ...prev, status: "draft" }));
    await savePost();
  };

  const insertMarkdown = (action: string) => {
    const textarea = document.getElementById("content") as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = formData.content.substring(start, end);
    let newText = "";

    if (action.startsWith("#") || action.startsWith("-") || action.startsWith("1.") || action.startsWith(">")) {
      // Line-based formatting
      newText = formData.content.substring(0, start) + action + selectedText + formData.content.substring(end);
    } else if (action === "[](url)") {
      // Link
      newText = formData.content.substring(0, start) + `[${selectedText || "text"}](url)` + formData.content.substring(end);
    } else {
      // Wrap formatting (bold, italic, code)
      newText = formData.content.substring(0, start) + action + selectedText + action + formData.content.substring(end);
    }

    setFormData((prev) => ({ ...prev, content: newText }));
    setHasUnsavedChanges(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push("/admin/blogs")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              {isNew ? "New Post" : "Edit Post"}
            </h1>
            <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
              {isSaving ? (
                <span className="flex items-center gap-1.5">
                  <Loader2 className="h-3 w-3 animate-spin" />
                  Saving...
                </span>
              ) : lastSaved ? (
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                  Saved {lastSaved.toLocaleTimeString()}
                </span>
              ) : hasUnsavedChanges ? (
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3 w-3" />
                  Unsaved changes
                </span>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handleSaveDraft} disabled={isSaving}>
            <Save className="h-4 w-4 mr-2" />
            Save Draft
          </Button>
          <Button
            onClick={handlePublish}
            disabled={isSaving}
            className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white border-0"
          >
            <Eye className="h-4 w-4 mr-2" />
            Publish
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Editor */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title */}
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter post title..."
                    className="text-lg font-medium h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt</Label>
                  <Textarea
                    id="excerpt"
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    placeholder="Write a brief summary of your post..."
                    className="min-h-[80px] resize-none"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content Editor */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Content</CardTitle>
              <CardDescription>
                Write your post content using Markdown
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              {/* Toolbar */}
              <div className="flex flex-wrap gap-1 p-2 border border-border rounded-t-lg bg-muted/30 -mx-0">
                {toolbarButtons.map((button) => (
                  <Button
                    key={button.label}
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => insertMarkdown(button.action)}
                    title={button.label}
                  >
                    <button.icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>
              <Textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Start writing your post content...

# Use Markdown for formatting
- **Bold text** with double asterisks
- *Italic text* with single asterisks
- ## Headers with hash symbols
- [Links](url) with brackets
- Lists with dashes or numbers"
                className="min-h-[400px] rounded-t-none border-t-0 font-mono text-sm"
              />
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Current status
                </span>
                <Badge
                  variant={formData.status === "published" ? "success" : "secondary"}
                  className="capitalize"
                >
                  {formData.status}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Category */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Category</CardTitle>
            </CardHeader>
            <CardContent>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full h-10 px-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring/50"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </CardContent>
          </Card>

          {/* Tags */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Tags</CardTitle>
              <CardDescription>Separate tags with commas</CardDescription>
            </CardHeader>
            <CardContent>
              <Input
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="tag1, tag2, tag3"
              />
              {formData.tags && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {formData.tags.split(",").map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      #{tag.trim()}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Cover Image */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Cover Image</CardTitle>
              <CardDescription>Add a cover image URL</CardDescription>
            </CardHeader>
            <CardContent>
              <Input
                name="coverImage"
                value={formData.coverImage}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
              />
              {formData.coverImage ? (
                <div className="mt-3 aspect-video rounded-lg overflow-hidden border border-border">
                  <img
                    src={formData.coverImage}
                    alt="Cover preview"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              ) : (
                <div className="mt-3 aspect-video rounded-lg border-2 border-dashed border-border flex flex-col items-center justify-center text-muted-foreground">
                  <ImageIcon className="h-8 w-8 mb-2" />
                  <span className="text-xs">No image</span>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
