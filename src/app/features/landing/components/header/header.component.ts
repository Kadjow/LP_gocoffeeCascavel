import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnDestroy,
  input,
  signal,
} from '@angular/core';
import { BusinessModel } from '../../../../core/models/business.model';
import { NavigationItem } from '../../../../core/models/navigation-item.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  readonly navigation = input.required<NavigationItem[]>();
  readonly business = input.required<BusinessModel>();

  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly activeFragment = signal<string | null>(null);

  private readonly hasDom = typeof window !== 'undefined' && typeof document !== 'undefined';
  private scrollAnimationFrame: number | null = null;

  ngAfterViewInit(): void {
    if (!this.hasDom) {
      return;
    }

    this.syncActiveFragmentWithHash();
    this.updateActiveFragmentFromScroll();
  }

  ngOnDestroy(): void {
    if (this.scrollAnimationFrame !== null) {
      window.cancelAnimationFrame(this.scrollAnimationFrame);
    }
  }

  protected toggleMenu(): void {
    this.menuOpen.update((current) => !current);
  }

  protected onNavigationClick(fragment: string): void {
    this.activeFragment.set(fragment);
    this.closeMenu();
  }

  protected isActive(fragment: string): boolean {
    return this.activeFragment() === fragment;
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 18);
    this.scheduleActiveFragmentUpdate();
  }

  @HostListener('window:hashchange')
  protected onHashChange(): void {
    this.syncActiveFragmentWithHash();
  }

  private scheduleActiveFragmentUpdate(): void {
    if (!this.hasDom || this.scrollAnimationFrame !== null) {
      return;
    }

    this.scrollAnimationFrame = window.requestAnimationFrame(() => {
      this.updateActiveFragmentFromScroll();
      this.scrollAnimationFrame = null;
    });
  }

  private updateActiveFragmentFromScroll(): void {
    if (!this.hasDom) {
      return;
    }

    const items = this.navigation();

    if (!items.length) {
      return;
    }

    const scrollMarker = window.scrollY + this.getScrollMarkerOffset();
    let currentFragment: string | null = null;

    for (const item of items) {
      const section = document.getElementById(item.fragment);
      const sectionTop = section ? section.getBoundingClientRect().top + window.scrollY : null;

      if (sectionTop !== null && sectionTop <= scrollMarker) {
        currentFragment = item.fragment;
      }
    }

    if (currentFragment) {
      this.activeFragment.set(currentFragment);
      return;
    }

    const hashFragment = this.getMatchingHashFragment(items);

    if (hashFragment) {
      this.activeFragment.set(hashFragment);
      return;
    }

    const isAtTop = window.scrollY <= 4;
    this.activeFragment.set(isAtTop ? items[0].fragment : null);
  }

  private syncActiveFragmentWithHash(): void {
    if (!this.hasDom) {
      return;
    }

    const hashFragment = this.getMatchingHashFragment(this.navigation());

    if (hashFragment) {
      this.activeFragment.set(hashFragment);
    }
  }

  private getMatchingHashFragment(items: NavigationItem[]): string | null {
    const hashFragment = window.location.hash.replace('#', '');

    if (!hashFragment) {
      return null;
    }

    return items.some((item) => item.fragment === hashFragment) ? hashFragment : null;
  }

  private getScrollMarkerOffset(): number {
    const header = document.querySelector('.header');
    const headerHeight = header instanceof HTMLElement ? header.offsetHeight : 0;

    return headerHeight + 24;
  }
}
