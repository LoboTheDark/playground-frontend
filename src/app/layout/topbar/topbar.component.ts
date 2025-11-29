import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeService } from '../../service/theme.service';
import { LanguageService } from '../../service/language.service';
import { MatDivider } from '@angular/material/divider';
import {AssetsConstants} from '../../constants/AssetsConstants';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    RouterLink,
    MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatTooltipModule,
    TranslateModule, MatDivider
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  readonly theme = inject(ThemeService);
  readonly lang = inject(LanguageService);

  readonly themeIcon = computed(() =>
    this.theme.theme() === 'dark' ? 'light_mode' : 'dark_mode'
  );

  onKeydown(e: KeyboardEvent) {
    const metaOrCtrl = e.metaKey || e.ctrlKey;
    if (metaOrCtrl && (e.key.toLowerCase() === 'j')) {
      e.preventDefault();
      this.theme.toggle();
    }
  }

  setLang(code: 'de' | 'en') { this.lang.use(code); }

  protected readonly AssetsConstants = AssetsConstants;
}
