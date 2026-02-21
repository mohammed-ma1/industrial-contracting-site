import { Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';
import { StaggerChildrenDirective } from '../../directives/stagger-children.directive';

type TabId = 'clients' | 'partners';

@Component({
  selector: 'app-clients-partners',
  standalone: true,
  imports: [TranslatePipe, ScrollAnimateDirective, StaggerChildrenDirective],
  template: `
    <section class="cp section" id="clients">
      <div class="container">
        <div class="cp-head" [appScrollAnimate]="0.2">
          <div>
            <h2>{{ 'clientsPartners.title' | translate }}</h2>
            <p class="subtitle">{{ 'clientsPartners.subtitle' | translate }}</p>
          </div>

          <div class="tabs" role="tablist" [attr.aria-label]="'clientsPartners.aria.tabs' | translate">
            <button
              type="button"
              class="tab"
              role="tab"
              [attr.aria-selected]="tab() === 'clients'"
              [class.active]="tab() === 'clients'"
              (click)="tab.set('clients')"
            >
              {{ 'clientsPartners.tabs.clients' | translate }}
            </button>
            <button
              type="button"
              class="tab"
              role="tab"
              [attr.aria-selected]="tab() === 'partners'"
              [class.active]="tab() === 'partners'"
              (click)="tab.set('partners')"
            >
              {{ 'clientsPartners.tabs.partners' | translate }}
            </button>
          </div>
        </div>

        <div class="trust-strip" appStaggerChildren="0.08" staggerSelector=".trust">
          <div class="trust">
            <span class="k">{{ 'clientsPartners.trust.astm.k' | translate }}</span>
            <span class="v">{{ 'clientsPartners.trust.astm.v' | translate }}</span>
          </div>
          <div class="trust">
            <span class="k">{{ 'clientsPartners.trust.hse.k' | translate }}</span>
            <span class="v">{{ 'clientsPartners.trust.hse.v' | translate }}</span>
          </div>
          <div class="trust">
            <span class="k">{{ 'clientsPartners.trust.riyadh.k' | translate }}</span>
            <span class="v">{{ 'clientsPartners.trust.riyadh.v' | translate }}</span>
          </div>
        </div>

        <div class="wall" [appScrollAnimate]="0.2" appStaggerChildren="0.05" staggerSelector=".logo-card, .tile">
          @if (tab() === 'clients') {
            <div class="clients-panel" role="tabpanel" [attr.aria-label]="'clientsPartners.tabs.clients' | translate">
              <p class="clients-lead">{{ 'clientsPartners.magic.lead' | translate }}</p>

              <div class="logo-cards">
                <article class="logo-card" aria-label="KAFD">
                  <div class="logo-card-chips">
                    <span class="chip chip--accent">{{ 'clientsPartners.magic.chip.featured' | translate }}</span>
                    <span class="chip">{{ 'clientsPartners.magic.chip.ksa' | translate }}</span>
                    <span class="chip">{{ 'clientsPartners.magic.chip.delivery' | translate }}</span>
                  </div>

                  <div class="logo-frame">
                    <img class="logo-img logo-img--invert logo-img--kafd" src="assets/img/clients/kafd.svg" alt="KAFD" />
                  </div>

                  <div class="logo-meta">
                    <div class="logo-name">KAFD</div>
                    <div class="logo-desc">{{ 'clientsPartners.magic.cards.kafd' | translate }}</div>
                  </div>
                </article>

                <article class="logo-card" [attr.aria-label]="'clientsPartners.names.mbsCity' | translate">
                  <div class="logo-card-chips">
                    <span class="chip chip--accent">{{ 'clientsPartners.magic.chip.client' | translate }}</span>
                    <span class="chip">{{ 'clientsPartners.magic.chip.riyadh' | translate }}</span>
                    <span class="chip">{{ 'clientsPartners.magic.chip.quality' | translate }}</span>
                  </div>

                  <div class="logo-frame">
                    <img class="logo-img logo-img--mbs" src="assets/img/clients/mbs-nonprofit-city.svg" [alt]="'clientsPartners.names.mbsCity' | translate" />
                  </div>

                  <div class="logo-meta">
                    <div class="logo-name">{{ 'clientsPartners.names.mbsCity' | translate }}</div>
                    <div class="logo-desc">{{ 'clientsPartners.magic.cards.mbsCity' | translate }}</div>
                  </div>
                </article>

                <article class="logo-card" [attr.aria-label]="'clientsPartners.names.baytur' | translate">
                  <div class="logo-card-chips">
                    <span class="chip chip--accent">{{ 'clientsPartners.magic.chip.client' | translate }}</span>
                    <span class="chip">{{ 'clientsPartners.magic.chip.onSite' | translate }}</span>
                    <span class="chip">{{ 'clientsPartners.magic.chip.safety' | translate }}</span>
                  </div>

                  <div class="logo-frame">
                    <img class="logo-img logo-img--baytur" src="assets/img/clients/baytur.png" [alt]="'clientsPartners.names.baytur' | translate" />
                  </div>

                  <div class="logo-meta">
                    <div class="logo-name">{{ 'clientsPartners.names.baytur' | translate }}</div>
                    <div class="logo-desc">{{ 'clientsPartners.magic.cards.baytur' | translate }}</div>
                  </div>
                </article>
              </div>
            </div>
          } @else {
            <div class="grid grid--partners" role="tabpanel" [attr.aria-label]="'clientsPartners.tabs.partners' | translate">
              <div class="tile"><span class="tile-title">EMESSA</span></div>
              <div class="tile"><span class="tile-title">{{ 'clientsPartners.names.nesma' | translate }}</span></div>
              <div class="tile"><span class="tile-title">SIKA</span></div>
              <div class="tile"><span class="tile-title">FOSROC</span></div>
              <div class="tile tile--wide"><span class="tile-title">{{ 'clientsPartners.names.kimmcoIsover' | translate }}</span></div>
              <div class="tile"><span class="tile-title">fischer</span></div>
              <div class="tile"><span class="tile-title">{{ 'clientsPartners.names.absar' | translate }}</span></div>
              <div class="tile tile--wide"><span class="tile-title">HILTI</span></div>
              <div class="tile tile--wide"><span class="tile-title">{{ 'clientsPartners.names.jazeeraPaints' | translate }}</span></div>
            </div>
          }
        </div>

      </div>
    </section>
  `,
  styles: [`
    .cp {
      background: var(--bg);
      position: relative;
      overflow: hidden;
    }

    .cp::before {
      content: '';
      position: absolute;
      inset: -2px;
      background:
        radial-gradient(circle at 20% 18%, rgba(var(--orange-rgb), 0.14), transparent 55%),
        radial-gradient(circle at 85% 55%, rgba(var(--orange-rgb), 0.08), transparent 60%),
        repeating-linear-gradient(0deg, rgba(var(--orange-rgb), 0.06) 0 1px, transparent 1px 56px),
        repeating-linear-gradient(90deg, rgba(var(--orange-rgb), 0.05) 0 1px, transparent 1px 56px);
      opacity: 0.18;
      pointer-events: none;
      filter: blur(0.2px);
      z-index: 0;
    }

    .cp::after {
      content: '';
      position: absolute;
      inset: -10%;
      background-image: var(--brand-mark);
      background-repeat: no-repeat;
      background-position: 16% 58%;
      background-size: min(920px, 82vw);
      opacity: 0.05;
      filter: blur(0.2px) saturate(0.85) contrast(1.05);
      mix-blend-mode: soft-light;
      pointer-events: none;
      z-index: 0;
    }

    .cp-head {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 1.25rem;
      flex-wrap: wrap;
      margin-bottom: 1.25rem;
      position: relative;
      z-index: 1;
    }

    .cp-head h2 {
      margin: 0 0 0.35rem;
    }

    .subtitle {
      margin: 0;
      color: var(--text-secondary);
      max-width: 78ch;
      line-height: 1.65;
    }

    .tabs {
      display: inline-flex;
      padding: 0.35rem;
      border-radius: 999px;
      border: 1px solid var(--border-subtle);
      background: rgba(255, 255, 255, 0.03);
      gap: 0.35rem;
    }

    .tab {
      appearance: none;
      border: none;
      background: transparent;
      color: var(--text-secondary);
      font-weight: 800;
      padding: 0.55rem 0.9rem;
      border-radius: 999px;
      transition: background var(--transition), color var(--transition), transform var(--transition);
    }

    .tab:hover {
      color: var(--text-primary);
      background: rgba(255, 255, 255, 0.05);
    }

    .tab.active {
      color: var(--white);
      background: var(--gradient-accent);
      box-shadow: 0 14px 40px rgba(var(--orange-rgb), 0.18);
    }

    .trust-strip {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.85rem;
      margin: 1.25rem 0 1.75rem;
      position: relative;
      z-index: 1;

      @media (max-width: 900px) {
        grid-template-columns: 1fr;
      }
    }

    .trust {
      border-radius: 14px;
      border: 1px solid rgba(var(--orange-rgb), 0.14);
      background: rgba(10, 10, 11, 0.22);
      padding: 0.9rem 1rem;
    }

    .k {
      display: block;
      color: var(--orange);
      font-size: 0.72rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      font-weight: 900;
      margin-bottom: 0.35rem;
    }

    :host-context([dir='rtl']) .k {
      text-transform: none;
      letter-spacing: 0;
    }

    .v {
      display: block;
      color: var(--text-secondary);
      line-height: 1.6;
    }

    .wall {
      position: relative;
      z-index: 1;
    }

    .clients-panel {
      display: grid;
      gap: 1rem;
    }

    .clients-lead {
      margin: 0 0 0.15rem;
      color: var(--text-secondary);
      line-height: 1.65;
      max-width: 90ch;
    }

    .logo-cards {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1.1rem;
      align-items: stretch;

      @media (max-width: 1020px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      @media (max-width: 680px) {
        grid-template-columns: 1fr;
      }
    }

    .logo-card {
      position: relative;
      border-radius: 22px;
      border: 1px solid rgba(255, 255, 255, 0.10);
      background:
        radial-gradient(circle at 22% 18%, rgba(var(--orange-rgb), 0.16), transparent 55%),
        linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(10, 10, 11, 0));
      overflow: hidden;
      min-height: 320px;
      padding: 1.05rem 1.05rem 1rem;
      display: grid;
      grid-template-rows: auto 1fr auto;
      gap: 0.95rem;
      transition: transform var(--transition), border-color var(--transition), box-shadow var(--transition);
    }

    .logo-card::after {
      content: '';
      position: absolute;
      inset: 0;
      background:
        radial-gradient(circle at 70% 0%, rgba(255, 255, 255, 0.08), transparent 35%),
        radial-gradient(circle at 0% 70%, rgba(255, 255, 255, 0.06), transparent 45%);
      opacity: 0.55;
      pointer-events: none;
      mix-blend-mode: screen;
    }

    .logo-card:hover {
      transform: translateY(-4px);
      border-color: rgba(var(--orange-rgb), 0.24);
      box-shadow: 0 34px 120px rgba(0, 0, 0, 0.55);
    }

    .logo-card-chips {
      position: relative;
      z-index: 1;
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      min-height: 38px;
      align-items: flex-start;
    }

    .chip {
      border-radius: 999px;
      border: 1px solid rgba(255, 255, 255, 0.12);
      background: rgba(255, 255, 255, 0.04);
      color: var(--text-secondary);
      font-weight: 850;
      font-size: 0.72rem;
      padding: 0.38rem 0.6rem;
      line-height: 1;
      white-space: nowrap;
    }

    .chip--accent {
      border-color: rgba(var(--orange-rgb), 0.26);
      background: rgba(var(--orange-rgb), 0.10);
      color: var(--text-primary);
    }

    .logo-frame {
      position: relative;
      z-index: 1;
      border-radius: 18px;
      border: 1px solid rgba(255, 255, 255, 0.10);
      background:
        radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.09), transparent 55%),
        linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(10, 10, 11, 0.0));
      padding: 0.95rem 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow:
        0 16px 50px rgba(0, 0, 0, 0.32),
        0 0 0 1px rgba(0, 0, 0, 0.18) inset;
      min-height: 172px;
    }

    .logo-img {
      width: 100%;
      max-width: 360px;
      height: 140px;
      object-fit: contain;
      opacity: 0.98;
      transition: transform var(--transition), filter var(--transition), opacity var(--transition);
    }

    .logo-img--invert {
      filter: brightness(0) invert(1) drop-shadow(0 12px 34px rgba(0, 0, 0, 0.38));
    }

    .logo-img--kafd { transform: scale(1.14); transform-origin: center; }
    .logo-img--mbs { transform: scale(1.22); transform-origin: center; }
    .logo-img--baytur { transform: scale(1.03); transform-origin: center; }

    .logo-card:hover .logo-img { transform: scale(1.06); opacity: 1; }
    .logo-card:hover .logo-img--kafd { transform: scale(1.18); }
    .logo-card:hover .logo-img--mbs { transform: scale(1.26); }
    .logo-card:hover .logo-img--baytur { transform: scale(1.06); }

    .logo-meta {
      position: relative;
      z-index: 1;
      display: grid;
      gap: 0.35rem;
    }

    .logo-name {
      color: var(--text-primary);
      font-weight: 950;
      letter-spacing: 0.01em;
      line-height: 1.2;
    }

    .logo-desc {
      color: var(--text-secondary);
      line-height: 1.65;
      font-size: 0.92rem;
      max-width: 56ch;
    }

    :host-context([dir='rtl']) .logo-name,
    :host-context([dir='rtl']) .chip {
      letter-spacing: 0;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 1rem;
    }

    .grid--logos {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1.1rem;
      align-items: stretch;

      @media (max-width: 1020px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      @media (max-width: 680px) {
        grid-template-columns: 1fr;
      }
    }

    .grid--partners {
      grid-template-columns: repeat(12, 1fr);
    }

    .tile {
      grid-column: span 4;
      border-radius: 18px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(10, 10, 11, 0));
      padding: 1.25rem 1.15rem;
      min-height: 92px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.25rem;
      position: relative;
      overflow: hidden;
      transition: transform var(--transition), border-color var(--transition), box-shadow var(--transition);
    }

    .tile::before {
      content: '';
      position: absolute;
      inset: -40%;
      background: radial-gradient(circle at 30% 30%, rgba(var(--orange-rgb), 0.14), transparent 55%);
      transform: translate3d(-10%, -10%, 0);
      opacity: 0;
      transition: opacity var(--transition), transform var(--transition);
      pointer-events: none;
    }

    .tile:hover {
      transform: translateY(-3px);
      border-color: rgba(var(--orange-rgb), 0.22);
      box-shadow: 0 30px 120px rgba(0, 0, 0, 0.45);
    }

    .tile:hover::before {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    .tile-title {
      color: var(--text-primary);
      font-weight: 900;
      letter-spacing: 0.02em;
      line-height: 1.25;
    }

    .tile-sub {
      color: var(--text-secondary);
      font-size: 0.8rem;
      opacity: 0.85;
    }

    .tile--big {
      grid-column: span 6;
      min-height: 140px;
    }

    /* clients now uses .logo-card; keep .tile styles for partners only */

    .tile--wide {
      grid-column: span 6;
    }

    @media (max-width: 968px) {
      .grid { grid-template-columns: 1fr; }
      .tile, .tile--big, .tile--wide { grid-column: auto; }
    }

    .hint {
      margin: 1.25rem 0 0;
      color: var(--text-secondary);
      opacity: 0.9;
      line-height: 1.6;
      position: relative;
      z-index: 1;
    }
  `],
})
export class ClientsPartnersComponent {
  tab = signal<TabId>('clients');
}

