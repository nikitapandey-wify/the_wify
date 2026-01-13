export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  author: {
    name: string;
    avatar?: string;
    role?: string;
  };
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  status: "draft" | "published";
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  postCount: number;
}
