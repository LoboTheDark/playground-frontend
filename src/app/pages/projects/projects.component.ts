import { Component } from '@angular/core';
import {MatAccordion, MatExpansionPanel, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle} from '@angular/material/expansion';
import {MatIcon} from '@angular/material/icon';
import {TranslatePipe} from '@ngx-translate/core';

export interface Projects {
  title: string,
  shortDescription: string,
  icon: string,
}

@Component({
  selector: 'app-projects',
  imports: [
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    MatIcon,
    TranslatePipe
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
    allProjects: Projects[] = [
      {
        title: 'PROJECTS.PLAYGROUND.TITLE',
        shortDescription: 'PROJECTS.PLAYGROUND.SHORT_DESCRIPTION',
        icon: 'web'
      },
      {
        title: 'PROJECTS.EL_MUCHO.TITLE',
        shortDescription: 'PROJECTS.EL_MUCHO.SHORT_DESCRIPTION',
        icon: 'sports_esports'
      },
      {
        title: 'PROJECTS.GAME_JAMS.TITLE',
        shortDescription: 'PROJECTS.GAME_JAMS.SHORT_DESCRIPTION',
        icon: 'videogame_asset'
      }
    ]
}
