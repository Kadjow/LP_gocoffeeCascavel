import { ProductHighlight } from '../models/product-highlight.model';
import { PRODUCT_DETAIL_IMAGE_CONFIG } from '../constants/product-images.constants';

export function buildProductDetailImageUrl(imageKey?: string | null): string | null {
  const normalizedKey = imageKey?.trim();

  if (!normalizedKey) {
    return null;
  }

  const baseUrl = PRODUCT_DETAIL_IMAGE_CONFIG.baseUrl.trim().replace(/\/+$/, '');
  const encodedKey = normalizedKey
    .split('/')
    .filter((segment) => segment.length > 0)
    .map((segment) => encodeURIComponent(segment))
    .join('/');

  try {
    const url = new URL(`${baseUrl}/${encodedKey}`);

    for (const [param, value] of Object.entries(PRODUCT_DETAIL_IMAGE_CONFIG.defaultParams)) {
      url.searchParams.set(param, value);
    }

    return url.toString();
  } catch {
    return null;
  }
}

export function buildProductDetailImageAlt(product: ProductHighlight): string {
  const customAlt = product.imageAlt?.trim();

  if (customAlt) {
    return customAlt;
  }

  return `Foto do produto ${product.name}`;
}
