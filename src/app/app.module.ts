import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { CoreModule } from './core/core.module';
import { registerLocaleData } from '@angular/common';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { LoginModule } from './login/login.module';

registerLocaleData(localeFr);


@NgModule({
  declarations: [
    AppComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    HttpClientModule,
    LoginModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR' }, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
