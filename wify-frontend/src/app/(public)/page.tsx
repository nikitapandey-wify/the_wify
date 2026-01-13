import {
  Zap,
  Shield,
  Rocket,
  Users,
  BarChart3,
  Globe,
  ArrowRight,
  Star,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import LeadCaptureForm from "@/features/leads/components/entry/lead-capture-form";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized for speed with cutting-edge technology that keeps your workflow seamless.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption and security protocols to keep your data safe and compliant.",
  },
  {
    icon: Rocket,
    title: "Scale Effortlessly",
    description:
      "From startup to enterprise, our infrastructure grows with your ambitions.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Real-time collaboration tools that bring your team together, wherever they are.",
  },
  {
    icon: BarChart3,
    title: "Powerful Analytics",
    description:
      "Deep insights into your performance with customizable dashboards and reports.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Multi-region deployment ensures low latency for users around the world.",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechFlow",
    content:
      "WIFY transformed how we manage our workflows. The speed and reliability are unmatched.",
    avatar: "SC",
  },
  {
    name: "Marcus Johnson",
    role: "Founder at Startup Hub",
    content:
      "We've tried many solutions, but WIFY's intuitive design and powerful features won us over.",
    avatar: "MJ",
  },
  {
    name: "Elena Rodriguez",
    role: "Product Lead at Scale Inc",
    content:
      "The analytics alone are worth it. We've seen a 40% improvement in team productivity.",
    avatar: "ER",
  },
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-violet-500/20 via-fuchsia-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-cyan-500/10 via-blue-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="mb-6 px-4 py-1.5">
                <Star className="h-3 w-3 mr-1.5 fill-amber-500 text-amber-500" />
                Now in Public Beta
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                Build the Future{" "}
                <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                  Your Way
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                WIFY empowers teams to create, collaborate, and scale with
                intelligent tools designed for the modern workflow.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="#register">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white border-0 h-12 px-8"
                  >
                    Start Free Trial
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 px-8">
                    Read Our Blog
                  </Button>
                </Link>
              </div>

              <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {["bg-violet-500", "bg-fuchsia-500", "bg-pink-500"].map(
                      (color, i) => (
                        <div
                          key={i}
                          className={`h-8 w-8 rounded-full ${color} border-2 border-background flex items-center justify-center text-xs font-medium text-white`}
                        >
                          {["A", "B", "C"][i]}
                        </div>
                      )
                    )}
                  </div>
                  <span>2,000+ users</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="ml-1">4.9/5</span>
                </div>
              </div>
            </div>

            {/* Right - Registration Form */}
            <div id="register" className="scroll-mt-24">
              <Card className="max-w-md mx-auto lg:ml-auto backdrop-blur-sm bg-card/80 border-border/50 shadow-2xl shadow-violet-500/5">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl">Get Early Access</CardTitle>
                  <CardDescription>
                    Join the waitlist and be the first to experience WIFY.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <LeadCaptureForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to streamline your workflow and boost
              productivity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 text-violet-600 mb-4 group-hover:from-violet-500/20 group-hover:to-fuchsia-500/20 transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Loved by Teams Worldwide
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what our customers have to say about their experience with
              WIFY.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white text-sm font-medium">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join thousands of teams already using WIFY to build better products
            faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#register">
              <Button
                size="lg"
                className="bg-white text-violet-600 hover:bg-white/90 h-12 px-8 text-base font-semibold"
              >
                Get Started Free
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
            <Link href="/blog">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 h-12 px-8 text-base"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
