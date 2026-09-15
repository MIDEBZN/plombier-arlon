export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  excerpt: string;
  category: 'Tarifs' | 'Urgences' | 'Débouchage' | 'Fuites' | 'Chauffage & Eau' | 'Rénovation';
  readingTime: string;
  publishDate: string;
  updatedDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  geoAnswer: string;
  tableOfContents: { id: string; title: string; level: number }[];
  faq: BlogFaq[];
  relatedServices: { title: string; url: string; badge: string }[];
  relatedLocations: { name: string; url: string; time: string }[];
  contentHtml: string;
}
