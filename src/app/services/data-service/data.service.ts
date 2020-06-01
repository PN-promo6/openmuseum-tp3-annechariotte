import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Museum } from '../../models/museum/museum';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  museums: Observable<Museum[]>;

  constructor(private httpClient: HttpClient) { }

  public fetchMuseums(): Observable<Museum[]> {
    let obsMuseums: Observable<Museum[]> = this.httpClient.get<Museum[]>(environment.apiRoute + "/museums");
    return obsMuseums;
  }

  public fetchMuseumById(id: string): Observable<Museum> {
    let obsMuseumById: Observable<Museum> = this.httpClient.get<Museum>(environment.apiRoute + "/museums/" + id);
    return obsMuseumById;
  }
}
