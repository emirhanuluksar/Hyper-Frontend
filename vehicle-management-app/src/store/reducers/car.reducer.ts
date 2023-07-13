import { createReducer, on } from '@ngrx/store';
import { Car } from '../model/car.model';
import {
  addCarSuccess,
  deleteCarSuccess,
  getCarByIdSuccess,
  getCarsByColorSuccess,
  getCarsSuccess,
  turnOffTheHeadlightSuccess,
  turnOnTheHeadlightSuccess,
  updateCarSuccess,
} from '../actions/car.actions';

export interface CarState {
  cars: Car[];
  addCarSuccess: boolean;
}

export const initialState: CarState = {
  cars: [],
  addCarSuccess: false,
};

export const carsReducer = createReducer(
  initialState,
  on(getCarsSuccess, (state, { cars }) => ({ ...state, cars })),
  on(addCarSuccess, (state, { car }) => ({
    ...state,
    cars: [...state.cars, car],
  })),
  on(updateCarSuccess, (state, { car }) => ({
    ...state,
    cars: state.cars.map((c) => (c.id === car.id ? car : c)),
  })),
  on(deleteCarSuccess, (state, { car }) => ({
    ...state,
    cars: state.cars.filter((c) => c.id !== car.id),
  })),
  on(getCarsByColorSuccess, (state, { cars }) => ({ ...state, cars })),
  on(getCarByIdSuccess, (state, { car }) => ({
    ...state,
    cars: state.cars.map((c) => (c.id === car.id ? car : c)),
  })),
  on(turnOnTheHeadlightSuccess, (state, { car }) => ({
    ...state,
    cars: state.cars.map((c) => (c.id === car.id ? car : c)),
  })),
  on(turnOffTheHeadlightSuccess, (state, { car }) => ({
    ...state,
    cars: state.cars.map((c) => (c.id === car.id ? car : c)),
  }))
);
