import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/pages/admin/admin.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';

const routes: Routes = [{
  path:'',
 
  component:LandingPageComponent,
  pathMatch:'full'
},
{path:"login",
component:LoginComponent,
pathMatch:'full'

},
{
  path:"register",
  pathMatch:'full',
  component:RegisterComponent
},
{
  path:"dashboard",
  pathMatch:'full',
  component:DashboardComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
