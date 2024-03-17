import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { Surfboard } from '../Interfaces/surfboard';

@Injectable({
  providedIn: 'root',
})
export class SurfboardService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Surfboard/';

  constructor(private http: HttpClient) {}

  getSurfboards(): Observable<Surfboard[]> {
    return this.http.get<Surfboard[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getSurfboard(id: number): Observable<Surfboard> {
    return this.http.get<Surfboard>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  deleteSurfboard(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  addSurfboard(surfboard: Surfboard): Observable<Surfboard> {
    return this.http.post<Surfboard>(
      `${this.myAppUrl}${this.myApiUrl}`,
      surfboard
    );
  }
}
