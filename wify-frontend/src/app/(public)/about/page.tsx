import { Badge } from "@/shared/components/ui/badge";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Target, Heart, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We're committed to building tools that genuinely help teams work better, not just ship features.",
  },
  {
    icon: Heart,
    title: "User-First",
    description:
      "Every decision we make starts with the question: how does this help our users succeed?",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We're constantly exploring new ways to solve old problems and push the boundaries of what's possible.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We believe in building together. Our community shapes our product and our direction.",
  },
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    avatar: "SC",
    bio: "Former engineering lead at top tech companies. Passionate about building products that matter.",
  },
  {
    name: "Marcus Johnson",
    role: "CTO & Co-founder",
    avatar: "MJ",
    bio: "15+ years in distributed systems. Believer in simple solutions to complex problems.",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Product",
    avatar: "ER",
    bio: "Product leader with a track record of building beloved user experiences.",
  },
  {
    name: "David Kim",
    role: "Head of Engineering",
    avatar: "DK",
    bio: "Full-stack engineer turned leader. Focused on building high-performing teams.",
  },
];

export const metadata = {
  title: "About | WIFY",
  description: "Learn about our mission, values, and the team behind WIFY.",
};

export default function AboutPage() {
  return (
    <div className="py-12 lg:py-20">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-4">
            About Us
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Building the Future of{" "}
            <span className="text-brand-gradient">
              Team Collaboration
            </span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We started WIFY with a simple belief: that work should be seamless,
            not stressful. Our mission is to build tools that help teams focus
            on what matters most—creating amazing things together.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-4">
              Our Story
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              From Frustration to Innovation
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                WIFY was born out of our own frustration with existing
                collaboration tools. We were a small team trying to build
                something great, but we spent more time fighting our tools than
                using them.
              </p>
              <p>
                We knew there had to be a better way. So we set out to build it
                ourselves—a platform that just works, that gets out of your way
                and lets you focus on the work that matters.
              </p>
              <p>
                Today, WIFY helps thousands of teams around the world collaborate
                more effectively. But we're just getting started. We're committed
                to continuous improvement, always listening to our users and
                finding new ways to help them succeed.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-brand-muted flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl font-bold text-brand-gradient mb-2">
                  2024
                </div>
                <p className="text-muted-foreground">Founded</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-primary">2K+</div>
              <p className="text-sm text-muted-foreground">Happy Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Our Values
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from product decisions to
              how we treat our team and customers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-muted text-brand mx-auto mb-4">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Our Team
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Meet the People Behind WIFY
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're a diverse team of builders, dreamers, and problem-solvers
              united by a shared passion for great products.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-gradient text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-105 transition-transform">
                    {member.avatar}
                  </div>
                  <h3 className="font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-gradient text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Join Us on This Journey
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            We're always looking for talented people who share our passion for
            building great products. Check out our open positions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/careers"
              className="inline-flex items-center justify-center h-12 px-8 bg-white text-brand rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              View Open Positions
            </a>
            <a
              href="/#register"
              className="inline-flex items-center justify-center h-12 px-8 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
