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
  selector: '[appCountUp]',
})
export class CountUpDirective implements AfterViewInit, OnDestroy {
  readonly appCountUp = input.required<number | string>();
  readonly countUpDuration = input(820);
  readonly countUpDecimals = input(0);
  readonly countUpPrefix = input('');
  readonly countUpSuffix = input('');
  readonly countUpLocale = input('pt-BR');

  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);

  private observer: IntersectionObserver | null = null;
  private animationFrameId = 0;
  private hasAnimated = false;
  private formatter: Intl.NumberFormat | null = null;
  private formatterKey = '';

  ngAfterViewInit(): void {
    const target = this.readTarget();

    if (!isPlatformBrowser(this.platformId)) {
      this.renderValue(target);
      return;
    }

    if (this.prefersReducedMotion() || !('IntersectionObserver' in window)) {
      this.renderValue(target);
      this.hasAnimated = true;
      return;
    }

    this.renderValue(0);

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || this.hasAnimated) {
            continue;
          }

          this.hasAnimated = true;
          this.animateToTarget(target);
          this.observer?.disconnect();
          this.observer = null;
        }
      },
      {
        threshold: 0.35,
        rootMargin: '0px 0px -12% 0px',
      }
    );

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = null;

    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = 0;
    }
  }

  private animateToTarget(target: number): void {
    const duration = Math.max(240, this.countUpDuration());
    const startedAt = performance.now();

    const step = (timestamp: number): void => {
      const progress = Math.min((timestamp - startedAt) / duration, 1);
      const eased = this.easeOutCubic(progress);
      this.renderValue(target * eased);

      if (progress < 1) {
        this.animationFrameId = requestAnimationFrame(step);
        return;
      }

      this.renderValue(target);
      this.animationFrameId = 0;
    };

    this.animationFrameId = requestAnimationFrame(step);
  }

  private renderValue(value: number): void {
    const formatter = this.getFormatter();
    const content = `${this.countUpPrefix()}${formatter.format(value)}${this.countUpSuffix()}`;
    this.renderer.setProperty(this.elementRef.nativeElement, 'textContent', content);
  }

  private readTarget(): number {
    const rawValue = this.appCountUp();

    if (typeof rawValue === 'number') {
      return Number.isFinite(rawValue) ? rawValue : 0;
    }

    const normalized = rawValue.replace(',', '.').replace(/[^\d.-]/g, '');
    const parsed = Number(normalized);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  private easeOutCubic(progress: number): number {
    return 1 - Math.pow(1 - progress, 3);
  }

  private getFormatter(): Intl.NumberFormat {
    const decimals = Math.max(0, this.countUpDecimals());
    const locale = this.countUpLocale();
    const key = `${locale}-${decimals}`;

    if (this.formatter && this.formatterKey === key) {
      return this.formatter;
    }

    this.formatter = new Intl.NumberFormat(locale, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
    this.formatterKey = key;

    return this.formatter;
  }

  private prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
