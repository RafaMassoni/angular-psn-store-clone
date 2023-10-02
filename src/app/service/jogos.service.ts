import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JogosService {


  private jogos: any[] = [
    {
      idCard: "1",
      gameCover: "assets/bt-1.jpg",
      gameLabel: "DIGITAL",
      gameType: "DIGITAL | PS4",
      gamePrice: "R$ 129,99"
    },

    {
      idCard:"2",
      gameCover:"assets/bt-4.jpg",
      gameLabel:"EXCLUSIVE",
      gameType:"DISC | PS5",
      gamePrice:"R$ 269,99"
    },
    {
      idCard:"3",
      gameCover:"assets/ac-cover.jpg",
      gameLabel:"BEST OF YEAR",
      gameType:"DIGITAL | PS5",
      gamePrice:"R$ 369,99",
    },
    {
      idCard:"4",
      gameCover:"assets/bt-hardline.jpg",
      gameLabel:"NEW",
      gameType:"DIGITAL | PS3 PS4 PS5",
      gamePrice:"R$ 369,99",
    },
  ];

  constructor() { }


  getDados() {
    return this.jogos;
  }

  getRegistroPorId(id:String) {
    return this.jogos.find(objeto => objeto.idCard === id)
  }

}
