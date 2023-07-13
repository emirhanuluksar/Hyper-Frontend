import { createReducer, on } from '@ngrx/store';
import { Bus } from '../model/bus.model';
import {
  addBusSuccess,
  deleteBusSuccess,
  getBusByIdSuccess,
  getBusesByColorSuccess,
  getBusesSuccess,
  updateBusSuccess,
} from '../actions/bus.actions';

export interface BusState {
  buses: Bus[];
}

export const initialState: BusState = {
  buses: [],
};

export const busesReducer = createReducer(
  initialState,
  on(getBusesSuccess, (state, { buses }) => ({ ...state, buses })),
  on(addBusSuccess, (state, { bus }) => ({
    ...state,
    buses: [...state.buses, bus],
  })),
  on(updateBusSuccess, (state, { bus }) => ({
    ...state,
    buses: state.buses.map((b) => (b.id === bus.id ? bus : b)),
  })),
  on(deleteBusSuccess, (state, { bus }) => ({
    ...state,
    buses: state.buses.filter((b) => b.id !== bus.id),
  })),
  on(getBusesByColorSuccess, (state, { buses }) => ({ ...state, buses })),
  on(getBusByIdSuccess, (state, { bus }) => ({
    ...state,
    buses: state.buses.map((b) => (b.id === bus.id ? bus : b)),
  }))
);
