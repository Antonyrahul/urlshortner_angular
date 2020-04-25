import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'
import { RedirectComponent } from './redirect/redirect.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import { HistoryComponent } from './history/history.component'


const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  {
    path :"login",
    component:LoginComponent
  },
  {
    path :"register",
    component:RegisterComponent
  },
  {
    path:':id',
    component:RedirectComponent
  },
  {path:'history/:id',
component:HistoryComponent
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
