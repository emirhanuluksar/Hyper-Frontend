import { createReducer, on } from '@ngrx/store';
import { Boat } from '../model/boat.model';
import { getBoatsSuccess } from '../actions/boat.actions';

export interface BoatState {
  boats: Boat[];
}

export const initialState: BoatState = {
  boats: [],
};

export const boatsReducer = createReducer(
  initialState,
  on(getBoatsSuccess, (state, { boats }) => ({ ...state, boats }))
);
