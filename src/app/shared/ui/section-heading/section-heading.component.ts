import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RevealOnScrollDirective } from '../../motion/reveal-on-scroll.directive';

@Component({
  selector: 'app-section-heading',
  imports: [RevealOnScrollDirective],
  template: `
    <div class="section-heading" appRevealOnScroll [appRevealOnScroll]="40">
      <p class="section-heading__eyebrow">{{ eyebrow() }}</p>
      <h2 class="section-heading__title">{{ title() }}</h2>
      <p class="section-heading__description">{{ description() }}</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeadingComponent {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
}
