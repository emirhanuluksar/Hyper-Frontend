import { createReducer, on } from '@ngrx/store';
import { Car } from '../model/car.model';
import { getCarsSuccess } from '../actions/car.actions';

export interface CarState {
  cars: Car[];
}

export const initialState: CarState = {
  cars: [],
};

export const carsReducer = createReducer(
  initialState,
  on(getCarsSuccess, (state, { cars }) => ({ ...state, cars }))
);
