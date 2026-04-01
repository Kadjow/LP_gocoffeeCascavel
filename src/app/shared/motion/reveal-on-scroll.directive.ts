import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  PLATFORM_ID,
  Renderer2,
  inject,
  input,
} from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  readonly appRevealOnScroll = input<number | string | ''>(0);

  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);

  private observer: IntersectionObserver | null = null;
  private isVisible = false;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const element = this.elementRef.nativeElement;
    this.renderer.addClass(element, 'motion-reveal');
    this.setDelayStyle();

    if (this.prefersReducedMotion() || !('IntersectionObserver' in window)) {
      this.reveal();
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue;
          }

          this.reveal();
          this.observer?.disconnect();
          this.observer = null;
        }
      },
      {
        threshold: 0.24,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = null;
  }

  private reveal(): void {
    if (this.isVisible) {
      return;
    }

    this.isVisible = true;
    this.renderer.addClass(this.elementRef.nativeElement, 'is-visible');
  }

  private setDelayStyle(): void {
    const delay = this.parseDelay(this.appRevealOnScroll());

    if (delay <= 0) {
      return;
    }

    this.renderer.setStyle(this.elementRef.nativeElement, '--motion-delay', `${delay}ms`);
  }

  private parseDelay(value: number | string | ''): number {
    if (value === '' || value === null) {
      return 0;
    }

    if (typeof value === 'number') {
      return Number.isFinite(value) ? Math.max(0, value) : 0;
    }

    const parsed = Number(value);
    return Number.isFinite(parsed) ? Math.max(0, parsed) : 0;
  }

  private prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
