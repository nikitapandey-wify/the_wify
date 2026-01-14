"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/utils/utils";

type NavLink =
  | {
      label: string;
      href: string;
      type: "link";
    }
  | {
      label: string;
      type: "dropdown";
      sections: {
        title: string;
        description?: string;
        items?: {
          label: string;
          description?: string;
          href?: string;
        }[];
      }[];
      spotlight?: {
        title: string;
        description: string;
        href: string;
      };
    };

const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "/",
    type: "link",
  },
  {
    label: "Pricing",
    href: "/#pricing",
    type: "link",
  },
  {
    label: "Features",
    type: "dropdown",
    sections: [
      {
        title: "Secure User Access Login & OTP",
        description:
          "Secure user access login and OTP verification for enhanced security.",
      },
      {
        title: "KYC & Activity Logs",
        description:
          "KYC verification and detailed activity logs for compliance and accountability.",
      },
      {
        title: "Cyber Threat Protection",
        description:
          "Real-time threat detection and prevention to safeguard your data.",
      },
      {
        title: "Customer Data Management",
        description:
          "Efficient customer data management and organization for better customer relationships.",
      },
      {
        title: "Bandwidth & Usage Control",
        description:
          "Manage bandwidth usage and control access to resources for efficient resource allocation.",
      },
      {
        title: "Legal & Compliance",
        description:
          "Compliance with legal and regulatory requirements for peace of mind.",
      },
    ],
  },
  {
    label: "Resources",
    type : "link",
    href : "/blog",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold tracking-tight"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-white">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="text-brand-gradient">WIFY</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {navLinks.map((link) => {
              return link.type === "link" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                    pathname === link.href
                      ? "text-foreground bg-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  {link.label}
                </Link>
              ) : (
                <NavDropdown key={link.label} link={link} />
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex md:items-center md:gap-3">
            {/* <Link href="/admin">
              <Button variant="ghost" size="sm">
              Admin
              </Button>
              </Link> */}
            <Link href="/#register">
              <Button
                size="sm"
                className="bg-brand-gradient text-brand-foreground border-0 hover:opacity-90"
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg hover:bg-accent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                return link.type === "link" ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                      pathname === link.href
                        ? "text-foreground bg-accent"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    )}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <details key={link.label} className="px-4 py-2">
                    <summary className="cursor-pointer font-medium">
                      {link.label}
                    </summary>
                    <div key={link.label}>
                      <div className="mt-4 space-y-4 pl-4">
                        {link?.sections?.map((section) => (
                          <div key={section.title}>
                            <h5 className="text-sm font-medium">
                              {section.title}
                            </h5>
                            <p className="text-sm text-muted-foreground">
                              {section.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </details>
                );
              })}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border/50">
                <Link href="/admin" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Admin
                  </Button>
                </Link>
                <Link
                  href="/#register"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button className="w-full bg-brand-gradient text-brand-foreground border-0 hover:opacity-90">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

const NavDropdown = ({ link }: { link: NavLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onClick={() => setIsOpen(!isOpen)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent">
        {link.label}
      {isOpen ? <ChevronUp className="h-4 w-4" onClick={() => setIsOpen(false)}/> : <ChevronDown className="h-4 w-4" onClick={() => setIsOpen(true)}/>}
      </button>
      {isOpen && (
        <div className="absolute -translate-x-1/2 mx-auto mt-2 w-[900px] rounded-xl border bg-background shadow-xl">
          <div className="grid grid-cols-4 gap-8 p-8">
            {link?.type === "dropdown" &&
              link?.sections?.map((section) => (
                <div key={section.title}>
                  <h3 className={cn("text-lg font-medium", "hover:text-primary hover:cursor-pointer")}>{section.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {section.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
