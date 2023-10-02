import { Component, OnInit } from '@angular/core';
import {JogosService} from "../../service/jogos.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cards:any[] =[]

  constructor(private service: JogosService ) {
    this.cards = service.getDados();
  }

  ngOnInit(): void {
  }

}
