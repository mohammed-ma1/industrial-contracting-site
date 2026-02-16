import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-quote-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ScrollAnimateDirective, TranslatePipe],
  template: `
    <section class="quote-section" id="quote">
      <div class="container">
        <div class="quote-card" [appScrollAnimate]="0.2" [class.success]="submitted()">
          @if (submitted()) {
            <div class="quote-success">
              <div class="success-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
              <h2>{{ 'quoteForm.success.title' | translate }}</h2>
              <p>{{ 'quoteForm.success.message' | translate }}</p>
            </div>
          } @else {
            <h2>{{ 'quoteForm.title' | translate }}</h2>
            <p class="quote-subtitle">{{ 'quoteForm.subtitle' | translate }}</p>
            <form (ngSubmit)="onSubmit()" #form="ngForm">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">{{ 'common.labels.name' | translate }}</label>
                  <input id="name" name="name" type="text" [(ngModel)]="formData.name" required placeholder=" " />
                </div>
                <div class="form-group">
                  <label for="email">{{ 'common.labels.email' | translate }}</label>
                  <input id="email" name="email" type="email" [(ngModel)]="formData.email" required placeholder=" " />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="phone">{{ 'common.labels.phone' | translate }}</label>
                  <input id="phone" name="phone" type="tel" [(ngModel)]="formData.phone" placeholder=" " />
                </div>
                <div class="form-group">
                  <label for="projectType">{{ 'common.labels.projectType' | translate }}</label>
                  <select id="projectType" name="projectType" [(ngModel)]="formData.projectType">
                    <option value="">{{ 'common.labels.selectProjectType' | translate }}</option>
                    <option value="construction">{{ 'common.projectTypes.construction' | translate }}</option>
                    <option value="steel">{{ 'common.projectTypes.steelFabrication' | translate }}</option>
                    <option value="manufacturing">{{ 'common.projectTypes.manufacturing' | translate }}</option>
                    <option value="other">{{ 'common.projectTypes.other' | translate }}</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="description">{{ 'common.labels.description' | translate }}</label>
                <textarea id="description" name="description" [(ngModel)]="formData.description" rows="3" placeholder=" "></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-block" [disabled]="loading()">
                {{ loading() ? ('common.buttons.sending' | translate) : ('common.buttons.requestQuote' | translate) }}
              </button>
            </form>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .quote-section {
      margin-top: -5.5rem;
      position: relative;
      z-index: 10;
      padding-top: 1.5rem;
      padding-bottom: 4rem;
    }

    .quote-card {
      position: relative;
      background: linear-gradient(180deg, rgba(20, 27, 36, 0.92), rgba(15, 20, 26, 0.92));
      padding: 3rem;
      border-radius: 16px;
      max-width: 640px;
      margin: 0 auto;
      box-shadow:
        0 30px 120px rgba(0, 0, 0, 0.55),
        0 0 0 1px rgba(245, 158, 11, 0.14),
        0 0 80px -30px rgba(245, 158, 11, 0.22);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        inset: -2px;
        background:
          radial-gradient(circle at 18% 10%, rgba(245, 158, 11, 0.18), transparent 45%),
          radial-gradient(circle at 80% 30%, rgba(245, 158, 11, 0.10), transparent 55%),
          linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
        pointer-events: none;
        z-index: 0;
      }

      > * {
        position: relative;
        z-index: 1;
      }

      h2 {
        color: var(--text-primary);
        margin-bottom: 0.5rem;
      }

      .quote-subtitle {
        color: var(--text-secondary);
        margin-bottom: 2rem;
        font-size: 1rem;
      }
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.25rem;

      @media (max-width: 600px) {
        grid-template-columns: 1fr;
      }
    }

    .form-group {
      margin-bottom: 1.25rem;
      position: relative;

      label {
        display: block;
        color: var(--text-secondary);
        font-size: 0.875rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
        transition: color var(--transition);
      }

      input, select, textarea {
        width: 100%;
        padding: 0.875rem 1rem;
        border: 1px solid var(--border-subtle);
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.04);
        color: var(--text-primary);
        transition: all var(--transition);

        &::placeholder {
          color: transparent;
        }

        &:focus {
          outline: none;
          border-color: rgba(245, 158, 11, 0.5);
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.15);
          background: rgba(255, 255, 255, 0.055);
        }
      }

      select {
        cursor: pointer;
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2371717a' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 1rem center;
        padding-right: 2.5rem;
      }

      textarea {
        resize: vertical;
        min-height: 100px;
      }
    }

    .btn-block {
      width: 100%;
      margin-top: 0.5rem;
      padding: 1rem;

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    }

    .quote-success {
      text-align: center;
      padding: 1rem 0;
    }

    @media (max-width: 600px) {
      .quote-section {
        margin-top: -4.25rem;
        padding-top: 1rem;
      }

      .quote-card {
        padding: 2.25rem 1.5rem;
      }
    }

    .success-icon {
      width: 72px;
      height: 72px;
      margin: 0 auto 1.5rem;
      border-radius: 50%;
      background: var(--gradient-accent);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--white);
      animation: successPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .quote-success h2 {
      margin-bottom: 0.5rem;
    }

    .quote-success p {
      color: var(--text-secondary);
      margin: 0;
    }

    @keyframes successPop {
      0% { transform: scale(0); opacity: 0; }
      100% { transform: scale(1); opacity: 1; }
    }
  `],
})
export class QuoteFormComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    projectType: '',
    description: '',
  };
  loading = signal(false);
  submitted = signal(false);

  onSubmit() {
    this.loading.set(true);
    setTimeout(() => {
      console.log('Quick quote submitted:', this.formData);
      this.loading.set(false);
      this.submitted.set(true);
      this.formData = { name: '', email: '', phone: '', projectType: '', description: '' };
    }, 1200);
  }
}
