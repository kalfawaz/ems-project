import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLogoComponent } from './components/header-logo/header-logo.component';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';



@NgModule({
  declarations: [
    HeaderLogoComponent,
    SideBarComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderLogoComponent,
    SideBarComponent
  ]
})
export class SharedModule { }
