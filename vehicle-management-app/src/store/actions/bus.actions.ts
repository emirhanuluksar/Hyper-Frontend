import { createAction, props } from '@ngrx/store';
import { Bus } from '../model/bus.model';

export const getBuses = createAction('[Buses] Get Buses');

export const getBusesSuccess = createAction(
  '[Buses] Get Buses Success',
  props<{ buses: Bus[] }>()
);

export const getBusesFailure = createAction(
  '[Buses] Get Buses Failure',
  props<{ error: any }>()
);
export const addBus = createAction('[Bus] Add Bus', props<{ bus: Bus }>());
export const addBusSuccess = createAction(
  '[Bus] Add Bus Success',
  props<{ bus: Bus }>()
);
export const addBusFailure = createAction(
  '[Bus] Add Bus Failure',
  props<{ error: any }>()
);

export const updateBus = createAction(
  '[Bus] Update Bus',
  props<{ bus: Bus }>()
);
export const updateBusSuccess = createAction(
  '[Bus] Update Bus Success',
  props<{ bus: Bus }>()
);
export const updateBusFailure = createAction(
  '[Bus] Update Bus Failure',
  props<{ error: any }>()
);

export const deleteBus = createAction(
  '[Bus] Delete Bus',
  props<{ bus: Bus }>()
);
export const deleteBusSuccess = createAction(
  '[Bus] Delete Bus Success',
  props<{ bus: Bus }>()
);
export const deleteBusFailure = createAction(
  '[Bus] Delete Bus Failure',
  props<{ error: any }>()
);

export const getBusesByColor = createAction(
  '[Buses] Get Buses By Color',
  props<{ color: string }>()
);

export const getBusesByColorSuccess = createAction(
  '[Buses] Get Buses By Color Success',
  props<{ buses: Bus[] }>()
);

export const getBusesByColorFailure = createAction(
  '[Buses] Get Buses By Color Failure',
  props<{ error: any }>()
);
export const getBusById = createAction(
  '[Bus] Get Bus By Id',
  props<{ id: string }>()
);
export const getBusByIdSuccess = createAction(
  '[Bus] Get Bus By Id Success',
  props<{ bus: Bus }>()
);
export const getBusByIdFailure = createAction(
  '[Bus] Get Bus By Id Failure',
  props<{ error: any }>()
);
