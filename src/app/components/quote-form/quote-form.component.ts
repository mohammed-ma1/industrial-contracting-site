import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { I18nService } from '../../services/i18n.service';
import { QuotePrefillService, QuoteProjectType } from '../../services/quote-prefill.service';

type PreferredContact = 'whatsapp' | 'email' | 'call';

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

              <div class="success-actions">
                <a class="btn btn-secondary" [href]="whatsappHref()" target="_blank" rel="noopener">
                  {{ 'quoteForm.success.whatsappCta' | translate }}
                </a>
              </div>
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

              <div class="form-group">
                <label>{{ 'quoteForm.preferredContact.label' | translate }}</label>
                <div class="contact-method" role="radiogroup">
                  <label class="method">
                    <input type="radio" name="preferredContact" [(ngModel)]="formData.preferredContact" value="whatsapp" />
                    <span>{{ 'quoteForm.preferredContact.options.whatsapp' | translate }}</span>
                  </label>
                  <label class="method">
                    <input type="radio" name="preferredContact" [(ngModel)]="formData.preferredContact" value="email" />
                    <span>{{ 'quoteForm.preferredContact.options.email' | translate }}</span>
                  </label>
                  <label class="method">
                    <input type="radio" name="preferredContact" [(ngModel)]="formData.preferredContact" value="call" />
                    <span>{{ 'quoteForm.preferredContact.options.call' | translate }}</span>
                  </label>
                </div>
              </div>

              <button type="submit" class="btn btn-primary btn-block" [disabled]="loading()">
                {{ loading() ? ('common.buttons.sending' | translate) : ('common.buttons.requestQuote' | translate) }}
              </button>
              <p class="sla">{{ 'quoteForm.sla' | translate }}</p>
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

    .success-actions {
      margin-top: 1.25rem;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .sla {
      margin: 0.75rem 0 0;
      text-align: center;
      color: var(--text-secondary);
      font-size: 0.875rem;
      opacity: 0.9;
    }

    .contact-method {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 0.65rem;
      width: 100%;
    }

    .method {
      position: relative;
      display: block;
      padding: 0;
      border: none;
      background: transparent;
      cursor: pointer;
      user-select: none;
      margin: 0;
    }

    .method input {
      position: absolute;
      opacity: 0;
      pointer-events: none;
    }

    .method span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 0.85rem 0.9rem;
      border-radius: 999px;
      border: 1px solid var(--border-subtle);
      background: rgba(255, 255, 255, 0.03);
      color: var(--text-secondary);
      font-weight: 800;
      letter-spacing: 0.01em;
      transition: transform var(--transition), background var(--transition), border-color var(--transition), box-shadow var(--transition), color var(--transition);
    }

    .method:hover span {
      transform: translateY(-1px);
      border-color: rgba(245, 158, 11, 0.22);
      background: rgba(245, 158, 11, 0.06);
      color: var(--text-primary);
    }

    .method input:focus-visible + span {
      outline: 2px solid var(--orange);
      outline-offset: 2px;
    }

    .method input:checked + span {
      background: var(--gradient-accent);
      color: var(--white);
      border-color: rgba(245, 158, 11, 0.45);
      box-shadow: 0 14px 40px rgba(245, 158, 11, 0.20);
      transform: translateY(-1px);
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

    @media (max-width: 520px) {
      .contact-method {
        grid-template-columns: 1fr;
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
  private i18n = inject(I18nService);
  private quotePrefill = inject(QuotePrefillService);

  formData = {
    name: '',
    email: '',
    phone: '',
    projectType: '' as QuoteProjectType,
    description: '',
    preferredContact: 'whatsapp' as PreferredContact,
  };

  private lastSubmitted = {
    name: '',
    email: '',
    phone: '',
    projectType: '' as QuoteProjectType,
    description: '',
    preferredContact: 'whatsapp' as PreferredContact,
  };

  loading = signal(false);
  submitted = signal(false);

  constructor() {
    const prefilled = this.quotePrefill.consumeProjectType();
    if (prefilled) this.formData.projectType = prefilled;
  }

  private projectTypeLabel(projectType: QuoteProjectType): string {
    if (!projectType) return '';
    const key =
      projectType === 'steel'
        ? 'common.projectTypes.steelFabrication'
        : `common.projectTypes.${projectType}`;
    return this.i18n.t(key);
  }

  private preferredContactLabel(v: PreferredContact): string {
    return this.i18n.t(`quoteForm.preferredContact.options.${v}`);
  }

  private emailHref(): string {
    const to = 'info@elite-industries.net';
    const pt = this.projectTypeLabel(this.lastSubmitted.projectType);
    const subject = this.i18n.t('quoteForm.email.subject', { projectType: pt || '-' });
    const body = this.i18n.t('quoteForm.email.body', {
      name: this.lastSubmitted.name || '-',
      email: this.lastSubmitted.email || '-',
      phone: this.lastSubmitted.phone || '-',
      projectType: pt || '-',
      preferredContact: this.preferredContactLabel(this.lastSubmitted.preferredContact),
      description: this.lastSubmitted.description || '-',
    });
    return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  whatsappHref(): string {
    const phoneE164 = '966503140030';
    const pt = this.projectTypeLabel(this.lastSubmitted.projectType);
    const msg = this.i18n.t('quoteForm.whatsapp.message', {
      name: this.lastSubmitted.name || '-',
      projectType: pt || '-',
      phone: this.lastSubmitted.phone || '-',
    });
    return `https://wa.me/${phoneE164}?text=${encodeURIComponent(msg)}`;
  }

  onSubmit() {
    this.loading.set(true);

    // Email-only lead capture (opens the user's email client)
    setTimeout(() => {
      this.lastSubmitted = { ...this.formData };
      console.log('Quick quote submitted:', this.lastSubmitted);
      window.location.href = this.emailHref();
      this.loading.set(false);
      this.submitted.set(true);
      this.formData = {
        name: '',
        email: '',
        phone: '',
        projectType: '' as QuoteProjectType,
        description: '',
        preferredContact: 'whatsapp' as PreferredContact,
      };
    }, 450);
  }
}
