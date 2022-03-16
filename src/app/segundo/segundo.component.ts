import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.scss']
})
export class SegundoComponent implements OnInit {

  edad:number;
  nombres:Array<String>;
  constructor() {
    this.edad=18
    this.nombres=['Pepe','Antonio','Jose','Luis']    //this para acceder a la propiedad de esta misma clase
   }

  ngOnInit(): void {  //es lo que hace primero de todo
    //alert("todo listo")
  }
  aumentarEdad(){
this.edad=this.edad+1
  }
  disminuirEdad(){
    this.edad--
  }

}
