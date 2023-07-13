import { createAction, props } from '@ngrx/store';
import { Bus } from '../model/bus.model';

export const getBuses = createAction('[Buses] Get Buses');

export const getBusesSuccess = createAction(
  '[Buses] Get Buses Success',
  props<{ buses: Bus[] }>()
);

export const getBusesFailure = createAction(
  '[Buses] Get Buses Failure',
  props<{ error: any }>()
);
