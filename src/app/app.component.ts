import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { AboutComponent } from './components/about/about.component';
import { CompanyProfileComponent } from './components/company-profile/company-profile.component';
import { ServicesComponent } from './components/services/services.component';
import { ClientsPartnersComponent } from './components/clients-partners/clients-partners.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SafetyComponent } from './components/safety/safety.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    QuoteFormComponent,
    AboutComponent,
    CompanyProfileComponent,
    ServicesComponent,
    ClientsPartnersComponent,
    ProjectsComponent,
    SafetyComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <app-header />
    <main class="main-content">
      <app-hero />
      <app-quote-form />
      <app-about />
      <app-company-profile />
      <app-services />
      <app-clients-partners />
      <app-projects />
      <app-safety />
      <app-contact />
    </main>
    <app-footer />
  `,
  styles: [`
    .main-content {
      padding-top: 0;
    }
  `],
})
export class AppComponent {}
