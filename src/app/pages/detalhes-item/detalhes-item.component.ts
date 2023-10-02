import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {JogosService} from "../../service/jogos.service";


@Component({
    selector: 'app-detalhes-item',
    templateUrl: './detalhes-item.component.html',
    styleUrls: ['./detalhes-item.component.css']
})
export class DetalhesItemComponent implements OnInit {

        constructor(private route: ActivatedRoute,
                    private service: JogosService) {
    }

    ngOnInit() {
        // Obtém o parâmetro da URL com o nome 'id'
        const id = this.route.snapshot.paramMap.get('id');

        console.log(id);
        if (id != null) {
            this.idCard = id;
            var jogo = this.service.getRegistroPorId(id);

            console.log(jogo);
            this.gameName = jogo.gameName;
            this.gameCover = jogo.gameCover;
            this.gameLabel = jogo.gameLabel;
            this.gameType = jogo.gameType;
            this.gamePrice = jogo.gamePrice;
        }
    }


    idCard: String = '2'
    gameName: String = 'BATTLEFIELD 4'
    gameCover: String = 'assets/bt-4.jpg'
    gameLabel: String = 'EXCLUSIVE'
    gameType: String = 'DISC | PS5'
    gamePrice: String = 'R$ 269,99'


    protected readonly window = window;
}
