import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
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
  protected readonly openIndex = signal<number | null>(null);

  protected toggleItem(index: number): void {
    this.openIndex.update((currentIndex) => (currentIndex === index ? null : index));
  }
}
