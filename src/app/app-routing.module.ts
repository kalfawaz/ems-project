import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterDnsComponent } from './pages/components/after-dns/after-dns.component';
import { LogInComponent } from './pages/components/log-in/log-in.component';
import { SignUpComponent } from './pages/components/sign-up/sign-up.component';
import { HomeComponent } from './pages/components/home/home.component';

const routes: Routes = [
  {path: '', component: AfterDnsComponent},
  {path: 'Login' , component: LogInComponent},
  {path: 'SignUp', component: SignUpComponent},
  {path: 'Home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
