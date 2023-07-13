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

export const addCar = createAction('[Car] Add Car', props<{ car: Car }>());
export const addCarSuccess = createAction(
  '[Car] Add Car Success',
  props<{ car: Car }>()
);
export const addCarFailure = createAction(
  '[Car] Add Car Failure',
  props<{ error: any }>()
);

export const updateCar = createAction(
  '[Car] Update Car',
  props<{ car: Car }>()
);
export const updateCarSuccess = createAction(
  '[Car] Update Car Success',
  props<{ car: Car }>()
);
export const updateCarFailure = createAction(
  '[Car] Update Car Failure',
  props<{ error: any }>()
);

export const deleteCar = createAction(
  '[Car] Delete Car',
  props<{ car: Car }>()
);
export const deleteCarSuccess = createAction(
  '[Car] Delete Car Success',
  props<{ car: Car }>()
);
export const deleteCarFailure = createAction(
  '[Car] Delete Car Failure',
  props<{ error: any }>()
);

export const getCarsByColor = createAction(
  '[Car] Get Cars By Color',
  props<{ color: string }>()
);

export const getCarsByColorSuccess = createAction(
  '[Car] Get Cars By Color Success',
  props<{ cars: Car[] }>()
);

export const getCarsByColorFailure = createAction(
  '[Car] Get Cars By Color Failure',
  props<{ error: any }>()
);
export const getCarById = createAction(
  '[Car] Get Car By Id',
  props<{ id: string }>()
);
export const getCarByIdSuccess = createAction(
  '[Car] Get Car By Id Success',
  props<{ car: Car }>()
);
export const getCarByIdFailure = createAction(
  '[Car] Get Car By Id Failure',
  props<{ error: any }>()
);

export const turnOnTheHeadlight = createAction(
  '[Car] Turn On The Headlight',
  props<{ car: Car }>()
);
export const turnOnTheHeadlightSuccess = createAction(
  '[Car] Turn On The Headlight Success',
  props<{ car: Car }>()
);
export const turnOnTheHeadlightFailure = createAction(
  '[Car] Turn On The Headlight Failure',
  props<{ error: any }>()
);

export const turnOffTheHeadlight = createAction(
  '[Car] Turn Off The Headlight',
  props<{ car: Car }>()
);
export const turnOffTheHeadlightSuccess = createAction(
  '[Car] Turn Off The Headlight Success',
  props<{ car: Car }>()
);

export const turnOffTheHeadlightFailure = createAction(
  '[Car] Turn Off The Headlight Failure',
  props<{ error: any }>()
);
