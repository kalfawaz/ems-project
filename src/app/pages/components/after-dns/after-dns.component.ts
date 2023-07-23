import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-after-dns',
  templateUrl: './after-dns.component.html',
  styleUrls: ['./after-dns.component.css']
})
export class AfterDnsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  navigateToSignUp(){
    this.route.navigate(['/SignUp'])
  }
  navigateToLogin(){
    this.route.navigate(['/Login'])
  }

}
