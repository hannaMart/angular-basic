import { Routes } from '@angular/router';
import { Home } from './MyComponents/home/home';
import { Directives } from './MyComponents/directives/directives';
import { Parent } from './MyComponents/components/parent/parent';
import { ApiWeather } from './MyComponents/api-weather/api-weather';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'directives', component: Directives },
  { path: 'components_communication', component: Parent },
  { path: 'apiWeather', component: ApiWeather },
];
