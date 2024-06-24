import {Component, input} from '@angular/core';
import {EXPAND_DETAIL} from "@shared/components/animations";

@Component({
  selector: 'ds-accordion',
  standalone: true,
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  animations: [EXPAND_DETAIL],
})
export class AccordionComponent {
  dataSource = input.required<IAccordion[]>();
}
export interface IAccordion {
  name: string;
  description: string;
  isActive?: boolean;
}
