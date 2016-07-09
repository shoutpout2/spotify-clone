import { provideRouter, RouterConfig } from '@angular/router';

import { AboutComponent }     from './Components/about/about.component';
import { SearchComponent }    from './Components/search/search.component';

export const routes: RouterConfig = [
  { path: 'about',  
    component: AboutComponent },
  { path: '', 
    component: SearchComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];