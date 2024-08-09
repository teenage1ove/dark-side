export interface IResponseArticles {
    record: Record;
    metadata: IMetadata;
  }
  
  export interface IMetadata {
    id: string;
    private: boolean;
    createdAt: string;
  }
  
  export interface Record {
    articles: Article[];
  }
  
  export interface Article {
    id: number;
    title: string;
    image: string;
    link: string;
    level: string;
    description: string;
  }