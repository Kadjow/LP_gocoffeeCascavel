export interface StoryPoint {
  title: string;
  description: string;
}

export interface ServiceMode {
  label: string;
  detail: string;
}

export interface BusinessModel {
  name: string;
  subtitle: string;
  address: string;
  whatsappUrl: string;
  ifoodUrl: string;
  mapUrl: string;
  mapEmbedUrl: string;
  rating: string;
  reviewCount: number;
  heroBadge: string;
  heroHeadline: string;
  heroDescription: string;
  heroHighlights: StoryPoint[];
  experiencePillars: StoryPoint[];
  serviceModes: ServiceMode[];
  milkOptionsNote: string;
}
