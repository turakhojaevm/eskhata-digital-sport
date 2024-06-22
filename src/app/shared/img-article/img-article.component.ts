import {Component, input} from '@angular/core';

@Component({
  selector: 'ds-img-article',
  standalone: true,
  imports: [],
  templateUrl: './img-article.component.html',
  styleUrl: './img-article.component.scss'
})
export class ImgArticleComponent {

  articleImageUrl = input.required<string>();

}
