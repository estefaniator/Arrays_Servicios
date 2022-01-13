import { Component } from '@angular/core';
import { ArrayService } from './array.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ArrayServicios';
  
  constructor(private miServicio:ArrayService){
    this.array=this.miServicio.Array();
    console.log(this.miServicio.Array());

    
  }

  array: number[] =[];
  
  Servicio(){
    this.miServicio.Array();
  }

  ngOnInit() {
    this.Servicio();
  }
}
