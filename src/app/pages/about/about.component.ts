import { Component, inject } from '@angular/core';
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
  cvHref = 'assets/cv/andreas-dahm-cv.pdf';

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
