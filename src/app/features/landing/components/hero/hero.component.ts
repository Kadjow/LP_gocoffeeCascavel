import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BusinessModel } from '../../../../core/models/business.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  readonly business = input.required<BusinessModel>();
}
