import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { mockBlogs, categories } from "@/features/blog/data/mock-blogs";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export const metadata = {
  title: "Blog | WIFY",
  description: "Insights, tutorials, and updates from the WIFY team.",
};

export default function BlogPage() {
  const featuredPost = mockBlogs[0];
  const otherPosts = mockBlogs.slice(1);

  return (
    <div className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4">
            Our Blog
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Insights & Updates
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the latest tutorials, product updates, and insights from the
            WIFY team to help you work smarter.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={category.slug === "all" ? "default" : "outline"}
              size="sm"
              className={
                category.slug === "all"
                  ? "bg-brand-gradient text-brand-foreground border-0 hover:opacity-90"
                  : ""
              }
            >
              {category.name}
              <span className="ml-1.5 text-xs opacity-60">
                ({category.postCount})
              </span>
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <Link href={`/blog/${featuredPost.slug}`} className="block mb-12">
          <Card className="overflow-hidden group hover:shadow-xl hover:shadow-brand transition-all duration-300">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-video md:aspect-auto overflow-hidden">
                {featuredPost.coverImage ? (
                  <img
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 bg-brand-gradient" />
                )}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-foreground backdrop-blur-sm">
                    Featured
                  </Badge>
                </div>
              </div>
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4">
                  {featuredPost.category}
                </Badge>
                <h2 className="text-2xl lg:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {formatDate(featuredPost.publishedAt)}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readingTime}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-white text-sm font-medium">
                    {featuredPost.author.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-sm">
                      {featuredPost.author.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {featuredPost.author.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Link>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="h-full overflow-hidden group hover:shadow-lg hover:shadow-brand transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-video overflow-hidden">
                  {post.coverImage ? (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-brand-gradient" />
                  )}
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {post.readingTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-2 mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-gradient text-white text-xs font-medium">
                        {post.author.avatar}
                      </div>
                      <span className="text-sm font-medium">
                        {post.author.name}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {formatDate(post.publishedAt)}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 lg:mt-24 text-center">
          <Card className="max-w-2xl mx-auto bg-brand-muted border-brand/10">
            <CardContent className="py-10">
              <h3 className="text-2xl font-bold mb-3">Stay in the Loop</h3>
              <p className="text-muted-foreground mb-6">
                Get the latest articles and insights delivered to your inbox.
              </p>
              <Link href="/#register">
                <Button className="bg-brand-gradient text-brand-foreground border-0 hover:opacity-90">
                  Subscribe to Updates
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
