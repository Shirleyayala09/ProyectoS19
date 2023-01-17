import { Component, OnInit } from '@angular/core';
import { CafesService } from 'src/app/servicios/cafes.service';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.component.html',
  styleUrls: ['./pagina3.component.css']
})
export class Pagina3Component implements OnInit{
  cafes:Array<any>=[]
  constructor(private serviciocafe:CafesService){
    
  }
  ngOnInit(): void {
    this.cafes=this.serviciocafe.mostrar()
  }
}
