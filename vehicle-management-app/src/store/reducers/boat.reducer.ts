import { createReducer, on } from '@ngrx/store';
import { Boat } from '../model/boat.model';
import {
  addBoatSuccess,
  deleteBoatSuccess,
  getBoatByIdSuccess,
  getBoatsByColorSuccess,
  getBoatsSuccess,
  updateBoatSuccess,
} from '../actions/boat.actions';

export interface BoatState {
  boats: Boat[];
}

export const initialState: BoatState = {
  boats: [],
};

export const boatsReducer = createReducer(
  initialState,
  on(getBoatsSuccess, (state, { boats }) => ({ ...state, boats })),
  on(addBoatSuccess, (state, { boat }) => ({
    ...state,
    boats: [...state.boats, boat],
  })),
  on(updateBoatSuccess, (state, { boat }) => ({
    ...state,
    boats: state.boats.map((b) => (b.id === boat.id ? boat : b)),
  })),
  on(deleteBoatSuccess, (state, { boat }) => ({
    ...state,
    boats: state.boats.filter((b) => b.id !== boat.id),
  })),
  on(getBoatsByColorSuccess, (state, { boats }) => ({ ...state, boats })),
  on(getBoatByIdSuccess, (state, { boat }) => ({
    ...state,
    boats: state.boats.map((b) => (b.id === boat.id ? boat : b)),
  }))
);
