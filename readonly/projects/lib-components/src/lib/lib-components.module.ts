import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RoComponent } from './components/ro/ro.component';



@NgModule({
  declarations: [

    RoComponent,
  ],
  imports: [
  ],
  exports: [
    RoComponent

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LibComponentsModule { }

export {
  RoComponent
}
