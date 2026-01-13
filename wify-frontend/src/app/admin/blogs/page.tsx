import Link from "next/link";
import {
  Plus,
  Search,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  FileText,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Badge } from "@/shared/components/ui/badge";
import { Input } from "@/shared/components/ui/input";
import { mockBlogs } from "@/features/blog/data/mock-blogs";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function AdminBlogsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blog Posts</h1>
          <p className="text-muted-foreground">
            Create and manage your blog content
          </p>
        </div>
        <Link href="/admin/blogs/new">
          <Button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white border-0">
            <Plus className="h-4 w-4 mr-2" />
            New Post
          </Button>
        </Link>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search posts..."
                className="pl-9"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="default">
                All Posts
              </Button>
              <Button variant="ghost" size="default">
                Published
              </Button>
              <Button variant="ghost" size="default">
                Drafts
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Posts List */}
      <Card>
        <CardHeader>
          <CardTitle>All Posts</CardTitle>
          <CardDescription>
            {mockBlogs.length} posts in total
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {mockBlogs.map((post) => (
              <div
                key={post.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors group"
              >
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="h-16 w-24 rounded-lg overflow-hidden bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shrink-0">
                    {post.coverImage ? (
                      <img
                        src={post.coverImage}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <FileText className="h-6 w-6 text-white" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold line-clamp-1 mb-1">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-1 mb-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <span>{post.author.name}</span>
                      <span>•</span>
                      <span>{formatDate(post.publishedAt)}</span>
                      <span>•</span>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Badge
                    variant={
                      post.status === "published" ? "success" : "secondary"
                    }
                    className="capitalize"
                  >
                    {post.status}
                  </Badge>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link href={`/blog/${post.slug}`} target="_blank">
                      <Button variant="ghost" size="icon-sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href={`/admin/blogs/${post.id}`}>
                      <Button variant="ghost" size="icon-sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button variant="ghost" size="icon-sm" className="lg:hidden">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
