import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BusinessModel } from '../../../../core/models/business.model';
import { SectionHeadingComponent } from '../../../../shared/ui/section-heading/section-heading.component';

@Component({
  selector: 'app-brand-experience',
  imports: [SectionHeadingComponent],
  templateUrl: './brand-experience.component.html',
  styleUrl: './brand-experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandExperienceComponent {
  readonly business = input.required<BusinessModel>();
}
