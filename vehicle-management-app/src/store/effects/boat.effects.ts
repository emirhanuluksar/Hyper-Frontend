import { Injectable } from '@angular/core';
import { BoatService } from 'src/app/services/boat.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  getBoats,
  getBoatsFailure,
  getBoatsSuccess,
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
}
