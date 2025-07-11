export interface TopHeadlinesResponse {
  status: string;
  totalResult: number;
  articles: ArticleResource[];
}

export interface ArticleResource{
  source: { id: string | null; name: string;}
  title: string;
  description: string| null;
  url: string;
  urlToImage: string| null;
  publishedAt: string;
}
