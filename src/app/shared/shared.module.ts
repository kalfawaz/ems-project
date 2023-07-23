import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLogoComponent } from './components/header-logo/header-logo.component';



@NgModule({
  declarations: [
    HeaderLogoComponent,
    
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderLogoComponent
  ]
})
export class SharedModule { }
