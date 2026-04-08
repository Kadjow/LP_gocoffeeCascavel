import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  HostListener,
  PLATFORM_ID,
  computed,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BusinessModel } from '../../../../core/models/business.model';
import { ProductHighlight } from '../../../../core/models/product-highlight.model';
import {
  buildProductDetailImageAlt,
  buildProductDetailImageUrl,
} from '../../../../core/utils/product-images.utils';
import { RevealOnScrollDirective } from '../../../../shared/motion/reveal-on-scroll.directive';
import { SectionHeadingComponent } from '../../../../shared/ui/section-heading/section-heading.component';

@Component({
  selector: 'app-product-highlights',
  imports: [SectionHeadingComponent, RevealOnScrollDirective],
  templateUrl: './product-highlights.component.html',
  styleUrl: './product-highlights.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductHighlightsComponent {
  readonly business = input.required<BusinessModel>();
  readonly products = input.required<ProductHighlight[]>();

  protected readonly selectedProduct = signal<ProductHighlight | null>(null);
  protected readonly detailImageFailed = signal(false);
  protected readonly trackCopies = [0, 1] as const;
  protected readonly selectedProductDetailImage = computed(() => {
    const product = this.selectedProduct();

    if (!product || this.detailImageFailed()) {
      return null;
    }

    const src = buildProductDetailImageUrl(product.imageKey);

    if (!src) {
      return null;
    }

    return {
      src,
      alt: buildProductDetailImageAlt(product),
    };
  });
  protected readonly productTracks = computed(() => {
    const allProducts = this.products();
    const midpoint = Math.ceil(allProducts.length / 2);
    const firstTrack = allProducts.slice(0, midpoint);
    const secondTrack = allProducts.slice(midpoint);

    return [
      {
        id: 'products-track-left',
        reverse: false,
        items: firstTrack.length > 0 ? firstTrack : allProducts,
      },
      {
        id: 'products-track-right',
        reverse: true,
        items: secondTrack.length > 0 ? secondTrack : allProducts,
      },
    ];
  });
  protected readonly productCategories = computed(() => {
    const groups = new Map<string, ProductHighlight[]>();

    for (const product of this.products()) {
      const items = groups.get(product.category) ?? [];
      items.push(product);
      groups.set(product.category, items);
    }

    return Array.from(groups.entries()).map(([category, items]) => ({
      id: `products-category-${category.toLowerCase().replace(/\s+/g, '-')}`,
      title: category,
      items,
    }));
  });

  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    effect(() => {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }

      this.document.body.style.overflow = this.selectedProduct() ? 'hidden' : '';
    });
  }

  protected openDetails(product: ProductHighlight): void {
    this.detailImageFailed.set(false);
    this.selectedProduct.set(product);
  }

  protected closeDetails(): void {
    this.detailImageFailed.set(false);
    this.selectedProduct.set(null);
  }

  protected onDetailImageError(): void {
    this.detailImageFailed.set(true);
  }

  @HostListener('window:keydown.escape')
  protected onEscape(): void {
    this.closeDetails();
  }
}
