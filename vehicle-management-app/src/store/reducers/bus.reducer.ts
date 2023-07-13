import { createReducer, on } from '@ngrx/store';
import { Bus } from '../model/bus.model';
import { getBusesSuccess } from '../actions/bus.actions';

export interface BusState {
  buses: Bus[];
}

export const initialState: BusState = {
  buses: [],
};

export const busesReducer = createReducer(
  initialState,
  on(getBusesSuccess, (state, { buses }) => ({ ...state, buses }))
);
