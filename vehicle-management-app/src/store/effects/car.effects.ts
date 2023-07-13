import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { merge, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CarService } from '../../app/services/car.service';
import {
  addCar,
  addCarFailure,
  addCarSuccess,
  deleteCar,
  deleteCarFailure,
  deleteCarSuccess,
  getCarById,
  getCarByIdFailure,
  getCarByIdSuccess,
  getCars,
  getCarsByColor,
  getCarsByColorFailure,
  getCarsByColorSuccess,
  getCarsFailure,
  getCarsSuccess,
  turnOffTheHeadlight,
  turnOffTheHeadlightFailure,
  turnOffTheHeadlightSuccess,
  turnOnTheHeadlight,
  turnOnTheHeadlightFailure,
  turnOnTheHeadlightSuccess,
  updateCar,
  updateCarFailure,
  updateCarSuccess,
} from '../../store/actions/car.actions';

@Injectable()
export class CarsEffects {
  constructor(private actions$: Actions, private carService: CarService) {}

  getCars$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCars),
      mergeMap(() =>
        this.carService.getCars().pipe(
          map((cars) => getCarsSuccess({ cars })),
          catchError((error) => of(getCarsFailure({ error })))
        )
      )
    )
  );

  addCar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addCar),
      mergeMap(({ car }) =>
        this.carService.addCar(car).pipe(
          map((car) => addCarSuccess({ car })),
          catchError((error) => of(addCarFailure({ error })))
        )
      )
    )
  );

  updateCar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCar),
      mergeMap(({ car }) =>
        this.carService.updateCar(car).pipe(
          map((car) => updateCarSuccess({ car })),
          catchError((error) => of(updateCarFailure({ error })))
        )
      )
    )
  );

  deleteCar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteCar),
      mergeMap(({ car }) =>
        this.carService.deleteCar(car).pipe(
          map((car) => deleteCarSuccess({ car })),
          catchError((error) => of(deleteCarFailure({ error })))
        )
      )
    )
  );

  getCarsByColor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCarsByColor),
      mergeMap(({ color }) =>
        this.carService.getCarsByColor(color).pipe(
          map((cars) => getCarsByColorSuccess({ cars })),
          catchError((error) => of(getCarsByColorFailure({ error })))
        )
      )
    )
  );

  getCarById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCarById),
      mergeMap(({ id }) =>
        this.carService.getCarById(id).pipe(
          map((car) => getCarByIdSuccess({ car })),
          catchError((error) => of(getCarByIdFailure({ error })))
        )
      )
    )
  );

  turnOnTheHeadlights$ = createEffect(() =>
    this.actions$.pipe(
      ofType(turnOnTheHeadlight),
      mergeMap(({ car }) =>
        this.carService.turnOnTheHeadlight(car).pipe(
          map((car) => turnOnTheHeadlightSuccess({ car })),
          catchError((error) => of(turnOnTheHeadlightFailure({ error })))
        )
      )
    )
  );

  turnOffTheHeadlights$ = createEffect(() =>
    this.actions$.pipe(
      ofType(turnOffTheHeadlight),
      mergeMap(({ car }) =>
        this.carService.turnOffTheHeadlight(car).pipe(
          map((car) => turnOffTheHeadlightSuccess({ car })),
          catchError((error) => of(turnOffTheHeadlightFailure({ error })))
        )
      )
    )
  );
}
