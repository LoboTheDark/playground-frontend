import {Component, inject, signal} from '@angular/core';
import {MatAccordion, MatExpansionPanel, MatExpansionPanelDescription, MatExpansionPanelHeader, MatExpansionPanelTitle} from '@angular/material/expansion';
import {MatIcon} from '@angular/material/icon';
import {TranslatePipe} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';
import {AssetsConstants} from '../../constants/AssetsConstants';

export interface Projects {
  identifier: string;
  title: string,
  shortDescription: string,
  introduction: string,
  images: string[],
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
    TranslatePipe,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {

    private readonly route = inject(ActivatedRoute);
    selectedKey = signal<string | null>(null);

    allProjects: Projects[] = [
      {
        identifier: "playground",
        title: 'PROJECTS.PLAYGROUND.TITLE',
        shortDescription: 'PROJECTS.PLAYGROUND.SHORT_DESCRIPTION',
        introduction: 'PROJECTS.PLAYGROUND.INTRODUCTION',
        images: [],
        icon: 'web'
      },
      {
        identifier: "elmucho",
        title: 'PROJECTS.EL_MUCHO.TITLE',
        shortDescription: 'PROJECTS.EL_MUCHO.SHORT_DESCRIPTION',
        introduction: 'PROJECTS.EL_MUCHO.INTRODUCTION',
        images: [AssetsConstants.EL_MUCHO_1, AssetsConstants.EL_MUCHO_2, AssetsConstants.EL_MUCHO_3, AssetsConstants.EL_MUCHO_4],
        icon: 'sports_esports'
      },
      {
        identifier: "gamejams",
        title: 'PROJECTS.GAME_JAMS.TITLE',
        shortDescription: 'PROJECTS.GAME_JAMS.SHORT_DESCRIPTION',
        introduction: 'PROJECTS.GAME_JAMS.INTRODUCTION',
        images: [AssetsConstants.GAME_JAMS_1, AssetsConstants.GAME_JAMS_2, AssetsConstants.GAME_JAMS_3],
        icon: 'videogame_asset'
      },
      {
        identifier: "diploma",
        title: 'PROJECTS.DIPLOMA.TITLE',
        shortDescription: 'PROJECTS.DIPLOMA.SHORT_DESCRIPTION',
        introduction: 'PROJECTS.DIPLOMA.INTRODUCTION',
        images: [AssetsConstants.DIPLOMA_1, AssetsConstants.DIPLOMA_2, AssetsConstants.DIPLOMA_3, AssetsConstants.DIPLOMA_4, AssetsConstants.DIPLOMA_5, AssetsConstants.DIPLOMA_6],
        icon: 'history_edu'
      }
    ]

  constructor() {
    this.route.queryParamMap.subscribe(params => {
      this.selectedKey.set(params.get('project'));
    });
  }

  isExpanded(projectKey: string): boolean {
    return this.selectedKey() === projectKey;
  }
}
