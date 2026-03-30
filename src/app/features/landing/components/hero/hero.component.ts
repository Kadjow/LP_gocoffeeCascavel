import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { BusinessModel } from '../../../../core/models/business.model';
import { ProductHighlight } from '../../../../core/models/product-highlight.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  readonly business = input.required<BusinessModel>();
  readonly products = input.required<ProductHighlight[]>();
  readonly featuredProducts = computed(() => this.products().slice(0, 2));
  readonly heroImageSrc = '/images/hero-main-user-art.png';
  readonly heroImageAlt = 'Ilustracao artistica colorida com formas florais e organicas em estilo pintado.';
}
