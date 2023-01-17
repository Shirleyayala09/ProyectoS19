import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina2Component } from './Pagina/pagina2/pagina2.component';
import { Pagina3Component } from './Pagina/pagina3/pagina3.component';
import { PaginapComponent } from './Pagina/paginap/paginap.component';

const routes: Routes = [
{path: "paginap", component:PaginapComponent},
{path:"pagina2", component: Pagina2Component},
{path:"pagina3", component: Pagina3Component},
{path: '**', redirectTo: '/paginap', pathMatch: 'full'  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
