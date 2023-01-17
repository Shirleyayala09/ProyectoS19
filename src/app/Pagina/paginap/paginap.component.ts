import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/servicios2/presupuesto.service';

@Component({
  selector: 'app-paginap',
  templateUrl: './paginap.component.html',
  styleUrls: ['./paginap.component.css']
})
export class PaginapComponent implements OnInit{
  cantidad: number;
  cantidadIncorrecta: boolean;

  constructor(private _presupuestoService: PresupuestoService, 
              private router: Router) { 
    this.cantidad = 0;
    this.cantidadIncorrecta = false;
  }

  ngOnInit(): void {
  }

  agregar() {
    if(this.cantidad > 0) {
      this.cantidadIncorrecta = false;
      this._presupuestoService.presupuesto = this.cantidad;
      this._presupuestoService.restante = this.cantidad;
      this.router.navigate(['/pagina2'])
    } else {
      this.cantidadIncorrecta = true;
    }
  }
}
