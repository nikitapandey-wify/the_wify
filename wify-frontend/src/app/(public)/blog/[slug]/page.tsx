import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Share2, Twitter, Linkedin, Facebook } from "lucide-react";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import { getBlogBySlug, mockBlogs } from "@/features/blog/data/mock-blogs";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function generateStaticParams() {
  return mockBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | WIFY",
    };
  }

  return {
    title: `${post.title} | WIFY Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = mockBlogs
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  return (
    <article className="py-12 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary">{post.category}</Badge>
            {post.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                #{tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-8 border-b border-border">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient text-white font-medium">
                {post.author.avatar}
              </div>
              <div>
                <p className="font-semibold">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">
                  {post.author.role}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatDate(post.publishedAt)}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </div>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-10">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <div
            className="[&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mt-10 [&>h1]:mb-4
                        [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-4
                        [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-3
                        [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>p]:mb-4
                        [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:text-muted-foreground [&>ul>li]:mb-2
                        [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-4 [&>ol>li]:text-muted-foreground [&>ol>li]:mb-2
                        [&>blockquote]:border-l-4 [&>blockquote]:border-brand [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-muted-foreground
                        [&>pre]:bg-muted [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto
                        [&>code]:bg-muted [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded [&>code]:text-sm
                        [&>strong]:text-foreground [&>strong]:font-semibold"
            dangerouslySetInnerHTML={{
              __html: post.content
                .split("\n")
                .map((line) => {
                  if (line.startsWith("# "))
                    return `<h1>${line.slice(2)}</h1>`;
                  if (line.startsWith("## "))
                    return `<h2>${line.slice(3)}</h2>`;
                  if (line.startsWith("### "))
                    return `<h3>${line.slice(4)}</h3>`;
                  if (line.startsWith("- "))
                    return `<li>${line.slice(2)}</li>`;
                  if (/^\d+\.\s/.test(line))
                    return `<li>${line.replace(/^\d+\.\s/, "")}</li>`;
                  if (line.trim() === "") return "";
                  if (line.startsWith("**") && line.endsWith("**"))
                    return `<strong>${line.slice(2, -2)}</strong>`;
                  return `<p>${line}</p>`;
                })
                .join(""),
            }}
          />
        </div>

        {/* Share */}
        <div className="flex items-center justify-between py-6 border-t border-b border-border mb-12">
          <span className="font-medium flex items-center gap-2">
            <Share2 className="h-4 w-4" />
            Share this article
          </span>
          <div className="flex gap-2">
            <Button variant="outline" size="icon-sm">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon-sm">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon-sm">
              <Facebook className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Author Bio */}
        <Card className="mb-12 bg-muted/30">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white text-lg font-medium">
                {post.author.avatar}
              </div>
              <div>
                <p className="font-semibold text-lg mb-1">
                  {post.author.name}
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  {post.author.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Passionate about building tools that help teams work better
                  together. When not writing, you can find them exploring new
                  coffee shops and hiking trails.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow">
                    <div className="relative aspect-video overflow-hidden">
                      {relatedPost.coverImage ? (
                        <img
                          src={relatedPost.coverImage}
                          alt={relatedPost.title}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-brand-gradient" />
                      )}
                    </div>
                    <CardContent className="p-4">
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
