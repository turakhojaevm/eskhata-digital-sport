import { Component } from '@angular/core';
import {CommonModule} from "@shared/components/common.module";

@Component({
  selector: 'ds-results',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {
  test = [{name: 'name', description: 'description'}]
}
