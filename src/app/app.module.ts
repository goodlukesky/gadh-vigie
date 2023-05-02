import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ZendeskOutlookComponent } from './zendesk-outlook/zendesk-outlook.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ZendeskOutlookComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
