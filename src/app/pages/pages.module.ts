import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AfterDnsComponent } from './components/after-dns/after-dns.component';



@NgModule({
  declarations: [
    AfterDnsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    AfterDnsComponent
  ]
})
export class PagesModule { }
