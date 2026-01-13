import { BlogPost } from "@/features/blog/types/blog";

export const mockBlogs: BlogPost[] = [
  {
    id: "1",
    slug: "getting-started-with-wify",
    title: "Getting Started with WIFY: A Complete Guide",
    excerpt:
      "Learn how to set up your workspace, invite team members, and start collaborating effectively with WIFY's powerful features.",
    content: `
# Getting Started with WIFY

Welcome to WIFY! This guide will walk you through everything you need to know to get started with our platform.

## Setting Up Your Workspace

The first step is to create your workspace. A workspace is your team's home base where all your projects and collaborations happen.

1. Sign up for an account at wify.app
2. Click "Create Workspace" from your dashboard
3. Give your workspace a name and invite your team members

## Inviting Team Members

Collaboration is at the heart of WIFY. Here's how to invite your team:

- Navigate to **Settings > Team**
- Click "Invite Members"
- Enter email addresses (separate multiple with commas)
- Choose their role (Admin, Editor, or Viewer)

## Key Features to Explore

### Real-time Collaboration
Work together in real-time with your team. See changes as they happen and never worry about version conflicts.

### Smart Notifications
Stay informed without being overwhelmed. Our AI-powered notification system learns your preferences and surfaces what matters most.

### Powerful Integrations
Connect WIFY with your favorite tools like Slack, GitHub, Figma, and more.

## Next Steps

Now that you're set up, explore these resources:
- Check out our [Feature Documentation](/docs/features)
- Join our [Community Forum](/community)
- Follow our [Blog](/blog) for tips and updates

Happy building! 🚀
    `,
    coverImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop",
    author: {
      name: "Sarah Chen",
      avatar: "SC",
      role: "Product Lead",
    },
    category: "Tutorials",
    tags: ["getting-started", "guide", "tutorial"],
    publishedAt: "2026-01-10T10:00:00Z",
    readingTime: "5 min read",
    status: "published",
  },
  {
    id: "2",
    slug: "the-future-of-remote-collaboration",
    title: "The Future of Remote Collaboration: Trends to Watch in 2026",
    excerpt:
      "Explore the emerging trends shaping how distributed teams work together, from AI assistants to immersive virtual workspaces.",
    content: `
# The Future of Remote Collaboration

The way we work has fundamentally changed. As we look ahead to 2026 and beyond, several key trends are reshaping remote collaboration.

## AI-Powered Assistance

Artificial intelligence is becoming an integral part of our workflows:

- **Smart Scheduling**: AI that understands time zones, preferences, and priorities
- **Automated Summaries**: Never miss important information from long meetings
- **Predictive Task Management**: Know what needs attention before it becomes urgent

## Immersive Virtual Workspaces

The line between physical and digital continues to blur:

### Spatial Computing
New hardware and software enable truly immersive collaboration experiences.

### Digital Twins
Virtual representations of physical spaces allow distributed teams to work as if they were together.

## Asynchronous-First Culture

The shift to async communication brings numerous benefits:

1. **Better Work-Life Balance**: Work when you're most productive
2. **Thoughtful Communication**: More time to craft clear messages
3. **Global Talent Access**: Hire the best, regardless of time zone

## Building Trust Remotely

Trust remains the foundation of effective collaboration:

- **Transparency Tools**: Make work visible without micromanagement
- **Virtual Water Coolers**: Spontaneous connection opportunities
- **Clear Documentation**: Everyone has access to the same information

## What This Means for Your Team

The teams that thrive will be those that embrace these changes while maintaining human connection at their core.

Stay tuned as we continue to build the future of work together.
    `,
    coverImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
    author: {
      name: "Marcus Johnson",
      avatar: "MJ",
      role: "CEO",
    },
    category: "Insights",
    tags: ["remote-work", "future", "trends", "collaboration"],
    publishedAt: "2026-01-08T14:30:00Z",
    readingTime: "7 min read",
    status: "published",
  },
  {
    id: "3",
    slug: "maximizing-team-productivity",
    title: "10 Proven Strategies to Maximize Team Productivity",
    excerpt:
      "Discover actionable tips backed by research to help your team accomplish more while maintaining work-life balance.",
    content: `
# 10 Proven Strategies to Maximize Team Productivity

Productivity isn't about working more hours—it's about working smarter. Here are 10 strategies that actually work.

## 1. Define Clear Goals

Teams with clear, measurable goals are 3x more likely to succeed. Use the SMART framework:
- **S**pecific
- **M**easurable
- **A**chievable
- **R**elevant
- **T**ime-bound

## 2. Minimize Meeting Time

The average professional spends 31 hours per month in unproductive meetings. Combat this by:
- Having a clear agenda for every meeting
- Setting default meeting times to 25 or 50 minutes
- Asking "Could this be an email?"

## 3. Batch Similar Tasks

Context switching costs an average of 23 minutes of refocus time. Group similar tasks together.

## 4. Use Time Blocking

Dedicate specific hours to specific types of work:
- Deep work: 9 AM - 12 PM
- Meetings: 2 PM - 4 PM
- Admin: 4 PM - 5 PM

## 5. Embrace Automation

Identify repetitive tasks and automate them:
- Email templates for common responses
- Automated workflows for approvals
- Scheduled reports and updates

## 6. Create Documentation

Well-documented processes save countless hours of explanation and reduce errors.

## 7. Foster Psychological Safety

Teams that feel safe to take risks and make mistakes are more innovative and productive.

## 8. Regular Check-ins

Short, frequent check-ins prevent small issues from becoming big problems.

## 9. Celebrate Wins

Recognition boosts morale and motivation. Celebrate both big and small achievements.

## 10. Protect Focus Time

Encourage "do not disturb" periods where team members can focus without interruption.

## Implementing These Strategies

Start with one or two strategies and measure the impact before adding more. Small, consistent improvements lead to significant results over time.
    `,
    coverImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    author: {
      name: "Elena Rodriguez",
      avatar: "ER",
      role: "Head of Customer Success",
    },
    category: "Productivity",
    tags: ["productivity", "tips", "team-management", "efficiency"],
    publishedAt: "2026-01-05T09:00:00Z",
    readingTime: "8 min read",
    status: "published",
  },
  {
    id: "4",
    slug: "security-best-practices",
    title: "Security Best Practices for Modern Teams",
    excerpt:
      "Protect your team's data and workflows with these essential security practices that every organization should implement.",
    content: `
# Security Best Practices for Modern Teams

In an age of increasing cyber threats, security isn't optional—it's essential. Here's how to protect your team.

## Authentication & Access

### Enable Multi-Factor Authentication (MFA)
MFA reduces the risk of unauthorized access by 99.9%. Make it mandatory for all team members.

### Use Single Sign-On (SSO)
Centralize authentication to reduce password fatigue and improve security monitoring.

### Principle of Least Privilege
Give users only the access they need to do their jobs—nothing more.

## Data Protection

### Encrypt Everything
- Data at rest
- Data in transit
- End-to-end encryption for sensitive communications

### Regular Backups
Follow the 3-2-1 rule:
- 3 copies of your data
- 2 different storage types
- 1 offsite location

## Training & Awareness

### Phishing Awareness
Conduct regular phishing simulations and training. Your team is your first line of defense.

### Security Policies
Document and regularly update your security policies. Make them accessible to everyone.

## Incident Response

Have a plan before you need it:
1. Detection
2. Containment
3. Eradication
4. Recovery
5. Lessons Learned

## Tools & Technologies

Invest in:
- Password managers
- Security monitoring
- Vulnerability scanning
- Endpoint protection

Security is everyone's responsibility. Build a culture where security is second nature.
    `,
    coverImage:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop",
    author: {
      name: "David Kim",
      avatar: "DK",
      role: "Security Engineer",
    },
    category: "Security",
    tags: ["security", "best-practices", "data-protection"],
    publishedAt: "2026-01-02T11:00:00Z",
    readingTime: "6 min read",
    status: "published",
  },
];

export const categories = [
  { id: "1", name: "All", slug: "all", postCount: mockBlogs.length },
  {
    id: "2",
    name: "Tutorials",
    slug: "tutorials",
    postCount: mockBlogs.filter((b) => b.category === "Tutorials").length,
  },
  {
    id: "3",
    name: "Insights",
    slug: "insights",
    postCount: mockBlogs.filter((b) => b.category === "Insights").length,
  },
  {
    id: "4",
    name: "Productivity",
    slug: "productivity",
    postCount: mockBlogs.filter((b) => b.category === "Productivity").length,
  },
  {
    id: "5",
    name: "Security",
    slug: "security",
    postCount: mockBlogs.filter((b) => b.category === "Security").length,
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return mockBlogs.find((blog) => blog.slug === slug);
}

export function getBlogsByCategory(category: string): BlogPost[] {
  if (category === "all") return mockBlogs;
  return mockBlogs.filter(
    (blog) => blog.category.toLowerCase() === category.toLowerCase()
  );
}
