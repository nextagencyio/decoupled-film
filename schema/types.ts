// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuredItemsTitle: string;
  heroDescription: { value: string };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  statsItems: any[];
  title: string;
}

export interface ParagraphStatItem {
  id: string;
  label: string;
  number: string;
}

export interface NodeNews {
  id: string;
  body: { value: string; summary?: string };
  image: { url: string; alt: string; width: number; height: number };
  newsCategory: any[];
  path: string;
  publishDate: { time: string };
  title: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodeProject {
  id: string;
  body: { value: string; summary?: string };
  director: string;
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  projectType: any[];
  releaseYear: string;
  runtime: string;
  title: string;
  trailerUrl: string;
}

export interface NodeService {
  id: string;
  body: { value: string; summary?: string };
  iconName: string;
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  serviceArea: any[];
  title: string;
}

export interface NodeTeamMember {
  id: string;
  body: { value: string; summary?: string };
  notableCredits: string[];
  path: string;
  photo: { url: string; alt: string; width: number; height: number };
  position: string;
  title: string;
}
