import { Component } from '@angular/core';
import { Games } from 'src/app/Interfaces/games';
import { GameListService } from 'src/app/services/game-list.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent {
  listGames: Games[] = []
constructor(private _gameServices:GameListService){

}
ngOnInit():void{
  this.getListGames();
}
getListGames(){
  this._gameServices.getListGames().subscribe((data:Games[])=>{
    this.listGames = data;
    console.log(this.listGames)
  })
}
}
