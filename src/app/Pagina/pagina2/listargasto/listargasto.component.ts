import { Component , OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/servicios2/presupuesto.service';

@Component({
  selector: 'app-listargasto',
  templateUrl: './listargasto.component.html',
  styleUrls: ['./listargasto.component.css']
})
export class ListargastoComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  presupuesto: number;
  restante: number;
  listGastos: any[] = [];

  constructor(private _presupuestoService: PresupuestoService) {
    this.presupuesto = 0;
    this.restante = 0;
    this.subscription = this._presupuestoService.getGastos().subscribe(data => {
      this.restante = this.restante - data.cantidad;
      this.listGastos.push(data);
    })
   }

  ngOnInit(): void {
    this.presupuesto = this._presupuestoService.presupuesto;
    this.restante = this._presupuestoService.restante;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  alicarColorRestante() {

    if(this.presupuesto / 4 > this.restante){
      return 'alert alert-danger';
    } else if(this.presupuesto / 2 > this.restante){
      return 'alert alert-warning';
    }else {
      return 'alert alert-secondary';
    }
  }

}
