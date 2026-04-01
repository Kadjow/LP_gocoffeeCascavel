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
import { SectionHeadingComponent } from '../../../../shared/ui/section-heading/section-heading.component';

@Component({
  selector: 'app-product-highlights',
  imports: [SectionHeadingComponent],
  templateUrl: './product-highlights.component.html',
  styleUrl: './product-highlights.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductHighlightsComponent {
  readonly business = input.required<BusinessModel>();
  readonly products = input.required<ProductHighlight[]>();

  protected readonly selectedProduct = signal<ProductHighlight | null>(null);
  protected readonly trackCopies = [0, 1] as const;
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
    this.selectedProduct.set(product);
  }

  protected closeDetails(): void {
    this.selectedProduct.set(null);
  }

  @HostListener('window:keydown.escape')
  protected onEscape(): void {
    this.closeDetails();
  }
}
