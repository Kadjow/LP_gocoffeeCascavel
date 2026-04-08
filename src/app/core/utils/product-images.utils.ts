import { ProductHighlight } from '../models/product-highlight.model';
import { PRODUCT_DETAIL_IMAGE_CONFIG } from '../constants/product-images.constants';

export function buildProductDetailImageUrl(imageKey?: string | null): string | null {
  const normalizedKey = imageKey?.trim();

  if (!normalizedKey) {
    return null;
  }

  const basePath = PRODUCT_DETAIL_IMAGE_CONFIG.basePath.trim().replace(/\/+$/, '');
  const extension = PRODUCT_DETAIL_IMAGE_CONFIG.defaultExtension.trim().replace(/^\.+/, '');
  const encodedKey = normalizedKey
    .split('/')
    .filter((segment) => segment.length > 0)
    .map((segment) => encodeURIComponent(segment))
    .join('/');

  if (!encodedKey || !extension) {
    return null;
  }

  const hasExplicitExtension = /\.[a-z0-9]+$/i.test(encodedKey);

  return `${basePath}/${hasExplicitExtension ? encodedKey : `${encodedKey}.${extension}`}`;
}

export function buildProductDetailImageAlt(product: ProductHighlight): string {
  const customAlt = product.imageAlt?.trim();

  if (customAlt) {
    return customAlt;
  }

  return `Foto do produto ${product.name}`;
}
