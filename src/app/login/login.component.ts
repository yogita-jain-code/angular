import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   message;
  constructor(private service : AuthService,
               private router : Router)
   { }

  ngOnInit() {
  }

  SignIn(loginForm)
  {
    let loginCredential = loginForm.form.value;
    console.log(loginCredential);

    let userValid = this.service.CheckCredentials(loginCredential);
    if(userValid)
    {
      console.log("USER IS VALID");
      this.router.navigate(['/home']);
    }
    else
    {
      this.message = "USER / PASSWORD IS INVALID";
    }
  }

}
