import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SecondComponent } from './components/second/second.component';

export const routes: Routes = [
    {path:'sender',component:HomeComponent},
    {path:'reciver',component:SecondComponent}

];
