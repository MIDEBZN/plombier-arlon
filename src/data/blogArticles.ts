import type { BlogArticle, BlogFaq } from './articles/types';
import { clusterTarifsJuridique } from './articles/cluster-tarifs-juridique';
import { clusterUrgences } from './articles/cluster-urgences';
import { clusterDebouchage } from './articles/cluster-debouchage';
import { clusterFuites } from './articles/cluster-fuites';
import { clusterChauffageEau } from './articles/cluster-chauffage-eau';
import { clusterRenovationSanitaire } from './articles/cluster-renovation-sanitaire';

export type { BlogArticle, BlogFaq };

export const blogArticles: BlogArticle[] = [
  ...clusterTarifsJuridique,
  ...clusterUrgences,
  ...clusterDebouchage,
  ...clusterFuites,
  ...clusterChauffageEau,
  ...clusterRenovationSanitaire,
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): BlogArticle[] {
  if (!category || category === 'Tous') return blogArticles;
  return blogArticles.filter((a) => a.category === category);
}
