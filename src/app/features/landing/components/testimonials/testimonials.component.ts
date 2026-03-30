import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BusinessModel } from '../../../../core/models/business.model';
import { Testimonial } from '../../../../core/models/testimonial.model';
import { SectionHeadingComponent } from '../../../../shared/ui/section-heading/section-heading.component';

@Component({
  selector: 'app-testimonials',
  imports: [SectionHeadingComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  readonly business = input.required<BusinessModel>();
  readonly testimonials = input.required<Testimonial[]>();
}
