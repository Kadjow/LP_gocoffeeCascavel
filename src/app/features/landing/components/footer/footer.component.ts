import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BusinessModel } from '../../../../core/models/business.model';
import { NavigationItem } from '../../../../core/models/navigation-item.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly business = input.required<BusinessModel>();
  readonly navigation = input.required<NavigationItem[]>();

  protected readonly currentYear = new Date().getFullYear();
}
