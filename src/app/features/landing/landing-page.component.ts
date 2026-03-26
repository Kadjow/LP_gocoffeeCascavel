import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../../core/services/seo.service';
import { BrandExperienceComponent } from './components/brand-experience/brand-experience.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { LocationComponent } from './components/location/location.component';
import { ProductHighlightsComponent } from './components/product-highlights/product-highlights.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { BUSINESS_DATA } from './data/business.data';
import { FAQ_ITEMS } from './data/faq.data';
import { NAVIGATION_ITEMS } from './data/navigation.data';
import { PRODUCT_HIGHLIGHTS } from './data/products.data';
import { TESTIMONIALS } from './data/testimonials.data';

@Component({
  selector: 'app-landing-page',
  imports: [
    HeaderComponent,
    HeroComponent,
    BrandExperienceComponent,
    ProductHighlightsComponent,
    TestimonialsComponent,
    LocationComponent,
    FaqComponent,
    FooterComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent {
  protected readonly business = BUSINESS_DATA;
  protected readonly navigation = NAVIGATION_ITEMS;
  protected readonly products = PRODUCT_HIGHLIGHTS;
  protected readonly testimonials = TESTIMONIALS;
  protected readonly faqItems = FAQ_ITEMS;

  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.setPageMetadata(
      'GoCoffee Cascavel | Cafeteria especial no centro de Cascavel',
      'Cafe especial, frappes marcantes, cookies artesanais e uma experiencia acolhedora no centro de Cascavel.'
    );
  }
}
