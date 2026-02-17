import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { StaggerChildrenDirective } from '../../directives/stagger-children.directive';
import { CounterAnimateDirective } from '../../directives/counter-animate.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollAnimateDirective, StaggerChildrenDirective, CounterAnimateDirective, TranslatePipe],
  template: `
    <section class="about section" id="about">
      <div class="container">
        <div class="about-grid">
          <div class="about-visual" [appScrollAnimate]="0.2">
            <div class="about-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
                [alt]="'about.alt' | translate"
                class="about-image"
              />
              <div class="about-image-accent"></div>
              <div class="about-badge" [attr.aria-label]="'about.ariaLabel' | translate">
                <span class="badge-top">2017</span>
                <span class="badge-bottom">{{ 'about.badge.label' | translate }}</span>
              </div>
            </div>
          </div>
          <div class="about-content" [appScrollAnimate]="0.2">
            <h2>{{ 'about.title' | translate }}</h2>
            <p class="lead">{{ 'about.lead' | translate }}</p>
            <p>{{ 'about.paragraph1' | translate }}</p>
            <p>{{ 'about.paragraph2' | translate }}</p>
            <p>{{ 'about.paragraph3' | translate }}</p>
            <ul class="about-stats">
              <li><strong><span appCounterAnimate="2017">0</span></strong> {{ 'about.stats.yearEstablished' | translate }}</li>
              <li><strong><span appCounterAnimate="70">0</span>+</strong> {{ 'about.stats.skilledEmployees' | translate }}</li>
              <li><strong><span appCounterAnimate="15">0</span>+</strong> {{ 'about.stats.completedProjects' | translate }}</li>
            </ul>

            <div class="about-values" appStaggerChildren="0.08" staggerSelector=".value-card">
              <div class="value-card">
                <h4>{{ 'about.values.expertise.title' | translate }}</h4>
                <p>{{ 'about.values.expertise.description' | translate }}</p>
              </div>
              <div class="value-card">
                <h4>{{ 'about.values.quality.title' | translate }}</h4>
                <p>{{ 'about.values.quality.description' | translate }}</p>
              </div>
              <div class="value-card">
                <h4>{{ 'about.values.installation.title' | translate }}</h4>
                <p>{{ 'about.values.installation.description' | translate }}</p>
              </div>
            </div>

            <div class="about-mission" [appScrollAnimate]="0.2">
              <h3>{{ 'about.mission.title' | translate }}</h3>
              <p>{{ 'about.mission.text' | translate }}</p>
            </div>
          </div>
        </div>

        <div class="about-docs" [appScrollAnimate]="0.2">
          <div class="docs-head">
            <h3>{{ 'about.documents.title' | translate }}</h3>
            <p>{{ 'about.documents.subtitle' | translate }}</p>
          </div>
          <div class="docs-actions">
            <a class="doc-link" href="https://drive.google.com/drive/folders/1lrSf0GufaJSy6ShoVz_uQyIpnF4zZVi5" target="_blank" rel="noopener noreferrer">
              {{ 'about.documents.companyProfile' | translate }}
            </a>
            <a class="doc-link" href="https://drive.google.com/drive/folders/1h9jtkIrY-u40kek-YMYXLi4UAlrATZL9" target="_blank" rel="noopener noreferrer">
              {{ 'about.documents.preQualification' | translate }}
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      background: var(--bg);
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      margin-bottom: 4rem;

      @media (max-width: 968px) {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
    }

    .about-visual {
      position: relative;
    }

    .about-image-wrap {
      position: relative;
      border-radius: 12px;
      overflow: hidden;
      aspect-ratio: 4/3;
    }

    .about-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .about-image-accent {
      position: absolute;
      bottom: -20px;
      right: -20px;
      width: 40%;
      height: 40%;
      background: var(--gradient-accent);
      opacity: 0.2;
      border-radius: 12px;
      z-index: -1;
    }

    .about-badge {
      position: absolute;
      left: 1rem;
      bottom: 1rem;
      padding: 0.75rem 0.85rem;
      border-radius: 14px;
      border: 1px solid rgba(245, 158, 11, 0.2);
      background: rgba(10, 10, 11, 0.45);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      color: var(--text-primary);
      box-shadow: 0 30px 90px rgba(0, 0, 0, 0.45);
    }

    .badge-top {
      display: block;
      font-family: var(--font-accent);
      font-weight: 800;
      font-size: 1.35rem;
      line-height: 1;
      letter-spacing: -0.02em;
    }

    .badge-bottom {
      display: block;
      margin-top: 0.25rem;
      font-size: 0.72rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--text-secondary);
    }

    .about-content h2 {
      color: var(--text-primary);
      margin-bottom: 1rem;
    }

    .lead {
      font-size: 1.25rem;
      color: var(--text-secondary);
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .about-content p {
      margin-bottom: 1rem;
      color: var(--steel-gray-light);
      line-height: 1.7;
    }

    .about-stats {
      list-style: none;
      padding: 0;
      margin: 2rem 0 0;
      display: flex;
      gap: 2.5rem;
      flex-wrap: wrap;

      li {
        color: var(--text-primary);
        font-size: 1rem;

        strong {
          display: block;
          font-family: var(--font-accent);
          font-size: 2.5rem;
          font-weight: 700;
          background: var(--gradient-accent);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.25rem;
        }
      }
    }

    .about-values {
      margin-top: 2rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;

      @media (max-width: 968px) {
        grid-template-columns: 1fr;
      }
    }

    .value-card {
      border-radius: 14px;
      border: 1px solid var(--border-subtle);
      background: linear-gradient(180deg, rgba(245, 158, 11, 0.06), rgba(10, 10, 11, 0.0));
      padding: 1rem 1.1rem;
      transition: transform var(--transition), border-color var(--transition), box-shadow var(--transition);

      &:hover {
        transform: translateY(-2px);
        border-color: rgba(245, 158, 11, 0.22);
        box-shadow: 0 18px 55px rgba(0,0,0,0.25);
      }

      h4 {
        margin: 0 0 0.35rem;
        color: var(--text-primary);
        font-weight: 700;
        font-size: 1rem;
      }

      p {
        margin: 0;
        color: var(--text-secondary);
        font-size: 0.95rem;
        line-height: 1.5;
      }
    }

    .about-mission {
      margin-top: 2rem;
      padding: 1.25rem 1.25rem;
      border-radius: 16px;
      border: 1px solid rgba(245, 158, 11, 0.14);
      background: rgba(255, 255, 255, 0.02);

      h3 {
        margin: 0 0 0.5rem;
        color: var(--text-primary);
        font-family: var(--font-body);
        font-weight: 700;
        font-size: 1.1rem;
      }

      p {
        margin: 0;
        color: var(--text-secondary);
        line-height: 1.7;
      }
    }

    .about-docs {
      margin-top: 4rem;
      padding: 1.5rem;
      border-radius: 18px;
      border: 1px solid rgba(245, 158, 11, 0.14);
      background: rgba(255, 255, 255, 0.02);
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1.25rem;
      flex-wrap: wrap;
    }

    .docs-head {
      h3 {
        margin: 0 0 0.35rem;
        color: var(--text-primary);
        font-family: var(--font-body);
        font-weight: 700;
      }

      p {
        margin: 0;
        color: var(--text-secondary);
        max-width: 70ch;
      }
    }

    .docs-actions {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
      align-items: center;
    }

    .doc-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem 1.05rem;
      border-radius: 12px;
      border: 1px solid rgba(245, 158, 11, 0.22);
      background: rgba(245, 158, 11, 0.06);
      color: var(--text-primary);
      font-weight: 700;
      text-decoration: none;
      transition: transform var(--transition), border-color var(--transition), background var(--transition);

      &:hover {
        transform: translateY(-1px);
        border-color: rgba(245, 158, 11, 0.35);
        background: rgba(245, 158, 11, 0.10);
      }
    }
  `],
})
export class AboutComponent {}
