import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { DoctorDashboardComponent } from './pages/doctor/doctor-dashboard/doctor-dashboard.component';
const routes: Routes = [
  {
    path: 'signup',
    component: SignUpComponent,
    pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch: 'full'
  },
  {
    path:'welcome',
    component:WelcomeComponent,
    pathMatch: 'full'
  },
  {
    path:'admin',
    component:AdminDashboardComponent,
    pathMatch:'full'
  },
  {
    path:'doctor',
    component:DoctorDashboardComponent,
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
