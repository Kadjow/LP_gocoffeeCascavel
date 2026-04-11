export const PRODUCT_CATEGORIES = [
  'Bebidas Quentes',
  'Bebidas Geladas',
  'Frappes',
  'Matcha',
  'Doces',
  'Salgados',
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

export interface ProductHighlight {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  accent: 'caramel' | 'olive' | 'cream';
  imageKey?: string;
  imageAlt?: string;
}
