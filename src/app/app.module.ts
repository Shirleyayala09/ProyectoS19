import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pagina2Component } from './Pagina/pagina2/pagina2.component';
import { Pagina3Component } from './Pagina/pagina3/pagina3.component';
import { FormsModule } from '@angular/forms';
import { PaginapComponent } from './Pagina/paginap/paginap.component';
import { ListargastoComponent } from './Pagina/pagina2/listargasto/listargasto.component';
import { IngresargastoComponent } from './Pagina/pagina2/ingresargasto/ingresargasto.component';

@NgModule({
  declarations: [
    AppComponent,
    Pagina2Component,
    Pagina3Component,
    PaginapComponent,
    ListargastoComponent,
    IngresargastoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
