import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { StaggerChildrenDirective } from '../../directives/stagger-children.directive';

@Component({
  selector: 'app-safety',
  standalone: true,
  imports: [ScrollAnimateDirective, StaggerChildrenDirective, TranslatePipe],
  template: `
    <section class="safety section" id="safety">
      <div class="container">
        <div class="section-header" [appScrollAnimate]="0.2">
          <h2>{{ 'safety.title' | translate }}</h2>
          <p class="section-subtitle">{{ 'safety.subtitle' | translate }}</p>
        </div>
        <div class="safety-grid" appStaggerChildren="0.08" staggerSelector=".safety-item">
          <div class="safety-item">
            <div class="safety-progress" [attr.data-value]="100">
              <svg viewBox="0 0 36 36">
                <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                <path class="circle-fill" stroke-dasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
              </svg>
              <div class="safety-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
            </div>
            <h3>{{ 'safety.items.osha.title' | translate }}</h3>
            <p>{{ 'safety.items.osha.description' | translate }}</p>
          </div>
          <div class="safety-item">
            <div class="safety-progress" [attr.data-value]="100">
              <svg viewBox="0 0 36 36">
                <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                <path class="circle-fill" stroke-dasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
              </svg>
              <div class="safety-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
            </div>
            <h3>{{ 'safety.items.iso9001.title' | translate }}</h3>
            <p>{{ 'safety.items.iso9001.description' | translate }}</p>
          </div>
          <div class="safety-item">
            <div class="safety-progress" [attr.data-value]="100">
              <svg viewBox="0 0 36 36">
                <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                <path class="circle-fill" stroke-dasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
              </svg>
              <div class="safety-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
              </div>
            </div>
            <h3>{{ 'safety.items.zeroIncidents.title' | translate }}</h3>
            <p>{{ 'safety.items.zeroIncidents.description' | translate }}</p>
          </div>
          <div class="safety-item">
            <div class="safety-progress" [attr.data-value]="100">
              <svg viewBox="0 0 36 36">
                <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
                <path class="circle-fill" stroke-dasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"/>
              </svg>
              <div class="safety-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
            </div>
            <h3>{{ 'safety.items.documentedProcedures.title' | translate }}</h3>
            <p>{{ 'safety.items.documentedProcedures.description' | translate }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .safety {
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

    .safety-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;

      @media (max-width: 968px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: 600px) {
        grid-template-columns: 1fr;
      }
    }

    .safety-item {
      background: var(--surface-elevated);
      border: 1px solid var(--border-subtle);
      border-radius: 16px;
      padding: 2rem;
      text-align: center;
      transition: all var(--transition);

      &:hover {
        border-color: rgba(245, 158, 11, 0.2);
        transform: translateY(-4px);
      }

      .safety-progress {
        position: relative;
        width: 64px;
        height: 64px;
        margin: 0 auto 1.25rem;

        svg {
          transform: rotate(-90deg);
          width: 100%;
          height: 100%;
        }

        .circle-bg {
          fill: none;
          stroke: rgba(255, 255, 255, 0.06);
          stroke-width: 2;
        }

        .circle-fill {
          fill: none;
          stroke: var(--orange);
          stroke-width: 2;
          stroke-linecap: round;
          transition: stroke-dasharray 1s ease-out;
        }
      }

      .safety-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--orange);
      }

      h3 {
        color: var(--text-primary);
        font-family: var(--font-body);
        font-weight: 600;
        font-size: 1.125rem;
        margin-bottom: 0.5rem;
      }

      p {
        color: var(--text-secondary);
        font-size: 0.9375rem;
        line-height: 1.5;
        margin: 0;
      }
    }
  `],
})
export class SafetyComponent {}
