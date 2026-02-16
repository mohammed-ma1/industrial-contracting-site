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

        <div class="wall" [appScrollAnimate]="0.2" appStaggerChildren="0.05" staggerSelector=".tile">
          @if (tab() === 'clients') {
            <div class="grid" role="tabpanel" [attr.aria-label]="'clientsPartners.tabs.clients' | translate">
              <div class="tile tile--big">
                <span class="tile-title">KAFD</span>
                <span class="tile-sub">{{ 'clientsPartners.hints.placeholderLogo' | translate }}</span>
              </div>
              <div class="tile">
                <span class="tile-title">{{ 'clientsPartners.names.mbsCity' | translate }}</span>
                <span class="tile-sub">{{ 'clientsPartners.hints.placeholderLogo' | translate }}</span>
              </div>
              <div class="tile">
                <span class="tile-title">{{ 'clientsPartners.names.baytur' | translate }}</span>
                <span class="tile-sub">{{ 'clientsPartners.hints.placeholderLogo' | translate }}</span>
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

        <p class="hint" [appScrollAnimate]="0.2">{{ 'clientsPartners.hints.swapToLogos' | translate }}</p>
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
        radial-gradient(circle at 20% 18%, rgba(245, 158, 11, 0.14), transparent 55%),
        radial-gradient(circle at 85% 55%, rgba(245, 158, 11, 0.08), transparent 60%),
        repeating-linear-gradient(0deg, rgba(245, 158, 11, 0.06) 0 1px, transparent 1px 56px),
        repeating-linear-gradient(90deg, rgba(245, 158, 11, 0.05) 0 1px, transparent 1px 56px);
      opacity: 0.18;
      pointer-events: none;
      filter: blur(0.2px);
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
      box-shadow: 0 14px 40px rgba(245, 158, 11, 0.18);
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
      border: 1px solid rgba(245, 158, 11, 0.14);
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

    .grid {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 1rem;
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
      background: radial-gradient(circle at 30% 30%, rgba(245, 158, 11, 0.14), transparent 55%);
      transform: translate3d(-10%, -10%, 0);
      opacity: 0;
      transition: opacity var(--transition), transform var(--transition);
      pointer-events: none;
    }

    .tile:hover {
      transform: translateY(-3px);
      border-color: rgba(245, 158, 11, 0.22);
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

