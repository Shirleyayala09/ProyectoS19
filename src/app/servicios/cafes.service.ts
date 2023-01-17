import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CafesService {
  cafes= [
    {
      id:0,
      img:"https://www.recetasderechupete.com/wp-content/uploads/2021/03/Capuchino-perfecto.jpg",
      nombre:"Capuccino",
      ingredientes:"150 ml de bebida, compuesta por un espresso (30 ml) + partes iguales de leche y crema de leche.",
      precio:10
    },
    {
      id:1,
      nombre:"Expresso",
      ingredientes:" 7 gramos fina y prensada de café molido.",
      precio:7
    },
    {
      id:2,
      nombre:"MOKA",
      ingredientes:"7 gramos de cafe molido, cacao en polvo,leche,Sirope de chocolate (con leche o negro, según el gusto).",
      precio:12
    },
    {
      id:3,
      nombre:"Pisracho Mocha Blanco Helado",
      ingredientes:"salsa de pistacho, espresso, leche vaporizada de almendras, con mocha de chocolate blanco, cubierto de crema batida",
      precio:14.5

    },
    {
      id:5,
      nombre:"Vainilla Cold Brew",
      ingredientes:"Café Filtrado, Hielo, Jarabe de Vainilla, Heavy Crema, Leche.",
      precio:11

    },
    {id:6,
      nombre:"Vainilla Cold Brew",
      ingredientes:"2 Cucharadas Manjar De Leche, 7 gramos de cafe, 1/2 Taza Crema De Leche.",
      precio:14.5
    }
    
  ]
  constructor() {
   }

  mostrar() {
    return this.cafes;
  }
}
