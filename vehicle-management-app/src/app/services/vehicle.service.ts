import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Vehicle } from 'src/store/model/vehicle.model';

@Injectable()
export class VehicleService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    console.log(this.apiUrl);
  }

  getVehicles(): Observable<Vehicle[]> {
    const endpoint = `${this.apiUrl}vehicle/GetAllVehicles`;
    return this.http.get<{ Vehicles: Vehicle[] }>(endpoint).pipe(
      map((response) => response.Vehicles),
      tap((vehicles) => {
        console.log('Vehicles:', vehicles);
      })
    );
  }
}
