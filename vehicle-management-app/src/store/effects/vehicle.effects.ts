import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { VehicleService } from 'src/app/services/vehicle.service';
import {
  getVehicles,
  getVehiclesSuccess,
  getVehiclesFailure,
} from '../actions/vehicle.actions';

@Injectable()
export class VehicleEffects {
  constructor(
    private actions$: Actions,
    private vehicleService: VehicleService
  ) {}

  getVehicles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getVehicles),
      mergeMap(() =>
        this.vehicleService.getVehicles().pipe(
          map((vehicles) => getVehiclesSuccess({ vehicles })),
          catchError((error) => of(getVehiclesFailure({ error })))
        )
      )
    )
  );
}
