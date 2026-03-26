import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  OnDestroy,
  PLATFORM_ID,
  inject,
  input,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appRevealOnScroll]',
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  readonly delay = input('0ms', { alias: 'appRevealOnScroll' });

  @HostBinding('class.reveal-on-scroll') protected readonly revealClass = true;
  @HostBinding('class.reveal-on-scroll--pending') protected shouldAnimate = false;
  @HostBinding('class.is-visible') protected isVisible = false;
  @HostBinding('style.--reveal-delay') protected get revealDelay(): string {
    return this.delay();
  }

  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId) || typeof IntersectionObserver === 'undefined') {
      this.isVisible = true;
      this.shouldAnimate = false;
      return;
    }

    this.shouldAnimate = true;

    this.observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry?.isIntersecting) {
          this.isVisible = true;
          this.shouldAnimate = false;
          this.observer?.disconnect();
        }
      },
      {
        threshold: 0.18,
      }
    );

    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
