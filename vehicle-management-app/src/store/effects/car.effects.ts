import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CarService } from '../../app/services/car.service';
import {
  getCars,
  getCarsFailure,
  getCarsSuccess,
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
}
