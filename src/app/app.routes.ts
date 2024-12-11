import { Routes } from '@angular/router';
import { HomeComponent } from './features/landing/components/home/home.component';
import { SearchComponent } from './features/search/components/search.component';
import { NotfoundComponent } from './shared/errors/notfound/notfound.component';

export const routes: Routes = [
    { path: 'search', component: SearchComponent },  
    { path: 'home', component: HomeComponent },
    { path: '',   redirectTo: '/search', pathMatch: 'full' },
    { path: '**', component: NotfoundComponent }, 
];
