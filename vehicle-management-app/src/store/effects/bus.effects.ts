import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BusService } from 'src/app/services/bus.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  addBus,
  addBusFailure,
  addBusSuccess,
  deleteBus,
  deleteBusFailure,
  deleteBusSuccess,
  getBusById,
  getBusByIdFailure,
  getBusByIdSuccess,
  getBuses,
  getBusesByColor,
  getBusesByColorFailure,
  getBusesByColorSuccess,
  getBusesFailure,
  getBusesSuccess,
  updateBus,
  updateBusFailure,
  updateBusSuccess,
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

  addBus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addBus),
      mergeMap(({ bus }) =>
        this.busService.addBus(bus).pipe(
          map((bus) => addBusSuccess({ bus })),
          catchError((error) => of(addBusFailure({ error })))
        )
      )
    )
  );

  updateBus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateBus),
      mergeMap(({ bus }) =>
        this.busService.updateBus(bus).pipe(
          map((bus) => updateBusSuccess({ bus })),
          catchError((error) => of(updateBusFailure({ error })))
        )
      )
    )
  );

  deleteBus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteBus),
      mergeMap(({ bus }) =>
        this.busService.deleteBus(bus).pipe(
          map((bus) => deleteBusSuccess({ bus })),
          catchError((error) => of(deleteBusFailure({ error })))
        )
      )
    )
  );

  getBusesByColor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getBusesByColor),
      mergeMap(({ color }) =>
        this.busService.getBusesByColor(color).pipe(
          map((buses) => getBusesByColorSuccess({ buses })),
          catchError((error) => of(getBusesByColorFailure({ error })))
        )
      )
    )
  );

  getBusById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getBusById),
      mergeMap(({ id }) =>
        this.busService.getBusById(id).pipe(
          map((bus) => getBusByIdSuccess({ bus })),
          catchError((error) => of(getBusByIdFailure({ error })))
        )
      )
    )
  );
}
