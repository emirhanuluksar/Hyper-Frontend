import { createAction, props } from '@ngrx/store';
import { Vehicle } from '../model/vehicle.model';

export const getVehicles = createAction('[Vehicles] Get Vehicles');

export const getVehiclesSuccess = createAction(
  '[Vehicles] Get Vehicles Success',
  props<{ vehicles: Vehicle[] }>()
);

export const getVehiclesFailure = createAction(
  '[Vehicles] Get Vehicles Failure',
  props<{ error: any }>()
);
