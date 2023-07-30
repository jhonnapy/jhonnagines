export interface IBlogPost {
  content: string;
  description: string;
  slug: string;
  sys: {
    publishedAt: string;
  }
  title: string;
}