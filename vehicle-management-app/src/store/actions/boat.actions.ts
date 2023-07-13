import { createAction, props } from '@ngrx/store';
import { Boat } from '../model/boat.model';

export const getBoats = createAction('[Boats] Get Boats');

export const getBoatsSuccess = createAction(
  '[Boats] Get Boats Success',
  props<{ boats: Boat[] }>()
);

export const getBoatsFailure = createAction(
  '[Boats] Get Boats Failure',
  props<{ error: any }>()
);
