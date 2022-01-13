import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ArrayService {

  constructor() { }

  Array(){
    let miArray=[];
    for(let i=1; i<=100; i++){
        miArray.push(i);
      
    }

    return miArray
  }
   

    

  
}
