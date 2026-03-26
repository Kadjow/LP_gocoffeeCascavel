import { ChangeDetectionStrategy, Component, HostListener, input, signal } from '@angular/core';
import { BusinessModel } from '../../../../core/models/business.model';
import { NavigationItem } from '../../../../core/models/navigation-item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly navigation = input.required<NavigationItem[]>();
  readonly business = input.required<BusinessModel>();

  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((current) => !current);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 18);
  }
}
