import { Component, AfterViewInit, OnDestroy, inject, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TranslatePipe } from '@ngx-translate/core';
import { MagneticButtonDirective } from '../../directives/magnetic-button.directive';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MagneticButtonDirective, TranslatePipe],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  private el = inject(ElementRef);
  particles = Array.from({ length: 12 }, (_, i) => i);
  private spotlightEl: HTMLElement | null = null;
  private contentEl: HTMLElement | null = null;
  private rafId: number | null = null;
  private mouseX = 0;
  private mouseY = 0;
  private currentX = 0;
  private currentY = 0;
  private onVisibilityChangeBound: (() => void) | null = null;

  ngAfterViewInit() {
    this.ensureVideoAutoplay();
    this.animateHero();
    this.setupParallax();
    this.setupVideoKenBurns();
    this.setupCursorSpotlight();
    this.animateStats();
  }

  ngOnDestroy() {
    if (this.rafId) cancelAnimationFrame(this.rafId);
    if (this.onVisibilityChangeBound) {
      document.removeEventListener('visibilitychange', this.onVisibilityChangeBound);
    }
  }

  onMouseMove(e: MouseEvent) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }

  onMouseLeave() {
    this.mouseX = window.innerWidth / 2;
    this.mouseY = window.innerHeight / 2;
  }

  private animateHero() {
    const el = this.el.nativeElement as HTMLElement;
    const line1 = el.querySelector('.hero-line-1 .split-wrap') as HTMLElement;
    const line2 = el.querySelector('.hero-gradient-text') as HTMLElement;
    const highlight = el.querySelector('.hero-highlight') as HTMLElement;
    const tagline = el.querySelector('.hero-tagline') as HTMLElement;
    const ribbon = el.querySelector('.hero-ribbon') as HTMLElement;
    const process = el.querySelector('.hero-process') as HTMLElement;
    const processProgress = el.querySelector('.process-progress') as HTMLElement;
    const chips = el.querySelector('.hero-chips') as HTMLElement;
    const heroStats = el.querySelector('.hero-stats') as HTMLElement;
    const cta = el.querySelector('.hero-cta') as HTMLElement;
    const scrollIndicator = el.querySelector('.hero-scroll-indicator') as HTMLElement;

    if (!line1 || !line2 || !highlight || !tagline || !cta || !scrollIndicator) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Character-by-character split for "Industrial"
    this.splitTextToChars(line1);

    gsap.set([line1, line2], { y: 80, opacity: 0 });
    gsap.set(highlight, { opacity: 0, y: 24, scaleX: 0.9 });
    gsap.set(tagline, { opacity: 0, y: 24 });
    if (ribbon) gsap.set(ribbon, { opacity: 0, y: 16 });
    if (process) gsap.set(process, { opacity: 0, y: 16 });
    if (chips) gsap.set(chips, { opacity: 0, y: 16 });
    if (processProgress) gsap.set(processProgress, { scaleX: 0 });
    if (heroStats) gsap.set(heroStats, { opacity: 0, y: 20 });
    gsap.set(cta, { opacity: 0, y: 20 });
    gsap.set(scrollIndicator, { opacity: 0 });

    const duration = prefersReducedMotion ? 0.3 : 0.9;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    const chars = line1.querySelectorAll('.char-inner');
    gsap.set(chars, { y: '110%' });
    tl.to(chars, {
      y: 0,
      duration: 0.6,
      stagger: 0.04,
      ease: 'back.out(1.2)',
    })
      .to(line2, { y: 0, opacity: 1, duration: duration * 0.8 }, '-=0.2')
      .to(highlight, { opacity: 1, y: 0, scaleX: 1, duration: duration * 0.6 }, '-=0.3')
      .to(tagline, { opacity: 1, y: 0, duration: duration * 0.5 }, '-=0.4')
      .to(ribbon, { opacity: 1, y: 0, duration: duration * 0.35 }, '-=0.25')
      .to(process, { opacity: 1, y: 0, duration: duration * 0.35 }, '-=0.2')
      .to(processProgress, { scaleX: 1, duration: prefersReducedMotion ? 0.2 : 0.8, ease: 'power2.out' }, '-=0.05')
      .to(chips, { opacity: 1, y: 0, duration: duration * 0.35 }, '-=0.25')
      .to(heroStats, { opacity: 1, y: 0, duration: duration * 0.4 }, '-=0.3')
      .to(cta, { opacity: 1, y: 0, duration: duration * 0.4 }, '-=0.2')
      .to(scrollIndicator, { opacity: 1, duration: 0.5 }, '-=0.2');
  }

  private splitTextToChars(el: HTMLElement) {
    const text = el.textContent || '';
    el.textContent = '';
    for (const char of text) {
      const span = document.createElement('span');
      span.className = 'char';
      span.style.display = 'inline-block';
      span.style.overflow = 'hidden';
      span.style.verticalAlign = 'bottom';
      const inner = document.createElement('span');
      inner.className = 'char-inner';
      inner.textContent = char === ' ' ? '\u00A0' : char;
      span.appendChild(inner);
      el.appendChild(span);
    }
  }

  private animateStats() {
    const el = this.el.nativeElement as HTMLElement;
    const stats = el.querySelectorAll('.stat-value[data-stat]');
    if (stats.length === 0) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.fromTo(stats[0], { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, delay: 1.8, ease: 'elastic.out(1, 0.5)' });
    gsap.fromTo(stats[1], { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, delay: 2, ease: 'elastic.out(1, 0.5)' });
    gsap.fromTo(stats[2], { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, delay: 2.2, ease: 'elastic.out(1, 0.5)' });
  }

  private setupParallax() {
    const videoWrap = (this.el.nativeElement as HTMLElement).querySelector('.hero-video-parallax') as HTMLElement;
    if (!videoWrap) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    ScrollTrigger.create({
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        gsap.set(videoWrap, { y: self.progress * 60 });
      },
    });
  }

  private setupVideoKenBurns() {
    const videoWrap = (this.el.nativeElement as HTMLElement).querySelector('.hero-video-parallax') as HTMLElement;
    const video = (this.el.nativeElement as HTMLElement).querySelector('.hero-video') as HTMLVideoElement;
    if (!videoWrap || !video) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.set(videoWrap, { scale: 1.1 });
    gsap.to(videoWrap, {
      scale: 1.15,
      duration: 20,
      ease: 'none',
      repeat: -1,
      yoyo: true,
    });

    video.addEventListener('loadeddata', () => {
      // Autoplay can still be blocked in some browsers; try again after data loads.
      video.muted = true;
      (video as any).defaultMuted = true;
      void video.play().catch(() => {});
      gsap.fromTo(video, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' });
    });
  }

  private ensureVideoAutoplay() {
    const video = (this.el.nativeElement as HTMLElement).querySelector('.hero-video') as HTMLVideoElement | null;
    if (!video) return;

    // Make autoplay as reliable as possible across iOS/Safari/Chrome.
    video.muted = true;
    (video as any).defaultMuted = true;
    video.autoplay = true;
    (video as any).playsInline = true;

    const tryPlay = () => {
      if (document.visibilityState !== 'visible') return;
      void video.play().catch(() => {});
    };

    // Try immediately, and again when enough data is available.
    tryPlay();
    video.addEventListener('canplay', tryPlay, { once: true });

    // If the tab returns to foreground, resume playback.
    this.onVisibilityChangeBound = () => tryPlay();
    document.addEventListener('visibilitychange', this.onVisibilityChangeBound);
  }

  private setupCursorSpotlight() {
    this.spotlightEl = (this.el.nativeElement as HTMLElement).querySelector('.hero-spotlight') as HTMLElement;
    this.contentEl = (this.el.nativeElement as HTMLElement).querySelector('.hero-content') as HTMLElement;
    if (!this.spotlightEl || !this.contentEl) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const heroRect = () => (this.el.nativeElement as HTMLElement).getBoundingClientRect();

    const update = () => {
      this.currentX += (this.mouseX - this.currentX) * 0.08;
      this.currentY += (this.mouseY - this.currentY) * 0.08;
      this.spotlightEl!.style.left = this.currentX + 'px';
      this.spotlightEl!.style.top = this.currentY + 'px';

      const rect = heroRect();
      const contentX = (this.currentX - rect.left - rect.width / 2) * 0.02;
      const contentY = (this.currentY - rect.top - rect.height / 2) * 0.02;
      gsap.set(this.contentEl, { x: contentX, y: contentY });

      this.rafId = requestAnimationFrame(update);
    };
    this.currentX = window.innerWidth / 2;
    this.currentY = window.innerHeight / 2;
    update();
  }
}
