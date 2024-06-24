import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'ds-tournament',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './tournament.component.html',
  styleUrl: './tournament.component.scss'
})
export class TournamentComponent {

}
