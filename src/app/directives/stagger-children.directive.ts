import {
  Directive,
  ElementRef,
  OnDestroy,
  Input,
  inject,
  AfterViewInit,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[appStaggerChildren]',
  standalone: true,
})
export class StaggerChildrenDirective implements AfterViewInit, OnDestroy {
  private el = inject(ElementRef);
  private scrollTrigger: ScrollTrigger | null = null;

  @Input() appStaggerChildren: number | string = 0.08;
  @Input() staggerDuration = 0.6;
  @Input() staggerY = 40;
  @Input() staggerStart = 'top 88%';
  @Input() staggerSelector = '[data-stagger-child]';
  @Input() staggerClipPath = false;

  ngAfterViewInit() {
    setTimeout(() => this.setupStagger(), 50);
  }

  private setupStagger() {
    const container = this.el.nativeElement as HTMLElement;
    const children = container.querySelectorAll(this.staggerSelector);

    if (children.length === 0) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      gsap.set(children, { opacity: 1, y: 0, clipPath: 'none' });
      return;
    }

    const fromVars = this.staggerClipPath
      ? { opacity: 0, clipPath: 'inset(0 100% 0 0)' }
      : { opacity: 0, y: this.staggerY };
    const toVars = this.staggerClipPath
      ? { opacity: 1, clipPath: 'inset(0 0 0 0)' }
      : { opacity: 1, y: 0 };

    gsap.set(children, fromVars);

    const staggerVal = typeof this.appStaggerChildren === 'string'
      ? parseFloat(this.appStaggerChildren) || 0.08
      : this.appStaggerChildren;

    this.scrollTrigger = ScrollTrigger.create({
      trigger: container,
      start: this.staggerStart,
      onEnter: () => {
        gsap.to(children, {
          ...toVars,
          duration: this.staggerDuration,
          stagger: staggerVal,
          ease: 'power3.out',
          overwrite: true,
        });
      },
    });
  }

  ngOnDestroy() {
    if (this.scrollTrigger) {
      this.scrollTrigger.kill();
    }
  }
}
