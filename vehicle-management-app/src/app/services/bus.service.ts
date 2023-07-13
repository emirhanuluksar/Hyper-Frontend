import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bus } from 'src/store/model/bus.model';
import { tap, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class BusService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    console.log(this.apiUrl);
  }

  getBuses(): Observable<Bus[]> {
    const endpoint = `${this.apiUrl}bus/GetAll`;
    return this.http.get<{ Buses: Bus[] }>(endpoint).pipe(
      map((response) => response.Buses),
      tap((buses) => {
        console.log('Buses:', buses);
      })
    );
  }
}
