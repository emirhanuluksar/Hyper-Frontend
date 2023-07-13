import { Injectable } from '@angular/core';
import { BoatService } from 'src/app/services/boat.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  addBoat,
  addBoatFailure,
  addBoatSuccess,
  deleteBoat,
  deleteBoatFailure,
  deleteBoatSuccess,
  getBoatById,
  getBoatByIdFailure,
  getBoatByIdSuccess,
  getBoats,
  getBoatsByColor,
  getBoatsByColorFailure,
  getBoatsByColorSuccess,
  getBoatsFailure,
  getBoatsSuccess,
  updateBoat,
  updateBoatFailure,
  updateBoatSuccess,
} from '../actions/boat.actions';

@Injectable()
export class BoatsEffects {
  constructor(private actions$: Actions, private boatService: BoatService) {}

  getBoats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getBoats),
      mergeMap(() =>
        this.boatService.getBoats().pipe(
          map((boats) => getBoatsSuccess({ boats })),
          catchError((error) => of(getBoatsFailure({ error })))
        )
      )
    )
  );

  addBoat$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addBoat),
      mergeMap(({ boat }) =>
        this.boatService.addBoat(boat).pipe(
          map((boat) => addBoatSuccess({ boat })),
          catchError((error) => of(addBoatFailure({ error })))
        )
      )
    )
  );

  updateBoat$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateBoat),
      mergeMap(({ boat }) =>
        this.boatService.updateBoat(boat).pipe(
          map((boat) => updateBoatSuccess({ boat })),
          catchError((error) => of(updateBoatFailure({ error })))
        )
      )
    )
  );

  deleteBoat$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteBoat),
      mergeMap(({ boat }) =>
        this.boatService.deleteBoat(boat).pipe(
          map((boat) => deleteBoatSuccess({ boat })),
          catchError((error) => of(deleteBoatFailure({ error })))
        )
      )
    )
  );

  getBoatsByColor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getBoatsByColor),
      mergeMap(({ color }) =>
        this.boatService.getBoatsByColor(color).pipe(
          map((boats) => getBoatsByColorSuccess({ boats })),
          catchError((error) => of(getBoatsByColorFailure({ error })))
        )
      )
    )
  );

  getBoatById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getBoatById),
      mergeMap(({ id }) =>
        this.boatService.getBoatById(id).pipe(
          map((boat) => getBoatByIdSuccess({ boat })),
          catchError((error) => of(getBoatByIdFailure({ error })))
        )
      )
    )
  );
}
