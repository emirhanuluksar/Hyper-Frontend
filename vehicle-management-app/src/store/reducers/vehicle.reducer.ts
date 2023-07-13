import { createReducer, on } from '@ngrx/store';
import { Vehicle } from '../model/vehicle.model';
import { getVehiclesSuccess } from '../actions/vehicle.actions';

export interface VehicleState {
  vehicles: Vehicle[];
}

export const initialState: VehicleState = {
  vehicles: [],
};

export const vehiclesReducer = createReducer(
  initialState,
  on(getVehiclesSuccess, (state, { vehicles }) => ({ ...state, vehicles }))
);
