import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Games } from '../Interfaces/games';


@Injectable({
  providedIn: 'root'
})
export class GameListService {

  private myAppUrl: string;
  private myApiUrl: string;
  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = "game";
  }
  getListGames():Observable<Games[]>{
    return this.http.get<Games[]>(`${this.myAppUrl}${this.myApiUrl}`)
  }
}
