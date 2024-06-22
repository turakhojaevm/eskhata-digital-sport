import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "@shared/header/header.component";
import {FooterComponent} from "@shared/footer/footer.component";
import {ImgArticleComponent} from "@shared/img-article/img-article.component";
import {MenuComponent} from "@shared/menu/menu.component";

@Component({
  selector: 'ds-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ImgArticleComponent,
    MenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eskhata-digital-sport';
}
