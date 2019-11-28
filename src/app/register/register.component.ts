import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emp =
  {
    "No" : "",
    "Name" : "",
    "Age" : ""
  }
  constructor(private service : DataService,
    private router : Router) { }

  ngOnInit() {
  }

  OnRegister()
  {
   let observableResult =  this.service.Insert(this.emp);
   observableResult.subscribe((result)=>{
     console.log(result);
     this.router.navigate(['/home']);
   })
  }

}
