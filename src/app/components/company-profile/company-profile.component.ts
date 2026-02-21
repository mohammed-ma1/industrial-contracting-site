import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { StaggerChildrenDirective } from '../../directives/stagger-children.directive';

@Component({
  selector: 'app-company-profile',
  standalone: true,
  imports: [TranslatePipe, ScrollAnimateDirective, StaggerChildrenDirective],
  template: `
    <section class="profile section" id="profile">
      <div class="container">
        <div class="section-header" [appScrollAnimate]="0.2">
          <h2>{{ 'profile.title' | translate }}</h2>
          <p class="section-subtitle">{{ 'profile.subtitle' | translate }}</p>
        </div>

        <div class="profile-grid" appStaggerChildren="0.08" staggerSelector=".card">
          <div class="card card--values">
            <div class="card-head">
              <h3>{{ 'profile.values.title' | translate }}</h3>
              <p>{{ 'profile.values.lead' | translate }}</p>
            </div>
            <ul class="pill-list" aria-label="Values list">
              <li class="pill">{{ 'profile.values.items.excellence' | translate }}</li>
              <li class="pill">{{ 'profile.values.items.teamwork' | translate }}</li>
              <li class="pill">{{ 'profile.values.items.creativeSolutions' | translate }}</li>
              <li class="pill">{{ 'profile.values.items.innovation' | translate }}</li>
            </ul>
            <p class="card-body">{{ 'profile.values.body' | translate }}</p>
          </div>

          <div class="card card--workflow">
            <div class="card-head">
              <h3>{{ 'profile.workflow.title' | translate }}</h3>
              <p>{{ 'profile.workflow.lead' | translate }}</p>
            </div>

            <ol class="steps" [attr.aria-label]="'profile.workflow.aria' | translate">
              <li class="step">
                <span class="step-num">01</span>
                <span class="step-title">{{ 'profile.workflow.steps.design.title' | translate }}</span>
                <span class="step-desc">{{ 'profile.workflow.steps.design.desc' | translate }}</span>
              </li>
              <li class="step">
                <span class="step-num">02</span>
                <span class="step-title">{{ 'profile.workflow.steps.manufacture.title' | translate }}</span>
                <span class="step-desc">{{ 'profile.workflow.steps.manufacture.desc' | translate }}</span>
              </li>
              <li class="step">
                <span class="step-num">03</span>
                <span class="step-title">{{ 'profile.workflow.steps.site.title' | translate }}</span>
                <span class="step-desc">{{ 'profile.workflow.steps.site.desc' | translate }}</span>
              </li>
              <li class="step">
                <span class="step-num">04</span>
                <span class="step-title">{{ 'profile.workflow.steps.handover.title' | translate }}</span>
                <span class="step-desc">{{ 'profile.workflow.steps.handover.desc' | translate }}</span>
              </li>
            </ol>
          </div>

          <div class="card card--standards">
            <div class="card-head">
              <h3>{{ 'profile.standards.title' | translate }}</h3>
              <p>{{ 'profile.standards.lead' | translate }}</p>
            </div>
            <div class="badge-grid">
              <div class="badge">
                <span class="badge-kicker">{{ 'profile.standards.items.astm.kicker' | translate }}</span>
                <span class="badge-text">{{ 'profile.standards.items.astm.text' | translate }}</span>
              </div>
              <div class="badge">
                <span class="badge-kicker">{{ 'profile.standards.items.hse.kicker' | translate }}</span>
                <span class="badge-text">{{ 'profile.standards.items.hse.text' | translate }}</span>
              </div>
              <div class="badge">
                <span class="badge-kicker">{{ 'profile.standards.items.sustainability.kicker' | translate }}</span>
                <span class="badge-text">{{ 'profile.standards.items.sustainability.text' | translate }}</span>
              </div>
            </div>
          </div>

          <div class="card card--clients">
            <div class="card-head">
              <h3>{{ 'profile.clients.title' | translate }}</h3>
              <p>{{ 'profile.clients.lead' | translate }}</p>
            </div>

            <div class="marquee" role="presentation">
              <div class="marquee-track">
                <div class="marquee-row">
                  <span class="logo-chip">{{ 'profile.clients.items.developers' | translate }}</span>
                  <span class="dot" aria-hidden="true"></span>
                  <span class="logo-chip">{{ 'profile.clients.items.contractors' | translate }}</span>
                  <span class="dot" aria-hidden="true"></span>
                  <span class="logo-chip">{{ 'profile.clients.items.consultants' | translate }}</span>
                  <span class="dot" aria-hidden="true"></span>
                  <span class="logo-chip">{{ 'profile.clients.items.architects' | translate }}</span>
                  <span class="dot" aria-hidden="true"></span>
                  <span class="logo-chip">{{ 'profile.clients.items.suppliers' | translate }}</span>
                </div>
                <div class="marquee-row" aria-hidden="true">
                  <span class="logo-chip">{{ 'profile.clients.items.developers' | translate }}</span>
                  <span class="dot" aria-hidden="true"></span>
                  <span class="logo-chip">{{ 'profile.clients.items.contractors' | translate }}</span>
                  <span class="dot" aria-hidden="true"></span>
                  <span class="logo-chip">{{ 'profile.clients.items.consultants' | translate }}</span>
                  <span class="dot" aria-hidden="true"></span>
                  <span class="logo-chip">{{ 'profile.clients.items.architects' | translate }}</span>
                  <span class="dot" aria-hidden="true"></span>
                  <span class="logo-chip">{{ 'profile.clients.items.suppliers' | translate }}</span>
                </div>
              </div>
            </div>

            <div class="profile-doc" [appScrollAnimate]="0.2">
              <span class="doc-label">{{ 'profile.doc.label' | translate }}</span>
              <a class="doc-link" href="https://drive.google.com/drive/folders/1lrSf0GufaJSy6ShoVz_uQyIpnF4zZVi5" target="_blank" rel="noopener noreferrer">
                {{ 'profile.doc.cta' | translate }}
              </a>
              <small class="doc-hint">{{ 'profile.doc.hint' | translate }}</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .profile {
      background: var(--bg);
      position: relative;
      overflow: hidden;
    }

    .profile::before {
      content: '';
      position: absolute;
      inset: -12%;
      background-image: var(--brand-mark);
      background-repeat: no-repeat;
      background-position: 86% 42%;
      background-size: min(820px, 78vw);
      opacity: 0.045;
      filter: blur(0.2px) saturate(0.85) contrast(1.05);
      mix-blend-mode: soft-light;
      pointer-events: none;
    }

    .section-header {
      text-align: center;
      max-width: 760px;
      margin: 0 auto 3.5rem;

      h2 {
        color: var(--text-primary);
        margin-bottom: 0.5rem;
      }

      .section-subtitle {
        color: var(--text-secondary);
        font-size: 1.1rem;
        line-height: 1.6;
      }
    }

    .profile-grid {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 1.2rem;
      align-items: stretch;
    }

    .card {
      border-radius: 18px;
      border: 1px solid rgba(245, 158, 11, 0.14);
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(10, 10, 11, 0.0));
      box-shadow: 0 40px 140px rgba(0, 0, 0, 0.35);
      padding: 1.25rem 1.25rem 1.3rem;
      overflow: hidden;
      position: relative;
    }

    .card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(circle at 20% 15%, rgba(245, 158, 11, 0.10), transparent 55%);
      pointer-events: none;
      opacity: 0.9;
    }

    .card > * { position: relative; z-index: 1; }

    .card-head h3 {
      margin: 0 0 0.35rem;
      color: var(--text-primary);
      font-family: var(--font-body);
      font-weight: 800;
      letter-spacing: -0.01em;
    }

    .card-head p {
      margin: 0 0 1rem;
      color: var(--text-secondary);
      line-height: 1.6;
      max-width: 80ch;
    }

    .card-body {
      margin: 1rem 0 0;
      color: var(--steel-gray-light);
      line-height: 1.7;
    }

    .pill-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
    }

    .pill {
      display: inline-flex;
      align-items: center;
      padding: 0.45rem 0.7rem;
      border-radius: 999px;
      border: 1px solid rgba(245, 158, 11, 0.22);
      background: rgba(245, 158, 11, 0.06);
      color: var(--text-primary);
      font-weight: 700;
      font-size: 0.9rem;
      white-space: nowrap;
    }

    .steps {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 0.9rem;
    }

    .step {
      border-radius: 14px;
      border: 1px solid var(--border-subtle);
      background: rgba(10, 10, 11, 0.22);
      padding: 0.95rem 0.95rem 1rem;
      min-height: 132px;
    }

    .step-num {
      display: inline-flex;
      font-family: var(--font-accent);
      font-weight: 900;
      letter-spacing: 0.06em;
      font-size: 0.8rem;
      color: rgba(245, 158, 11, 0.95);
      margin-bottom: 0.4rem;
    }

    .step-title {
      display: block;
      color: var(--text-primary);
      font-weight: 800;
      margin-bottom: 0.25rem;
    }

    .step-desc {
      display: block;
      color: var(--text-secondary);
      line-height: 1.55;
      font-size: 0.92rem;
    }

    .badge-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 0.9rem;
    }

    .badge {
      border-radius: 14px;
      border: 1px solid var(--border-subtle);
      background: rgba(10, 10, 11, 0.22);
      padding: 0.95rem 1rem 1rem;
    }

    .badge-kicker {
      display: block;
      color: var(--orange);
      font-size: 0.72rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      margin-bottom: 0.45rem;
      font-weight: 800;
    }

    :host-context([dir='rtl']) .badge-kicker {
      text-transform: none;
      letter-spacing: 0;
    }

    .badge-text {
      display: block;
      color: var(--text-secondary);
      line-height: 1.6;
    }

    .marquee {
      border-radius: 14px;
      border: 1px solid var(--border-subtle);
      background: rgba(10, 10, 11, 0.22);
      overflow: hidden;
    }

    .marquee-track {
      display: flex;
      width: max-content;
      animation: marquee 20s linear infinite;
    }

    .marquee:hover .marquee-track { animation-play-state: paused; }

    .marquee-row {
      display: flex;
      align-items: center;
      gap: 0.85rem;
      padding: 0.85rem 1rem;
      white-space: nowrap;
    }

    .logo-chip {
      color: var(--text-primary);
      font-weight: 800;
      font-size: 0.9rem;
      opacity: 0.92;
    }

    .dot {
      width: 6px;
      height: 6px;
      border-radius: 999px;
      background: rgba(245, 158, 11, 0.55);
      box-shadow: 0 0 14px rgba(245, 158, 11, 0.22);
      flex: none;
    }

    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    /* Marquee logic assumes LTR flow; keep it consistent for RTL pages */
    :host-context([dir='rtl']) .marquee,
    :host-context([dir='rtl']) .marquee-track {
      direction: ltr;
    }

    .profile-doc {
      margin-top: 1rem;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 0.35rem 0.75rem;
      align-items: center;
    }

    .doc-label {
      color: var(--text-secondary);
      font-size: 0.9rem;
    }

    .doc-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.65rem 0.95rem;
      border-radius: 12px;
      border: 1px solid rgba(245, 158, 11, 0.22);
      background: rgba(245, 158, 11, 0.06);
      color: var(--text-primary);
      font-weight: 800;
      text-decoration: none;
      transition: transform var(--transition), border-color var(--transition), background var(--transition);
    }

    .doc-link:hover {
      transform: translateY(-1px);
      border-color: rgba(245, 158, 11, 0.35);
      background: rgba(245, 158, 11, 0.10);
    }

    .doc-hint {
      grid-column: 1 / -1;
      color: var(--text-secondary);
      opacity: 0.85;
      line-height: 1.55;
    }

    /* Layout spans */
    .card--values { grid-column: span 7; }
    .card--workflow { grid-column: span 5; }
    .card--standards { grid-column: span 7; }
    .card--clients { grid-column: span 5; }

    @media (max-width: 968px) {
      .profile-grid { grid-template-columns: 1fr; }
      .card--values,
      .card--workflow,
      .card--standards,
      .card--clients { grid-column: auto; }

      .steps { grid-template-columns: 1fr; }
      .badge-grid { grid-template-columns: 1fr; }
      .profile-doc { grid-template-columns: 1fr; }
      .doc-link { width: max-content; }
    }
  `],
})
export class CompanyProfileComponent {}

