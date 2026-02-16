import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  inject,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '[appCounterAnimate]',
  standalone: true,
})
export class CounterAnimateDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef);
  private scrollTrigger: ScrollTrigger | null = null;

  @Input() appCounterAnimate: number | string = 0;
  @Input() counterDuration = 2;
  @Input() counterStart = 'top 85%';

  ngOnInit() {
    const el = this.el.nativeElement as HTMLElement;
    const endValue = typeof this.appCounterAnimate === 'string'
      ? parseInt(this.appCounterAnimate, 10) || 0
      : this.appCounterAnimate;

    const obj = { value: 0 };

    this.scrollTrigger = ScrollTrigger.create({
      trigger: el,
      start: this.counterStart,
      onEnter: () => {
        gsap.to(obj, {
          value: endValue,
          duration: this.counterDuration,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.round(obj.value).toString();
          },
        });
      },
    });
  }

  ngOnDestroy() {
    this.scrollTrigger?.kill();
  }
}
