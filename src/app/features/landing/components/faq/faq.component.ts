import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FaqItem } from '../../../../core/models/faq-item.model';
import { RevealOnScrollDirective } from '../../../../shared/motion/reveal-on-scroll.directive';
import { SectionHeadingComponent } from '../../../../shared/ui/section-heading/section-heading.component';

@Component({
  selector: 'app-faq',
  imports: [SectionHeadingComponent, RevealOnScrollDirective],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent {
  readonly items = input.required<FaqItem[]>();
}
