export interface IPortfolioItem {
  name: string;
  description: string;
  content: string;
  image: {
    url: string
  }
  tags: string[]
}