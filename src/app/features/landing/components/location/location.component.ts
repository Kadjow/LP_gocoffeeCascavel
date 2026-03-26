import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BusinessModel } from '../../../../core/models/business.model';
import { RevealOnScrollDirective } from '../../../../shared/motion/reveal-on-scroll.directive';
import { SectionHeadingComponent } from '../../../../shared/ui/section-heading/section-heading.component';

@Component({
  selector: 'app-location',
  imports: [RevealOnScrollDirective, SectionHeadingComponent],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationComponent {
  readonly business = input.required<BusinessModel>();

  private readonly sanitizer = inject(DomSanitizer);

  protected readonly safeMapEmbedUrl = computed(() =>
    this.sanitizer.bypassSecurityTrustResourceUrl(this.business().mapEmbedUrl)
  );
}
