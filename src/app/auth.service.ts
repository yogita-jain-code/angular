import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate
 {
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) 
  {
   if(this.IsLoggegIn())
   {
     return true;
   }
   else
   {
    console.log("User is not logged in!!!");
    this.router.navigate(['/login']);
   }
  }

  constructor(private router : Router) { }

  IsLoggegIn()
  {
    if(window.sessionStorage.getItem("isActive") != null &&
       window.sessionStorage.getItem("isActive")== "1")
       {
         console.log("USER IS LOGGED IN!!!");
         return true;
       }

       else
       {
         return false;
       }
  }

  CheckCredentials(credential)
  {
     
    if(credential.Uname=="abc" && credential.Password=="abc@123")
    {
      window.sessionStorage.setItem("isActive","1");
      return true;

    }
    else
    {
      return false;
    }


  }
}
