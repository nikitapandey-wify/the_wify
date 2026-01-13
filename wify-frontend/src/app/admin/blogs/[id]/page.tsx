import { notFound } from "next/navigation";
import BlogEditor from "@/features/blog/components/entry/blog-editor";
import { mockBlogs } from "@/features/blog/data/mock-blogs";

interface EditBlogPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditBlogPage({ params }: EditBlogPageProps) {
  const { id } = await params;
  const post = mockBlogs.find((p) => p.id === id);

  if (!post) {
    notFound();
  }

  return <BlogEditor initialData={post} />;
}
