import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient)
   { }

   Select()
   {
     return this.http.get("http://localhost:7878/emps");
   }

   SelectByNo(No)
   {
    return this.http.get("http://localhost:7878/emps/"+No);
   }

   Insert(empObj)
   {
    return this.http.post("http://localhost:7878/emps",empObj);
   }

   Update(empObj)
   {
    return this.http.put("http://localhost:7878/emps/"+empObj.No,empObj);
   }

   Delete(No)
   {
    return this.http.delete("http://localhost:7878/emps/"+No);
   }
}
