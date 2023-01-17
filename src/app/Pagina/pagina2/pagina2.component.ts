import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/servicios2/presupuesto.service';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component  implements OnInit {
  constructor(private _presupuestoService: PresupuestoService, 
              private router: Router) { }

ngOnInit(): void {
if(this._presupuestoService.presupuesto === 0){
this.router.navigate(['/paginap']);
}
}

}
