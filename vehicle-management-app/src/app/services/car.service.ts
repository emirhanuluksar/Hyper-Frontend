import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../../store/model/car.model';
import { tap, map, endWith } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { CarRequest } from 'src/store/model/car-request.model';
import { CarResponse } from 'src/store/model/car-response.model';

@Injectable()
export class CarService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    console.log(this.apiUrl);
  }

  getCars(): Observable<Car[]> {
    const endpoint = `${this.apiUrl}car/GetAll`;
    return this.http.get<{ Cars: Car[] }>(endpoint).pipe(
      map((response) => response.Cars),
      tap((cars) => {
        console.log('Cars:', cars);
      })
    );
  }

  addCar(car: CarRequest): Observable<Car> {
    const endpoint = `${this.apiUrl}car/AddCar`;
    return this.http.post<Car>(endpoint, car).pipe(
      tap((newCar) => {
        console.log('Added car:', newCar);
      })
    );
  }

  updateCar(car: Car): Observable<Car> {
    console.log(car);
    const endpoint = `${this.apiUrl}car/UpdateCar`;
    return this.http.put<Car>(endpoint, car).pipe(
      tap((updateCar) => {
        console.log('Updated car:', updateCar);
      })
    );
  }

  deleteCar(car: Car): Observable<Car> {
    const endpoint = `${this.apiUrl}car/DeleteCar/${car.id}`;
    return this.http.delete<Car>(endpoint).pipe(
      tap((deletedCar) => {
        console.log('Deleted car:', deletedCar);
      })
    );
  }

  getCarsByColor(color: string): Observable<Car[]> {
    const endpoint = `${this.apiUrl}car/GetCarsByColor/${color}`;
    return this.http.get<Car[]>(endpoint).pipe(
      tap((cars) => {
        console.log('GetCarsByColor:', cars);
      })
    );
  }

  getCarById(id: string): Observable<Car> {
    const endpoint = `${this.apiUrl}car/GetCarById/${id}`;
    return this.http.get<Car>(endpoint).pipe(
      tap((car) => {
        console.log('Car:', car);
      })
    );
  }

  turnOnTheHeadlight(car: Car): Observable<Car> {
    const endpoint = `${this.apiUrl}car/TurnOnTheHeadLights`;
    return this.http.put<Car>(endpoint, car).pipe(
      tap((updatedCar) => {
        console.log('TurnOnHeadLights Car:', updatedCar);
      })
    );
  }

  turnOffTheHeadlight(car: Car): Observable<Car> {
    const endpoint = `${this.apiUrl}car/TurnOffTheHeadLights`;
    return this.http.put<Car>(endpoint, car).pipe(
      tap((updatedCar) => {
        console.log('TurnOnHeadLights Car:', updatedCar);
      })
    );
  }
}
