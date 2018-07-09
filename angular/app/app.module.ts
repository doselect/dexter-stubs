import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { AppComponent, EqualPipe } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Http, HttpModule, RequestOptions, XHRBackend } from '@angular/http';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, JsonpModule, HttpModule, NgbModule.forRoot()], 
  declarations: [ AppComponent ],
  providers: [],
  entryComponents: [],
  bootstrap:    [ AppComponent ],
})

export class AppModule { }
