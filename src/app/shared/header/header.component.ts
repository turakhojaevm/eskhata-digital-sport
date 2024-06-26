import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {BreadcrumbComponent} from "@shared/breadcrumb/breadcrumb.component";

@Component({
  selector: 'ds-header',
  standalone: true,
  imports: [
    RouterLink,
    BreadcrumbComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
