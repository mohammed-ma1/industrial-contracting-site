import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  inject,
  AfterViewInit,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export type SplitMode = 'chars' | 'words' | 'lines';

@Directive({
  selector: '[appSplitText]',
  standalone: true,
})
export class SplitTextDirective implements OnInit, AfterViewInit, OnDestroy {
  private el = inject(ElementRef);
  private scrollTrigger: ScrollTrigger | null = null;

  @Input() appSplitText: SplitMode = 'words';
  @Input() splitDelay = 0.03;
  @Input() splitDuration = 0.6;
  @Input() splitY = 40;
  @Input() splitEase = 'power3.out';
  @Input() useScrollTrigger = false;
  @Input() scrollTriggerStart = 'top 85%';

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => this.splitAndAnimate(), 0);
  }

  private splitAndAnimate() {
    const element = this.el.nativeElement as HTMLElement;
    const text = element.textContent?.trim() || '';
    if (!text) return;

    element.textContent = '';

    const spans: HTMLSpanElement[] = [];
    const mode = this.appSplitText;

    if (mode === 'chars') {
      for (const char of text) {
        const span = document.createElement('span');
        span.className = 'split-char';
        span.style.display = 'inline-block';
        span.style.overflow = 'hidden';
        span.style.verticalAlign = 'bottom';
        const inner = document.createElement('span');
        inner.style.display = 'inline-block';
        inner.textContent = char === ' ' ? '\u00A0' : char;
        inner.style.transform = 'translateY(100%)';
        span.appendChild(inner);
        element.appendChild(span);
        spans.push(inner);
      }
    } else if (mode === 'words') {
      const words = text.split(/\s+/);
      words.forEach((word, i) => {
        const span = document.createElement('span');
        span.className = 'split-word';
        span.style.display = 'inline-block';
        span.style.overflow = 'hidden';
        span.style.verticalAlign = 'bottom';
        span.style.whiteSpace = 'nowrap';
        const inner = document.createElement('span');
        inner.style.display = 'inline-block';
        inner.textContent = word;
        inner.style.transform = 'translateY(100%)';
        span.appendChild(inner);
        element.appendChild(span);
        if (i < words.length - 1) {
          element.appendChild(document.createTextNode(' '));
        }
        spans.push(inner);
      });
    } else {
      const lines = text.split('\n');
      lines.forEach((line) => {
        const lineSpan = document.createElement('span');
        lineSpan.className = 'split-line';
        lineSpan.style.display = 'block';
        lineSpan.style.overflow = 'hidden';
        const inner = document.createElement('span');
        inner.style.display = 'inline-block';
        inner.textContent = line;
        inner.style.transform = 'translateY(100%)';
        lineSpan.appendChild(inner);
        element.appendChild(lineSpan);
        spans.push(inner);
      });
    }

    const animateIn = () => {
      gsap.to(spans, {
        y: 0,
        duration: this.splitDuration,
        stagger: this.splitDelay,
        ease: this.splitEase,
        overwrite: true,
        onComplete: () => this.cleanupInlineStyles(spans),
      });
    };

    if (this.useScrollTrigger) {
      this.scrollTrigger = ScrollTrigger.create({
        trigger: element,
        start: this.scrollTriggerStart,
        onEnter: animateIn,
      });
    } else {
      gsap.delayedCall(0.2, animateIn);
    }
  }

  private cleanupInlineStyles(spans: HTMLSpanElement[]) {
    spans.forEach((s) => s.style.removeProperty('transform'));
  }

  ngOnDestroy() {
    if (this.scrollTrigger) {
      this.scrollTrigger.kill();
    }
  }
}
