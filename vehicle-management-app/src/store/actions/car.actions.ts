import { createAction, props } from '@ngrx/store';
import { Car } from '../model/car.model';

export const getCars = createAction('[Cars] Get Cars');

export const getCarsSuccess = createAction(
  '[Cars] Get Cars Success',
  props<{ cars: Car[] }>()
);

export const getCarsFailure = createAction(
  '[Cars] Get Cars Failure',
  props<{ error: any }>()
);
