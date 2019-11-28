import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private service : DataService,
             private router : Router,
             private route : ActivatedRoute) 
             { }

  ngOnInit()
   {
    this.route.paramMap.subscribe((result)=>{
     let No = result.get("No");

    let observableResult = this.service.Delete(No);
    observableResult.subscribe((deleteRecord)=>{
      console.log(deleteRecord);
      this.router.navigate(['/home']);
    })
    })
  }

}
