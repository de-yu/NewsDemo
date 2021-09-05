export interface Search {
  q: string;
  from: string;
  to: string;
  page: number;
  sortBy: string;
}

export interface Article {

  author: string;
  title: string;
  description: string;
  url:string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  source: {
    id: string;
    name: string;
  };
}
