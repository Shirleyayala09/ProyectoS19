import { Component, OnInit} from '@angular/core';
import { PresupuestoService } from 'src/app/servicios2/presupuesto.service';

@Component({
  selector: 'app-ingresargasto',
  templateUrl: './ingresargasto.component.html',
  styleUrls: ['./ingresargasto.component.css']
})
export class IngresargastoComponent implements OnInit {
  nombreGasto: string;
  cantidad: number;
  formularioIncorrecto: boolean;
  textIncorrecto: string;

  constructor(private _presupuestoService: PresupuestoService) { 
    this.nombreGasto = '';
    this.cantidad = 0;
    this.formularioIncorrecto = false;
    this.textIncorrecto = '';
  }

  ngOnInit(): void {
  }

  agregarGasto() {

    if(this.cantidad > this._presupuestoService.restante) {
      this.formularioIncorrecto = true;
      this.textIncorrecto = 'Cantidad ingresada es mayor al restante';
      return;
    }


    if(this.nombreGasto === '' || this.cantidad <= 0){
      this.formularioIncorrecto = true;
      this.textIncorrecto = 'Nombre gasto o cantidad incorrecta';
    } else {

      // Creamos el objeto
      const GASTO = {
        nombre: this.nombreGasto,
        cantidad: this.cantidad
      }

      //  Enviamos el objeto a los suscriptores via subjet
      this._presupuestoService.agregarGasto(GASTO);

      // Reseteamos formulario
      this.formularioIncorrecto = false;
      this.nombreGasto = '';
      this.cantidad = 0;
    }
  }
}
