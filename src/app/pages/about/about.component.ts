import { Component} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { TranslateModule } from '@ngx-translate/core';
import {UrlConstants} from '../../constants/UrlConstants';
import {AssetsConstants} from '../../constants/AssetsConstants';
import {RouterLink} from '@angular/router';
import {SharedFunctions} from '../../shared/SharedFunctions';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    TranslateModule,
    RouterLink
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  cvHref = AssetsConstants.CV;

  xpKeys = [
    {
      key: 'ABOUT.XP.COMPANY8',
      logo: AssetsConstants.TERAPORT_LOGO
    },
    {
      key: 'ABOUT.XP.COMPANY7',
      logo: AssetsConstants.COLORDIGITAL_LOGO
    },
    {
      key: 'ABOUT.XP.COMPANY6',
      logo: AssetsConstants.COLORDIGITAL_LOGO
    },
    {
      key: 'ABOUT.XP.COMPANY5',
      logo: AssetsConstants.ASSYST_LOG
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
      logo: AssetsConstants.TH_BINGEN_LOGO
    },
    {
      key: 'ABOUT.XP.COMPANY1',
      logo: AssetsConstants.TH_BINGEN_LOGO
    },
    {
      key: 'ABOUT.XP.COMPANY0',
      logo: AssetsConstants.CHAMAELEON_LOGO
    }
  ];

  projectKeys = [
    {
      key: 'ABOUT.PROJECT.P2',
      externalLink: 'https://andreas-dahm.eu/',
      internalLink: 'projects',
      identifier: 'playground',
    },
    {
      key: 'ABOUT.PROJECT.P1',
      externalLink: 'https://store.steampowered.com/app/1532640/El_Mucho/',
      internalLink: 'projects',
      identifier: 'elmucho',
    },
    {
      key: 'ABOUT.PROJECT.P0',
      externalLink: 'https://itch.io/c/6628860/lobos-collection',
      internalLink: 'projects',
      identifier: 'gamejams',
    },
    {
      key: 'ABOUT.PROJECT.DIPLOMA',
      externalLink: '',
      internalLink: 'projects',
      identifier: 'diploma',
    }
  ];

  educationKeys = [
    {
      key: 'ABOUT.EDUCATION.E6'
    },
    {
      key: 'ABOUT.EDUCATION.E5'
    },
    {
      key: 'ABOUT.EDUCATION.E4'
    },
    {
      key: 'ABOUT.EDUCATION.E3'
    },
    {
      key: 'ABOUT.EDUCATION.E2'
    },
    {
      key: 'ABOUT.EDUCATION.E1'
    },
    {
      key: 'ABOUT.EDUCATION.E0'
    }
  ]

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
    'ABOUT.TOOLS.GITLAB',
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
  protected readonly SharedFunctions = SharedFunctions;
}
