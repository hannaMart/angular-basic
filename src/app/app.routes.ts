import { Routes } from '@angular/router';
import { Home } from './MyComponents/home/home';
import { Directories } from './MyComponents/directives/directories';


export const routes: Routes = [
    {path:'', component:Home},
    {path:'home', component:Home},
    {path:'directives', component:Directories},
];
