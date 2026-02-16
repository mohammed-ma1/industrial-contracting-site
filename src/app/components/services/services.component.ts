import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { StaggerChildrenDirective } from '../../directives/stagger-children.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ScrollAnimateDirective, StaggerChildrenDirective, TranslatePipe],
  template: `
    <section class="services section" id="services">
      <div class="container">
        <div class="section-header" [appScrollAnimate]="0.2">
          <h2>{{ 'services.title' | translate }}</h2>
          <p class="section-subtitle">{{ 'services.subtitle' | translate }}</p>
        </div>

        <!-- UX: quick outcomes bar -->
        <div class="services-outcomes" appStaggerChildren="0.08" staggerSelector=".outcome">
          <div class="outcome">
            <span class="outcome-kicker">{{ 'services.outcomes.fastEstimates.kicker' | translate }}</span>
            <span class="outcome-text">{{ 'services.outcomes.fastEstimates.text' | translate }}</span>
          </div>
          <div class="outcome">
            <span class="outcome-kicker">{{ 'services.outcomes.safetyFirst.kicker' | translate }}</span>
            <span class="outcome-text">{{ 'services.outcomes.safetyFirst.text' | translate }}</span>
          </div>
          <div class="outcome">
            <span class="outcome-kicker">{{ 'services.outcomes.onTimeDelivery.kicker' | translate }}</span>
            <span class="outcome-text">{{ 'services.outcomes.onTimeDelivery.text' | translate }}</span>
          </div>
        </div>

        <div class="services-bento" appStaggerChildren="0.12" staggerSelector=".service-card">
          <div class="service-card service-card-featured">
            <span class="service-number">01</span>
            <div class="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <h3>{{ 'services.items.construction.title' | translate }}</h3>
            <p>{{ 'services.items.construction.description' | translate }}</p>
            <a href="#contact" class="service-link">{{ 'common.buttons.learnMore' | translate }}</a>
          </div>
          <div class="service-card">
            <span class="service-number">02</span>
            <div class="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <line x1="3" y1="9" x2="21" y2="9"/>
                <line x1="9" y1="21" x2="9" y2="9"/>
              </svg>
            </div>
            <h3>{{ 'services.items.steelFabrication.title' | translate }}</h3>
            <p>{{ 'services.items.steelFabrication.description' | translate }}</p>
            <a href="#contact" class="service-link">{{ 'common.buttons.learnMore' | translate }}</a>
          </div>
          <div class="service-card">
            <span class="service-number">03</span>
            <div class="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
            </div>
            <h3>{{ 'services.items.manufacturing.title' | translate }}</h3>
            <p>{{ 'services.items.manufacturing.description' | translate }}</p>
            <a href="#contact" class="service-link">{{ 'common.buttons.learnMore' | translate }}</a>
          </div>
        </div>

        <!-- PDF-inspired "magic": services journey (design → handover) -->
        <div class="services-journey" [appScrollAnimate]="0.2">
          <div class="journey-head">
            <h3>{{ 'services.journey.title' | translate }}</h3>
            <p>{{ 'services.journey.subtitle' | translate }}</p>
          </div>
          <div class="journey-grid" appStaggerChildren="0.08" staggerSelector=".journey-item">
            <div class="journey-item">
              <div class="journey-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                  <path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/><path d="m15 5 4 4"/>
                </svg>
              </div>
              <div class="journey-text">
                <h4>{{ 'services.journey.items.design.title' | translate }}</h4>
                <p>{{ 'services.journey.items.design.desc' | translate }}</p>
              </div>
            </div>

            <div class="journey-item">
              <div class="journey-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                  <path d="M3 21h18"/><path d="M7 21V7l5-4 5 4v14"/><path d="M9 21v-6h6v6"/>
                </svg>
              </div>
              <div class="journey-text">
                <h4>{{ 'services.journey.items.manufacture.title' | translate }}</h4>
                <p>{{ 'services.journey.items.manufacture.desc' | translate }}</p>
              </div>
            </div>

            <div class="journey-item">
              <div class="journey-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                  <path d="M3 12h18"/><path d="M7 12l-2 9"/><path d="M17 12l2 9"/><path d="M12 12V3"/>
                </svg>
              </div>
              <div class="journey-text">
                <h4>{{ 'services.journey.items.site.title' | translate }}</h4>
                <p>{{ 'services.journey.items.site.desc' | translate }}</p>
              </div>
            </div>

            <div class="journey-item">
              <div class="journey-icon" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                  <path d="M12 2v6"/><path d="M5 8h14"/><path d="M6 8l2 14h8l2-14"/><path d="M9 13h6"/><path d="M10 17h4"/>
                </svg>
              </div>
              <div class="journey-text">
                <h4>{{ 'services.journey.items.handover.title' | translate }}</h4>
                <p>{{ 'services.journey.items.handover.desc' | translate }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="services-cta" [appScrollAnimate]="0.2">
          <div class="cta-left">
            <h3>{{ 'services.cta.title' | translate }}</h3>
            <p>{{ 'services.cta.description' | translate }}</p>
          </div>
          <a class="cta-btn" href="#quote">{{ 'common.buttons.getQuote' | translate }}</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services {
      background: var(--surface);
    }

    .section-header {
      text-align: center;
      max-width: 600px;
      margin: 0 auto 4rem;

      h2 {
        color: var(--text-primary);
        margin-bottom: 0.5rem;
      }

      .section-subtitle {
        color: var(--text-secondary);
        font-size: 1.125rem;
      }
    }

    .services-outcomes {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      max-width: 980px;
      margin: 0 auto 2.5rem;

      @media (max-width: 900px) {
        grid-template-columns: 1fr;
      }
    }

    .outcome {
      padding: 1rem 1.1rem;
      border-radius: 14px;
      border: 1px solid var(--border-subtle);
      background: linear-gradient(180deg, rgba(245, 158, 11, 0.06), rgba(10, 10, 11, 0.0));
      transition: transform var(--transition), border-color var(--transition), box-shadow var(--transition);

      &:hover {
        transform: translateY(-2px);
        border-color: rgba(245, 158, 11, 0.22);
        box-shadow: 0 18px 50px rgba(0,0,0,0.25);
      }
    }

    .outcome-kicker {
      display: block;
      color: var(--text-primary);
      font-weight: 700;
      letter-spacing: 0.02em;
      margin-bottom: 0.25rem;
    }

    .outcome-text {
      display: block;
      color: var(--text-secondary);
      font-size: 0.95rem;
      line-height: 1.5;
    }

    .services-bento {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto;
      gap: 1.5rem;

      @media (max-width: 968px) {
        grid-template-columns: 1fr;
      }
    }

    .service-card {
      position: relative;
      background: var(--surface-elevated);
      border: 1px solid var(--border-subtle);
      border-radius: 16px;
      padding: 2rem;
      transition: all var(--transition);

      &:hover {
        border-color: rgba(245, 158, 11, 0.3);
        box-shadow: 0 0 40px rgba(245, 158, 11, 0.08);
        transform: translateY(-4px);
      }

      &.service-card-featured {
        grid-column: 1 / -1;

        @media (min-width: 969px) {
          grid-column: 1 / 2;
          grid-row: 1 / 3;
        }
      }

      .service-number {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        font-family: var(--font-accent);
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--text-secondary);
        opacity: 0.6;
      }

      .service-icon {
        color: var(--orange);
        margin-bottom: 1.25rem;

        svg {
          transition: transform var(--transition);
        }
      }

      &:hover .service-icon svg {
        transform: scale(1.05);
      }

      h3 {
        color: var(--text-primary);
        margin-bottom: 0.75rem;
        font-size: 1.5rem;
      }

      p {
        color: var(--text-secondary);
        margin-bottom: 1rem;
        line-height: 1.6;
        font-size: 0.9375rem;
      }
    }

    .service-link {
      font-weight: 600;
      color: var(--orange);
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      transition: gap var(--transition);

      &:hover {
        gap: 0.5rem;
        color: var(--orange-light);
      }
    }

    .services-cta {
      margin-top: 3rem;
      border-radius: 18px;
      border: 1px solid rgba(245, 158, 11, 0.18);
      background: linear-gradient(90deg, rgba(245, 158, 11, 0.10), rgba(10, 10, 11, 0.0));
      padding: 1.4rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1.25rem;
      flex-wrap: wrap;
    }

    .services-cta h3 {
      color: var(--text-primary);
      margin: 0 0 0.35rem;
    }

    .services-cta p {
      color: var(--text-secondary);
      margin: 0;
      max-width: 60ch;
    }

    .cta-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem 1.1rem;
      border-radius: 12px;
      background: var(--gradient-accent);
      color: var(--white);
      font-weight: 700;
      text-decoration: none;
      box-shadow: 0 14px 40px rgba(245, 158, 11, 0.22);
      transition: transform var(--transition), box-shadow var(--transition);

      &:hover {
        transform: translateY(-1px);
        box-shadow: 0 18px 50px rgba(245, 158, 11, 0.28);
      }
    }

    .services-journey {
      margin-top: 2.25rem;
      border-radius: 18px;
      border: 1px solid rgba(245, 158, 11, 0.14);
      background: rgba(10, 10, 11, 0.22);
      box-shadow: 0 40px 140px rgba(0, 0, 0, 0.35);
      padding: 1.35rem 1.35rem 1.2rem;
      position: relative;
      overflow: hidden;
    }

    .services-journey::before {
      content: '';
      position: absolute;
      inset: -2px;
      background:
        radial-gradient(circle at 20% 20%, rgba(245, 158, 11, 0.10), transparent 55%),
        radial-gradient(circle at 80% 55%, rgba(245, 158, 11, 0.07), transparent 60%);
      opacity: 1;
      pointer-events: none;
    }

    .journey-head {
      position: relative;
      z-index: 1;
      margin-bottom: 1rem;

      h3 {
        margin: 0 0 0.35rem;
        color: var(--text-primary);
        font-family: var(--font-body);
        font-weight: 800;
        letter-spacing: -0.01em;
      }

      p {
        margin: 0;
        color: var(--text-secondary);
        max-width: 90ch;
        line-height: 1.65;
      }
    }

    .journey-grid {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.9rem;

      @media (max-width: 900px) {
        grid-template-columns: 1fr;
      }
    }

    .journey-item {
      border-radius: 16px;
      border: 1px solid var(--border-subtle);
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(10, 10, 11, 0));
      padding: 1rem 1rem;
      display: grid;
      grid-template-columns: 44px 1fr;
      gap: 0.85rem;
      align-items: start;
      transition: transform var(--transition), border-color var(--transition), box-shadow var(--transition);
    }

    .journey-item:hover {
      transform: translateY(-2px);
      border-color: rgba(245, 158, 11, 0.22);
      box-shadow: 0 18px 55px rgba(0,0,0,0.25);
    }

    .journey-icon {
      width: 44px;
      height: 44px;
      border-radius: 14px;
      border: 1px solid rgba(245, 158, 11, 0.22);
      background: rgba(245, 158, 11, 0.06);
      color: var(--orange);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .journey-text h4 {
      margin: 0 0 0.25rem;
      color: var(--text-primary);
      font-family: var(--font-body);
      font-weight: 800;
      font-size: 1.05rem;
    }

    .journey-text p {
      margin: 0;
      color: var(--text-secondary);
      line-height: 1.6;
      font-size: 0.95rem;
    }
  `],
})
export class ServicesComponent {}
