import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  template: `
    <div class="section-heading">
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
