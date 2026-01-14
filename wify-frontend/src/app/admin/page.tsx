import Link from "next/link";
import {
  FileText,
  Users,
  TrendingUp,
  Eye,
  ArrowUpRight,
  Plus,
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
import { mockBlogs } from "@/features/blog/data/mock-blogs";

const stats = [
  {
    title: "Total Posts",
    value: mockBlogs.length.toString(),
    change: "+2 this week",
    icon: FileText,
    trend: "up",
  },
  {
    title: "Total Leads",
    value: "247",
    change: "+18 this week",
    icon: Users,
    trend: "up",
  },
  {
    title: "Page Views",
    value: "12.4K",
    change: "+23% vs last week",
    icon: Eye,
    trend: "up",
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    change: "+0.4% vs last week",
    icon: TrendingUp,
    trend: "up",
  },
];

export default function AdminDashboard() {
  const recentPosts = mockBlogs.slice(0, 4);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here&apos;s an overview of your site.
          </p>
        </div>
        <Link href="/admin/blogs/new">
          <Button className="bg-brand-gradient text-brand-foreground border-0 hover:opacity-90">
            <Plus className="h-4 w-4 mr-2" />
            New Post
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-success flex items-center gap-1 mt-1">
                <ArrowUpRight className="h-3 w-3" />
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Posts */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent Posts</CardTitle>
            <CardDescription>Your latest blog posts</CardDescription>
          </div>
          <Link href="/admin/blogs">
            <Button variant="outline" size="sm">
              View All
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <div
                key={post.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg overflow-hidden bg-brand-gradient flex items-center justify-center">
                    {post.coverImage ? (
                      <img
                        src={post.coverImage}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <FileText className="h-5 w-5 text-white" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium line-clamp-1">{post.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <span>•</span>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={
                      post.status === "published" ? "success" : "secondary"
                    }
                    className="capitalize"
                  >
                    {post.status}
                  </Badge>
                  <Link href={`/admin/blogs/${post.id}`}>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
          <Link href="/admin/blogs/new">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-muted text-brand group-hover:bg-brand/20 transition-colors">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Write a Post</h3>
                <p className="text-sm text-muted-foreground">
                  Create new blog content
                </p>
              </div>
            </CardContent>
          </Link>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
          <Link href="/admin/leads">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/10 text-success group-hover:bg-success/20 transition-colors">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">View Leads</h3>
                <p className="text-sm text-muted-foreground">
                  See registered users
                </p>
              </div>
            </CardContent>
          </Link>
        </Card>

        <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
          <Link href="/" target="_blank">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-warning/10 text-warning group-hover:bg-warning/20 transition-colors">
                <Eye className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">View Site</h3>
                <p className="text-sm text-muted-foreground">
                  Open public website
                </p>
              </div>
            </CardContent>
          </Link>
        </Card>
      </div>
    </div>
  );
}
