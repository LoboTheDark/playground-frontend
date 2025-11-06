import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from './service/theme.service';

import {LanguageService} from './service/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule, MatIconModule, MatButtonModule,
    MatFormFieldModule, MatSelectModule,
    FormsModule,
    TranslateModule
  ],
  template: `
    <mat-toolbar color="primary">
      <span>{{ 'APP.TITLE' | translate }}</span>
      <span class="spacer"></span>

      <!-- Sprache -->
      <mat-form-field appearance="outline" style="width: 150px; margin-right: 8px;">
        <mat-select [value]="lang.lang()" (selectionChange)="lang.use($event.value)">
          <mat-option value="de">{{ 'LANG.DE' | translate }}</mat-option>
          <mat-option value="en">{{ 'LANG.EN' | translate }}</mat-option>
        </mat-select>
      </mat-form-field>

      <!-- Theme -->
      <button mat-icon-button aria-label="Theme umschalten" (click)="theme.toggle()">
        <mat-icon>{{ themeIcon() }}</mat-icon>
      </button>
    </mat-toolbar>

    <main class="container app-surface">
      <router-outlet />
    </main>

    <style>
      .spacer { flex: 1 1 auto; }
      .container { max-width: 960px; margin: 24px auto; padding: 0 16px; }
      mat-form-field { --mdc-outlined-text-field-container-shape: 20px; }
    </style>
  `,
})
export class App {
  readonly theme = inject(ThemeService);
  readonly lang = inject(LanguageService);
  readonly themeIcon = computed(() => this.theme.theme() === 'dark' ? 'light_mode' : 'dark_mode');
}
