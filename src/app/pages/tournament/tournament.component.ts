import { Component } from '@angular/core';
import {ImgArticleComponent} from "@shared/img-article/img-article.component";

@Component({
  selector: 'ds-tournament',
  standalone: true,
  imports: [ImgArticleComponent],
  templateUrl: './tournament.component.html',
  styleUrl: './tournament.component.scss'
})
export class TournamentComponent {

}
