import { Component} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { TranslateModule } from '@ngx-translate/core';
import {RouterLink} from '@angular/router';
import {UrlConstants} from '../../constants/UrlConstants';
import {AssetsConstants} from '../../constants/AssetsConstants';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule, NgOptimizedImage,
    MatCardModule, MatChipsModule, MatIconModule, MatButtonModule, MatDividerModule,
    TranslateModule, RouterLink
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  cvHref = AssetsConstants.CV;

  xpKeys = [
    {
      key: 'ABOUT.XP.COMPANY7',
      logo: AssetsConstants.TERAPORT_LOGO
    },
    {
      key: 'ABOUT.XP.COMPANY6',
      logo: AssetsConstants.COLORDIGITAL_LOGO
    },
    {
      key: 'ABOUT.XP.COMPANY5',
      logo: AssetsConstants.COLORDIGITAL_LOGO
    },
    {
      key: 'ABOUT.XP.COMPANY4',
      logo: AssetsConstants.ASSYST_LOG
    },
    {
      key: 'ABOUT.XP.COMPANY3',
      logo: AssetsConstants.ASSYST_LOG
    },
    {
      key: 'ABOUT.XP.COMPANY2',
      logo: AssetsConstants.ASSYST_LOG
    },
    {
      key: 'ABOUT.XP.COMPANY1',
      logo: AssetsConstants.TH_BINGEN_LOGO
    },
    {
      key: 'ABOUT.XP.COMPANY0',
      logo: AssetsConstants.TH_BINGEN_LOGO
    }
  ];

  primarySkills = [
    'ABOUT.SKILLS.JAVA',
    'ABOUT.SKILLS.SPRING',
    'ABOUT.SKILLS.ANGULAR',
    'ABOUT.SKILLS.DOCKER',
    'ABOUT.SKILLS.UNITY',
    'ABOUT.SKILLS.PYTHON',
    'ABOUT.SKILLS.CSHARP',
    'ABOUT.SKILLS.TYPESCRIPT'
  ];

  toolset = [
    'ABOUT.TOOLS.GIT',
    'ABOUT.TOOLS.GITHUB',
    'ABOUT.TOOLS.JENKINS',
    'ABOUT.TOOLS.K8S',
    'ABOUT.TOOLS.POSTGRES',
    'ABOUT.TOOLS.MONGO',
    'ABOUT.TOOLS.GRAFANA',
  ];

  openMail(event: Event) {
    event.preventDefault();
    const user = 'andreas.dahm';
    const domain = 'gmail.com';
    globalThis.location.href = `mailto:${user}@${domain}`;
  }

  protected readonly UrlConstants = UrlConstants;
  protected readonly AssetsConstants = AssetsConstants;
}
