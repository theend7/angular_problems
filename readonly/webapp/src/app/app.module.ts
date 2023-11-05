import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LibComponentsModule  } from 'lib-components';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
