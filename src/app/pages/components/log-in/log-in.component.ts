import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  showPassword = false
  emailRegex = /^\S+@\S+\.\S+$/;
  passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
  loginForm: any =  FormGroup

  constructor(private fb: FormBuilder) {
  }
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null,[Validators.required,Validators.email,Validators.pattern(this.emailRegex)]],
      password: [null,[Validators.required,Validators.pattern(this.passwordRegex)]]
    });
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
  }

  onSubmit(){
    console.log(this.loginForm.value)
  }

}
