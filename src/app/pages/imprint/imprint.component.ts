import { Component } from '@angular/core';
import {MatCard} from '@angular/material/card';
import {TranslatePipe} from '@ngx-translate/core';
import {MatIcon} from '@angular/material/icon';
import {SharedFunctions} from '../../shared/SharedFunctions';

@Component({
  selector: 'app-imprint',
  imports: [
    MatCard,
    TranslatePipe,
    MatIcon
  ],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {

  protected readonly SharedFunctions = SharedFunctions;
}
