import {NgModule} from "@angular/core";
import {AccordionComponent} from "@shared/components/accordion/accordion.component";

// const MODULES = [];

const COMPONENTS = [
  AccordionComponent
];

@NgModule({
  declarations: [
    // ...COMPONENTS
  ],
  imports: [
    // ...MODULES,
    ...COMPONENTS
  ],
  exports: [
    // ...MODULES,
    ...COMPONENTS
  ],
})
export class CommonModule {}
