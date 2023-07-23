import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLogoComponent } from './components/header-logo/header-logo.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderLogoComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderLogoComponent
  ]
})
export class SharedModule { }
