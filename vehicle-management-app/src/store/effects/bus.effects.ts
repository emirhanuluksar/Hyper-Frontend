import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BusService } from 'src/app/services/bus.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  getBuses,
  getBusesFailure,
  getBusesSuccess,
} from '../../store/actions/bus.actions';
import { of } from 'rxjs';

@Injectable()
export class BusesEffects {
  constructor(private actions$: Actions, private busService: BusService) {}

  getBuses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getBuses),
      mergeMap(() =>
        this.busService.getBuses().pipe(
          map((buses) => getBusesSuccess({ buses })),
          catchError((error) => of(getBusesFailure({ error })))
        )
      )
    )
  );
}
