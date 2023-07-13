import { createReducer, on } from '@ngrx/store';
import { Car } from '../model/car.model';
import {
  addCarSuccess,
  deleteCarSuccess,
  getCarByIdSuccess,
  getCarsByColorSuccess,
  getCarsSuccess,
  turnOffTheHeadlight,
  turnOffTheHeadlightSuccess,
  turnOnTheHeadlight,
  turnOnTheHeadlightSuccess,
  updateCarSuccess,
} from '../actions/car.actions';

export interface CarState {
  cars: Car[];
}

export const initialState: CarState = {
  cars: [],
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
