import { Routes } from '@angular/router';
import { HomeComponent } from './features/dashboard/home/home.component';
import { LoginComponent } from './core/auth/login/login.component';
import { NotfoundComponent } from './shared/errors/notfound/notfound.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },  
    { path: 'home', component: HomeComponent },
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: NotfoundComponent }, 
];
