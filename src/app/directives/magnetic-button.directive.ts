import {
  Directive,
  ElementRef,
  OnInit,
  OnDestroy,
  inject,
} from '@angular/core';
import { gsap } from 'gsap';

@Directive({
  selector: '[appMagneticButton]',
  standalone: true,
})
export class MagneticButtonDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef);
  private ctx: gsap.Context | null = null;

  ngOnInit() {
    const btn = this.el.nativeElement as HTMLElement;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    this.ctx = gsap.context(() => {
      btn.addEventListener('mouseenter', this.onMouseEnter);
      btn.addEventListener('mousemove', this.onMouseMove);
      btn.addEventListener('mouseleave', this.onMouseLeave);
    });
  }

  private onMouseEnter = () => {
    // Ready for magnetic effect
  };

  private onMouseMove = (e: MouseEvent) => {
    const btn = this.el.nativeElement as HTMLElement;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const moveX = x * 0.2;
    const moveY = y * 0.2;
    gsap.to(btn, {
      x: moveX,
      y: moveY,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  private onMouseLeave = () => {
    const btn = this.el.nativeElement as HTMLElement;
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)',
    });
  };

  ngOnDestroy() {
    const btn = this.el.nativeElement as HTMLElement;
    try {
      btn.removeEventListener('mouseenter', this.onMouseEnter);
      btn.removeEventListener('mousemove', this.onMouseMove);
      btn.removeEventListener('mouseleave', this.onMouseLeave);
    } catch {}
    this.ctx?.revert();
  }
}
