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
  addBus(bus: Bus): Observable<Bus> {
    const endpoint = `${this.apiUrl}bus/AddBus`;
    return this.http.post<Bus>(endpoint, bus).pipe(
      tap((newBus) => {
        console.log('Added bus:', newBus);
      })
    );
  }

  updateBus(bus: Bus): Observable<Bus> {
    const endpoint = `${this.apiUrl}bus/UpdateBus`;
    return this.http.put<Bus>(endpoint, bus).pipe(
      tap((updatedBus) => {
        console.log('Updated bus:', updatedBus);
      })
    );
  }

  deleteBus(bus: Bus): Observable<Bus> {
    const endpoint = `${this.apiUrl}bus/DeleteBus/${bus.id}`;
    return this.http.delete<Bus>(endpoint).pipe(
      tap((deletedBus) => {
        console.log('Deleted bus:', deletedBus);
      })
    );
  }

  getBusesByColor(color: string): Observable<Bus[]> {
    const endpoint = `${this.apiUrl}bus/GetBusesByColor/${color}`;
    return this.http.get<Bus[]>(endpoint).pipe(
      tap((buses) => {
        console.log('GetBusesByColor:', buses);
      })
    );
  }

  getBusById(id: string): Observable<Bus> {
    const endpoint = `${this.apiUrl}bus/GetBusById/${id}`;
    return this.http.get<Bus>(endpoint).pipe(
      tap((bus) => {
        console.log('Bus:', bus);
      })
    );
  }
}
