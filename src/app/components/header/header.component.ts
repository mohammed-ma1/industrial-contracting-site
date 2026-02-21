import { Component, HostListener, signal, AfterViewInit, inject, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { TranslatePipe } from '@ngx-translate/core';
import { MagneticButtonDirective } from '../../directives/magnetic-button.directive';
import { I18nService, SupportedLang } from '../../services/i18n.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MagneticButtonDirective, TranslatePipe],
  template: `
    <header class="header" [class.scrolled]="scrolled()" [class.shrunk]="scrolled()">
      <div class="container header-inner">
        <a href="#" class="logo" #logo>
          <span class="logo-text">
            {{ 'header.logo.company' | translate }}<span class="logo-accent">{{ 'header.logo.accent' | translate }}</span>
          </span>
          <img class="logo-mark" src="assets/img/brand/emessa-logo.png" alt="EMESSA" />

        </a>
        <nav class="nav" [class.open]="mobileMenuOpen()">
          <a href="#about" class="nav-link" (click)="closeMenu()"><span>{{ 'common.navigation.about' | translate }}</span></a>
          <a href="#services" class="nav-link" (click)="closeMenu()"><span>{{ 'common.navigation.services' | translate }}</span></a>
          <a href="#projects" class="nav-link" (click)="closeMenu()"><span>{{ 'common.navigation.projects' | translate }}</span></a>
          <a href="#safety" class="nav-link" (click)="closeMenu()"><span>{{ 'common.navigation.safety' | translate }}</span></a>
          <a href="#contact" class="nav-link" (click)="closeMenu()"><span>{{ 'common.navigation.contact' | translate }}</span></a>

          <button
            type="button"
            class="lang-toggle"
            [attr.aria-label]="'header.switchLanguage' | translate"
            (click)="toggleLanguage()"
          >
            <span class="lang-pill" [class.active]="currentLang() === 'en'">EN</span>
            <span class="lang-sep">|</span>
            <span class="lang-pill" [class.active]="currentLang() === 'ar'">AR</span>
          </button>

          <a href="#quote" class="btn btn-primary nav-cta" (click)="closeMenu()" appMagneticButton>{{ 'common.navigation.getQuote' | translate }}</a>
        </nav>
        <button class="mobile-toggle" (click)="toggleMenu()" [attr.aria-label]="'header.toggleMenu' | translate" [class.open]="mobileMenuOpen()">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 1.25rem 0;
      transition: padding var(--transition-slow), background var(--transition), box-shadow var(--transition), backdrop-filter var(--transition);

      &.scrolled {
        background: rgba(10, 10, 11, 0.7);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        box-shadow: 0 1px 0 var(--border-subtle);
      }

      &.shrunk {
        padding: 0.75rem 0;
      }
    }

    .header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      font-family: var(--font-heading);
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-primary);
      letter-spacing: -0.02em;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.65rem;

      .logo-accent {
        background: var(--gradient-accent);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }

    .logo-mark {
      width: 44px;
      height: 44px;
      object-fit: contain;
      flex: 0 0 auto;
      filter: drop-shadow(0 10px 26px rgba(var(--orange-rgb), 0.18));
    }

    .header.shrunk .logo-mark {
      width: 40px;
      height: 40px;
    }

    .logo-text {
      display: inline-flex;
      align-items: baseline;
      gap: 0.3rem;
      line-height: 1;
      white-space: nowrap;
    }

    :host-context([dir='rtl']) .logo {
      flex-direction: row-reverse;
    }

    @media (max-width: 520px) {
      .logo {
        font-size: 1.2rem;
        gap: 0.5rem;
      }

      .logo-mark {
        width: 38px;
        height: 38px;
      }

      .logo-text {
        display: none;
      }
    }

    .nav {
      display: flex;
      align-items: center;
      gap: 2.5rem;

      .nav-link {
        color: var(--text-secondary);
        font-weight: 500;
        font-size: 0.9375rem;
        text-decoration: none;
        position: relative;
        padding: 0.25rem 0;

        span {
          position: relative;
        }

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 1px;
          background: var(--gradient-accent);
          transition: width var(--transition), left var(--transition);
        }

        &:hover {
          color: var(--text-primary);

          &::after {
            left: 0;
            width: 100%;
          }
        }
      }

      .nav-cta {
        padding: 0.5rem 1.25rem;
        font-size: 0.875rem;
      }

      .lang-toggle {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.35rem 0.6rem;
        border-radius: 999px;
        border: 1px solid var(--border-subtle);
        background: rgba(255, 255, 255, 0.04);
        color: var(--text-secondary);
        cursor: pointer;
        font-weight: 600;
        font-size: 0.8125rem;
        transition: background var(--transition), color var(--transition), border-color var(--transition);

        &:hover {
          background: rgba(255, 255, 255, 0.07);
          color: var(--text-primary);
        }
      }

      .lang-pill {
        opacity: 0.7;

        &.active {
          opacity: 1;
          color: var(--text-primary);
        }
      }

      .lang-sep {
        opacity: 0.35;
      }

      @media (max-width: 768px) {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        width: min(320px, 85vw);
        background: rgba(20, 20, 20, 0.98);
        backdrop-filter: blur(20px);
        flex-direction: column;
        padding: 5rem 2rem 2rem;
        gap: 0;
        transform: translateX(100%);
        transition: transform var(--transition-slow);
        box-shadow: -8px 0 32px rgba(0, 0, 0, 0.4);
        border-left: 1px solid var(--border-subtle);

        &.open {
          transform: translateX(0);
        }

        .nav-link {
          font-size: 1.25rem;
          padding: 1rem 0;
          border-bottom: 1px solid var(--border-subtle);

          &::after {
            display: none;
          }
        }

        .nav-cta {
          margin-top: 2rem;
          width: 100%;
          justify-content: center;
        }

        .lang-toggle {
          margin-top: 1.25rem;
        }
      }
    }

    :host-context([dir='rtl']) .nav {
      @media (max-width: 768px) {
        right: auto;
        left: 0;
        transform: translateX(-100%);
        box-shadow: 8px 0 32px rgba(0, 0, 0, 0.4);
        border-left: none;
        border-right: 1px solid var(--border-subtle);

        &.open {
          transform: translateX(0);
        }
      }
    }

    .mobile-toggle {
      display: none;
      flex-direction: column;
      justify-content: center;
      gap: 6px;
      width: 40px;
      height: 40px;
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      position: relative;

      span {
        display: block;
        width: 24px;
        height: 2px;
        background: var(--text-primary);
        transition: transform var(--transition), opacity var(--transition);
        margin: 0 auto;
      }

      &.open {
        span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        span:nth-child(2) {
          opacity: 0;
        }
        span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
      }

      @media (max-width: 768px) {
        display: flex;
      }
    }
  `],
})
export class HeaderComponent implements AfterViewInit {
  private el = inject(ElementRef);
  private i18n = inject(I18nService);

  currentLang = signal<SupportedLang>('en');
  scrolled = signal(false);
  mobileMenuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 50);
  }

  ngAfterViewInit() {
    const logo = (this.el.nativeElement as HTMLElement).querySelector('.logo') as HTMLElement;
    if (logo) {
      gsap.fromTo(logo, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.2, ease: 'power2.out' });
    }
  }

  toggleMenu() {
    this.mobileMenuOpen.update((v) => !v);
  }

  toggleLanguage() {
    const next: SupportedLang = this.currentLang() === 'ar' ? 'en' : 'ar';
    void this.i18n.setLanguage(next).then(() => this.currentLang.set(next));
  }

  closeMenu() {
    this.mobileMenuOpen.set(false);
  }

  constructor() {
    this.currentLang.set(this.i18n.currentLang);
  }
}
