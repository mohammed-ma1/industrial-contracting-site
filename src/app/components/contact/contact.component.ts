import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { StaggerChildrenDirective } from '../../directives/stagger-children.directive';
import { TranslatePipe } from '@ngx-translate/core';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ScrollAnimateDirective, StaggerChildrenDirective, TranslatePipe],
  template: `
    <section class="contact section" id="contact">
      <div class="container">
        <div class="section-header" [appScrollAnimate]="0.2">
          <h2>{{ 'contact.title' | translate }}</h2>
          <p class="section-subtitle">{{ 'contact.subtitle' | translate }}</p>
        </div>
        <div class="contact-grid" appStaggerChildren="0.1" staggerSelector=".contact-form, .contact-info">
          <div class="contact-form" [appScrollAnimate]="0.2">
            @if (submitted()) {
              <div class="contact-success">
                <div class="success-icon" aria-hidden="true">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <h3>{{ 'contact.success.title' | translate }}</h3>
                <p>{{ 'contact.success.message' | translate }}</p>
                <div class="success-actions">
                  <a class="btn btn-primary" [href]="emailHref()" target="_blank" rel="noopener">
                    {{ 'contact.success.emailCta' | translate }}
                  </a>
                </div>
              </div>
            } @else {
              <form (ngSubmit)="onSubmit()" #form="ngForm">
                <div class="form-row">
                  <div class="form-group">
                    <label for="contactName">{{ 'common.labels.name' | translate }} *</label>
                    <input id="contactName" name="name" type="text" [(ngModel)]="formData.name" required placeholder=" " />
                  </div>
                  <div class="form-group">
                    <label for="contactEmail">{{ 'common.labels.email' | translate }} *</label>
                    <input id="contactEmail" name="email" type="email" [(ngModel)]="formData.email" required placeholder=" " />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <label for="contactPhone">{{ 'common.labels.phone' | translate }}</label>
                    <input id="contactPhone" name="phone" type="tel" [(ngModel)]="formData.phone" placeholder=" " />
                  </div>
                  <div class="form-group">
                    <label for="contactCompany">{{ 'common.labels.company' | translate }}</label>
                    <input id="contactCompany" name="company" type="text" [(ngModel)]="formData.company" placeholder=" " />
                  </div>
                </div>
                <div class="form-group">
                  <label for="contactProjectType">{{ 'common.labels.projectType' | translate }}</label>
                  <select id="contactProjectType" name="projectType" [(ngModel)]="formData.projectType">
                    <option value="">{{ 'common.labels.selectProjectType' | translate }}</option>
                    <option value="construction">{{ 'common.projectTypes.construction' | translate }}</option>
                    <option value="steel">{{ 'common.projectTypes.steelFabrication' | translate }}</option>
                    <option value="manufacturing">{{ 'common.projectTypes.manufacturing' | translate }}</option>
                    <option value="maintenance">{{ 'common.projectTypes.maintenance' | translate }}</option>
                    <option value="other">{{ 'common.projectTypes.other' | translate }}</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="contactMessage">{{ 'common.labels.message' | translate }} *</label>
                  <textarea id="contactMessage" name="message" [(ngModel)]="formData.message" rows="5" required placeholder=" "></textarea>
                </div>
                <button type="submit" class="btn btn-primary" [disabled]="loading()">
                  {{ loading() ? ('common.buttons.sending' | translate) : ('common.buttons.sendMessage' | translate) }}
                </button>
                <p class="sla">{{ 'contact.sla' | translate }}</p>
              </form>
            }
          </div>
          <div class="contact-info">
            <h3>{{ 'contact.info.title' | translate }}</h3>
            <div class="info-item">
              <strong>{{ 'contact.info.address.label' | translate }}</strong>
              <p>{{ 'contact.info.address.line1' | translate }}<br>{{ 'contact.info.address.line2' | translate }}</p>
            </div>
            <div class="info-item">
              <strong>{{ 'contact.info.phone.label' | translate }}</strong>
              <p>{{ 'contact.info.phone.value' | translate }}</p>
            </div>
            <div class="info-item">
              <strong>{{ 'contact.info.email.label' | translate }}</strong>
              <p>{{ 'contact.info.email.value' | translate }}</p>
            </div>
            <div class="info-item">
              <strong>{{ 'contact.info.hours.label' | translate }}</strong>
              <p>{{ 'contact.info.hours.value1' | translate }}<br>{{ 'contact.info.hours.value2' | translate }}</p>
            </div>
            <div class="map-embed" [attr.aria-label]="'contact.map.title' | translate">
              <iframe
                class="map-iframe"
                [attr.title]="'contact.map.title' | translate"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowfullscreen
                src="https://www.google.com/maps?q=24.7136,46.6753&z=12&output=embed"
              ></iframe>
              <a
                class="map-link"
                href="https://www.google.com/maps?q=24.7136,46.6753"
                target="_blank"
                rel="noopener noreferrer"
              >
                {{ 'contact.map.openInMaps' | translate }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      background: var(--surface);
      border-top: 1px solid var(--border-subtle);
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

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: start;

      @media (max-width: 968px) {
        grid-template-columns: 1fr;
      }
    }

    .contact-form {
      .contact-success {
        text-align: center;
        padding: 1.25rem 0;

        h3 {
          color: var(--text-primary);
          margin: 0.5rem 0 0.35rem;
          font-family: var(--font-body);
          font-weight: 800;
        }

        p {
          margin: 0;
          color: var(--text-secondary);
          line-height: 1.7;
        }
      }

      .success-actions {
        margin-top: 1.25rem;
        display: flex;
        justify-content: center;
      }

      .success-icon {
        width: 72px;
        height: 72px;
        margin: 0 auto 0.25rem;
        border-radius: 50%;
        background: var(--gradient-accent);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--white);
        box-shadow: 0 14px 40px rgba(245, 158, 11, 0.22);
      }

      .sla {
        margin: 0.75rem 0 0;
        text-align: center;
        color: var(--text-secondary);
        font-size: 0.875rem;
        opacity: 0.9;
      }

      .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;

        @media (max-width: 600px) {
          grid-template-columns: 1fr;
        }
      }

      .form-group {
        margin-bottom: 1.25rem;

        label {
          display: block;
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        input, select, textarea {
          width: 100%;
          padding: 0.875rem 1rem;
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-primary);
          transition: all var(--transition);

          &::placeholder {
            color: transparent;
          }

          &:focus {
            outline: none;
            border-color: rgba(245, 158, 11, 0.5);
            box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.15);
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
          min-height: 120px;
        }

      }
    }

    .contact-info {
      h3 {
        color: var(--text-primary);
        font-family: var(--font-body);
        font-weight: 600;
        margin-bottom: 1.5rem;
      }

      .info-item {
        margin-bottom: 1.5rem;

        strong {
          display: block;
          color: var(--orange);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }

        p {
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.6;
        }
      }
    }

    .map-embed {
      margin-top: 2rem;
      border: 1px solid var(--border-subtle);
      border-radius: 12px;
      overflow: hidden;
      background: rgba(255, 255, 255, 0.02);
      box-shadow: 0 30px 120px rgba(0, 0, 0, 0.35);
    }

    .map-iframe {
      width: 100%;
      height: clamp(220px, 26vw, 320px);
      display: block;
      border: 0;
      filter: saturate(1.05) contrast(1.02);
    }

    .map-link {
      display: block;
      padding: 0.75rem 0.95rem;
      border-top: 1px solid var(--border-subtle);
      color: var(--text-secondary);
      font-size: 0.875rem;
      text-decoration: none;
      background: rgba(10, 10, 11, 0.18);
      transition: color var(--transition), background var(--transition);
    }

    .map-link:hover {
      color: var(--text-primary);
      background: rgba(245, 158, 11, 0.08);
    }
  `],
})
export class ContactComponent {
  private i18n = inject(I18nService);

  loading = signal(false);
  submitted = signal(false);

  formData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
  };

  private lastSubmitted = { ...this.formData };

  emailHref(): string {
    const to = this.i18n.t('contact.info.email.value');
    const subject = this.i18n.t('contact.email.subject', { name: this.lastSubmitted.name || '-' });
    const body = this.i18n.t('contact.email.body', {
      name: this.lastSubmitted.name || '-',
      email: this.lastSubmitted.email || '-',
      phone: this.lastSubmitted.phone || '-',
      company: this.lastSubmitted.company || '-',
      projectType: this.lastSubmitted.projectType || '-',
      message: this.lastSubmitted.message || '-',
    });
    return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  onSubmit() {
    this.loading.set(true);
    setTimeout(() => {
      this.lastSubmitted = { ...this.formData };
      console.log('Contact form submitted:', this.lastSubmitted);
      window.location.href = this.emailHref();
      this.loading.set(false);
      this.submitted.set(true);
      this.formData = {
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: '',
      };
    }, 250);
  }
}
