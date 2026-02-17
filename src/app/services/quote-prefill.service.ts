import { Injectable, signal } from '@angular/core';

export type QuoteProjectType = '' | 'construction' | 'steel' | 'manufacturing' | 'other';

@Injectable({ providedIn: 'root' })
export class QuotePrefillService {
  private _projectType = signal<QuoteProjectType>('');

  setProjectType(projectType: QuoteProjectType) {
    this._projectType.set(projectType);
  }

  consumeProjectType(): QuoteProjectType {
    const v = this._projectType();
    this._projectType.set('');
    return v;
  }
}

