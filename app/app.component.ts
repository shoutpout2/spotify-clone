import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { NavbarTopComponent } from './Components/navbar-top/navbar-top.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
       
    directives: [ROUTER_DIRECTIVES, NavbarTopComponent]
})
export class AppComponent { }
