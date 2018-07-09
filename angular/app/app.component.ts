import { Component,Input, Injectable, ApplicationRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/filter';
import {Pipe, PipeTransform} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: 'templates/app.html'
})

export class AppComponent implements ngAfterViewInit {
    name:any;
      
    constructor() {
        
    }
    
        
    ngAfterViewInit(){
        
    }
}



