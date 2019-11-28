import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  emp : any;
  constructor(private service : DataService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit() 
  {
    this.route.paramMap.subscribe((result)=>{
    let No =  result.get("No");
     console.log(No);

     let observableResult = this.service.SelectByNo(No);
     observableResult.subscribe((records)=>{
       console.log(records[0]);
       this.emp = records[0];
     })
    })
  }

  OnUpdate()
  {
   let observableResult = this.service.Update(this.emp);
   observableResult.subscribe((result)=>{
     console.log(result);
     this.router.navigate(['/home']);
   })
  }

  OnCancel()
  {
    this.router.navigate(['/home']);
  }

}
