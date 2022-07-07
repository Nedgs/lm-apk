import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { CoreModule } from './core/core.module';
import { registerLocaleData } from '@angular/common';
import { DatePipe } from '@angular/common'




@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR' }, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
