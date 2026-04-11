import { PRODUCT_CATEGORIES, ProductCategory } from '../models/product-highlight.model';

export const PRODUCT_CATEGORY_SET = new Set<ProductCategory>(PRODUCT_CATEGORIES);

const BEVERAGE_PRODUCT_CATEGORIES = new Set<ProductCategory>([
  'Bebidas Quentes',
  'Bebidas Geladas',
  'Frappes',
  'Matcha',
]);

export const isBeverageCategory = (category: ProductCategory): boolean =>
  BEVERAGE_PRODUCT_CATEGORIES.has(category);
