import { Directive, ElementRef, OnInit, OnDestroy, inject } from '@angular/core';

@Directive({
  selector: '[appParallax]',
  standalone: true,
})
export class ParallaxDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef);
  private scrollHandler = () => this.onScroll();

  ngOnInit() {
    window.addEventListener('scroll', this.scrollHandler, { passive: true });
    this.onScroll();
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  private onScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const scrolled = window.scrollY;
    const rate = 0.3; // parallax speed
    const yPos = -(rect.top * rate);
    this.el.nativeElement.style.transform = `translate3d(0, ${yPos}px, 0)`;
  }
}
