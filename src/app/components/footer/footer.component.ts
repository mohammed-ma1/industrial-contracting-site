import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslatePipe],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-main">
          <div class="footer-brand">
            <a href="#" class="logo">
              {{ 'header.logo.company' | translate }}<span>{{ 'header.logo.accent' | translate }}</span>
            </a>
            <p>{{ 'footer.description' | translate }}</p>
            <div class="footer-social">
              <a href="#" class="social-link" [attr.aria-label]="'footer.social.linkedin' | translate">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" class="social-link" [attr.aria-label]="'footer.social.twitter' | translate">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
          <div class="footer-links">
            <h4>{{ 'footer.quickLinks.title' | translate }}</h4>
            <a href="#about">{{ 'common.navigation.about' | translate }}</a>
            <a href="#services">{{ 'common.navigation.services' | translate }}</a>
            <a href="#projects">{{ 'common.navigation.projects' | translate }}</a>
            <a href="#contact">{{ 'common.navigation.contact' | translate }}</a>
          </div>
          <div class="footer-docs">
            <h4>{{ 'footer.documents.title' | translate }}</h4>
            <a href="https://drive.google.com/drive/folders/1lrSf0GufaJSy6ShoVz_uQyIpnF4zZVi5" target="_blank" rel="noopener noreferrer">{{ 'footer.documents.companyProfile' | translate }}</a>
            <a href="https://drive.google.com/drive/folders/1h9jtkIrY-u40kek-YMYXLi4UAlrATZL9" target="_blank" rel="noopener noreferrer">{{ 'footer.documents.preQualification' | translate }}</a>
          </div>
          <div class="footer-contact">
            <h4>{{ 'footer.contact.title' | translate }}</h4>
            <p>{{ 'contact.info.address.line1' | translate }}</p>
            <p>{{ 'contact.info.address.line2' | translate }}</p>
            <p>{{ 'contact.info.phone.label' | translate }}: {{ 'contact.info.phone.value' | translate }}</p>
            <p>{{ 'contact.info.email.label' | translate }}: {{ 'contact.info.email.value' | translate }}</p>
          </div>
        </div>
        <div class="footer-divider"></div>
        <div class="footer-bottom">
          <p>&copy; {{ year }} {{ 'footer.copyright' | translate }}</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--surface);
      color: var(--text-secondary);
      padding: 5rem 0 2rem;
      border-top: 1px solid var(--border-subtle);
    }

    .footer-main {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr 1fr;
      gap: 4rem;
      margin-bottom: 3rem;

      @media (max-width: 968px) {
        grid-template-columns: 1fr 1fr;
      }

      @media (max-width: 600px) {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
    }

    .footer-brand .logo {
      font-family: var(--font-heading);
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-primary);
      display: block;
      margin-bottom: 1rem;
      text-decoration: none;

      span {
        background: var(--gradient-accent);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }

    .footer-brand p {
      max-width: 320px;
      line-height: 1.7;
      font-size: 0.9375rem;
    }

    .footer-social {
      display: flex;
      gap: 1rem;
      margin-top: 1.5rem;
    }

    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.05);
      color: var(--text-secondary);
      transition: all var(--transition);

      &:hover {
        background: var(--gradient-accent);
        color: var(--white);
        transform: scale(1.05);
      }
    }

    .footer-links h4,
    .footer-docs h4,
    .footer-contact h4 {
      color: var(--text-primary);
      font-family: var(--font-body);
      font-size: 0.75rem;
      font-weight: 600;
      margin-bottom: 1.25rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .footer-links {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      a {
        color: var(--text-secondary);
        transition: color var(--transition);
        font-size: 0.9375rem;

        &:hover {
          color: var(--orange);
        }
      }
    }

    .footer-docs {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      a {
        color: var(--text-secondary);
        transition: color var(--transition);
        font-size: 0.9375rem;

        &:hover {
          color: var(--orange);
        }
      }
    }

    .footer-contact p {
      margin: 0.35rem 0;
      font-size: 0.9375rem;
    }

    .footer-divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, var(--border-subtle), transparent);
      margin-bottom: 2rem;
    }

    .footer-bottom {
      text-align: center;

      p {
        margin: 0;
        font-size: 0.8125rem;
        color: var(--steel-gray);
      }
    }
  `],
})
export class FooterComponent {
  year = new Date().getFullYear();
}
