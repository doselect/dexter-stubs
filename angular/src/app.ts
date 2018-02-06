import {NgModule, Injectable, ngAfterViewInit, Component, Compiler, ViewContainerRef, ViewChild, Input, ComponentRef, ComponentFactory, ComponentFactoryResolver, ChangeDetectorRef} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'my-app',
  template: `
  <h2>Hello from DoSelect!</h2>`,
  providers: []
})
export class App implements ngAfterViewInit{
  name:any;
  
  constructor() {}
       
  ngAfterViewInit(){
  }
}

@NgModule({
  imports: [ BrowserModule ],
  providers: []
  declarations: [ App ],
  bootstrap: [ App ]
})
export class AppModule {}