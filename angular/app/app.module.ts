import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from "@angular/router";

import { Http, HttpModule, RequestOptions, XHRBackend } from '@angular/http';

@NgModule({
  imports: [BrowserModule,
            FormsModule,
            ReactiveFormsModule,
            JsonpModule,
            HttpModule,
            NgbModule.forRoot(),
            /*
              RouterModule.forRoot(appRoutes,{ useHash: true })
              add this if you are using router,
              param: appRoutes should be an array of objects
              NOTE: using base-href will not be required
            */
          ],
  declarations: [ AppComponent ],
  providers: [],
  entryComponents: [],
  bootstrap:    [ AppComponent ],
})

export class AppModule { }
