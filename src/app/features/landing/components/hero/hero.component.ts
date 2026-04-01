import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BusinessModel } from '../../../../core/models/business.model';
import { CountUpDirective } from '../../../../shared/motion/count-up.directive';

@Component({
  selector: 'app-hero',
  imports: [CountUpDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  readonly business = input.required<BusinessModel>();
}
