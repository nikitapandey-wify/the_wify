import {
  Users,
  ArrowRight,
  Star,
  Check,
  Zap,
  Building2,
  Sparkles,
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
import TrialRequestForm from "@/features/leads/components/entry/trial-request-form";
import {
  ShieldCheck,
  FileText,
  AlertTriangle,
  Wifi,
  Scale,
} from "lucide-react";
// import SignUpForm from "@/features/signup/components/entry/SignUpForm";

const features = [
  {
    title: "Secure User Access Login & OTP",
    description:
      "Secure user access login and OTP verification for enhanced security.",
    icon: ShieldCheck,
  },
  {
    title: "KYC & Activity Logs",
    description:
      "KYC verification and detailed activity logs for compliance and accountability.",
    icon: FileText,
  },
  {
    title: "Cyber Threat Protection",
    description:
      "Real-time threat detection and prevention to safeguard your data.",
    icon: AlertTriangle,
  },
  {
    title: "Customer Data Management",
    description:
      "Efficient customer data management and organization for better customer relationships.",
    icon: Users,
  },
  {
    title: "Bandwidth & Usage Control",
    description:
      "Manage bandwidth usage and control access to resources for efficient resource allocation.",
    icon: Wifi,
  },
  {
    title: "Legal & Compliance",
    description:
      "Compliance with legal and regulatory requirements for peace of mind.",
    icon: Scale,
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

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small teams getting started",
    price: "Free",
    period: "forever",
    icon: Zap,
    featured: false,
    features: [
      "Up to 5 team members",
      "Basic security features",
      "1GB storage",
      "Email support",
      "Basic analytics",
      "Community access",
    ],
    cta: "Get Started",
    ctaVariant: "outline" as const,
  },
  {
    name: "Professional",
    description: "Best for growing businesses",
    price: "$29",
    period: "per user/month",
    icon: Sparkles,
    featured: true,
    features: [
      "Unlimited team members",
      "Advanced security & OTP",
      "50GB storage",
      "Priority support",
      "Advanced analytics",
      "KYC verification",
      "Custom integrations",
      "API access",
    ],
    cta: "Start Free Trial",
    ctaVariant: "default" as const,
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    price: "Custom",
    period: "contact us",
    icon: Building2,
    featured: false,
    features: [
      "Everything in Professional",
      "Unlimited storage",
      "24/7 dedicated support",
      "Custom security policies",
      "On-premise deployment",
      "SLA guarantee",
      "Compliance assistance",
      "Training & onboarding",
    ],
    cta: "Contact Sales",
    ctaVariant: "outline" as const,
  },
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-muted rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-info/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div className="text-center lg:text-left">
              {/* <Badge variant="secondary" className="mb-6 px-4 py-1.5">
                <Star className="h-3 w-3 mr-1.5 fill-warning text-warning" />
                Now in Public Beta
              </Badge> */}

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                Build the Future{" "}
                <span className="text-brand-gradient">Your Way</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                WIFY empowers teams to create, collaborate, and scale with
                intelligent tools designed for the modern workflow.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="#register">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-brand-gradient text-brand-foreground border-0 hover:opacity-90 h-12 px-8"
                  >
                    Start Free Trial
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto h-12 px-8"
                  >
                    Read Our Blog
                  </Button>
                </Link>
              </div>

              {/* <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full bg-brand-gradient border-2 border-background flex items-center justify-center text-xs font-medium text-white"
                      >
                        {["A", "B", "C"][i]}
                      </div>
                    ))}
                  </div>
                  <span>2,000+ users</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-warning text-warning"
                    />
                  ))}
                  <span className="ml-1">4.9/5</span>
                </div>
              </div> */}
            </div>

            {/* Right - Registration Form */}
            {/* <div id="register" className="scroll-mt-24">
              <Card className="max-w-md mx-auto lg:ml-auto backdrop-blur-sm bg-card/80 border-border/50 shadow-2xl shadow-brand">
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
            </div> */}
            {/* <SignUpForm /> */}
            <TrialRequestForm />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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
                className="group hover:shadow-lg hover:shadow-brand transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-muted text-brand mb-4 group-hover:bg-brand/20 transition-colors">
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

      {/* Pricing Section */}
      <section id="pricing" className="py-20 lg:py-32 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your needs. All plans include a 30-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  plan.featured
                    ? "border-primary shadow-2xl shadow-brand scale-[1.02] bg-card"
                    : "bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-brand"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-gradient text-white text-sm font-medium px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-2">
                  {/* <div className={`flex h-12 w-12 items-center justify-center rounded-xl mx-auto mb-4 ${
                    plan.featured 
                      ? "bg-brand-gradient text-white" 
                      : "bg-brand-muted text-brand"
                  }`}>
                    <plan.icon className="h-6 w-6" />
                  </div> */}
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Free" && plan.price !== "Custom" && (
                      <span className="text-muted-foreground text-sm ml-1">
                        /{plan.period.split("/")[1] || "month"}
                      </span>
                    )}
                    <p className="text-sm text-muted-foreground mt-1">
                      {plan.period}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className={`flex h-5 w-5 items-center justify-center rounded-full shrink-0 mt-0.5 ${
                          plan.featured 
                            ? "bg-brand-gradient text-white" 
                            : "bg-brand-muted text-brand"
                        }`}>
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="#register" className="mt-auto">
                    <Button
                      variant={plan.ctaVariant}
                      className={`w-full h-11 ${
                        plan.featured
                          ? "bg-brand-gradient text-brand-foreground border-0 hover:opacity-90"
                          : ""
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ or Trust badges */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by 2,000+ companies worldwide
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap opacity-60">
              {["TechCorp", "StartupX", "DataFlow", "CloudBase", "SecureNet"].map((company) => (
                <span key={company} className="text-lg font-semibold text-muted-foreground">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
            
      {/* Testimonials Section */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* <Badge variant="outline" className="mb-4">
              Testimonials
            </Badge> */}
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
                        className="h-4 w-4 fill-warning text-warning"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-white text-sm font-medium">
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
      {/* <section className="py-20 lg:py-32 bg-brand-gradient text-white relative overflow-hidden">
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
                className="bg-white text-brand hover:bg-white/90 h-12 px-8 text-base font-semibold"
              >
                Get Started Free
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
            <Link href="/blog">
              <Button
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 h-12 px-8 text-base"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}
