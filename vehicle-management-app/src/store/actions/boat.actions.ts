import { createAction, props } from '@ngrx/store';
import { Boat } from '../model/boat.model';

export const getBoats = createAction('[Boats] Get Boats');

export const getBoatsSuccess = createAction(
  '[Boats] Get Boats Success',
  props<{ boats: Boat[] }>()
);

export const getBoatsFailure = createAction(
  '[Boats] Get Boats Failure',
  props<{ error: any }>()
);

export const addBoat = createAction('[Boat] Add Boat', props<{ boat: Boat }>());
export const addBoatSuccess = createAction(
  '[Boat] Add Boat Success',
  props<{ boat: Boat }>()
);
export const addBoatFailure = createAction(
  '[Boat] Add Boat Failure',
  props<{ error: any }>()
);

export const updateBoat = createAction(
  '[Boat] Update Boat',
  props<{ boat: Boat }>()
);
export const updateBoatSuccess = createAction(
  '[Boat] Update Boat Success',
  props<{ boat: Boat }>()
);
export const updateBoatFailure = createAction(
  '[Boat] Update Boat Failure',
  props<{ error: any }>()
);

export const deleteBoat = createAction(
  '[Boat] Delete Boat',
  props<{ boat: Boat }>()
);
export const deleteBoatSuccess = createAction(
  '[Boat] Delete Boat Success',
  props<{ boat: Boat }>()
);
export const deleteBoatFailure = createAction(
  '[Boat] Delete Boat Failure',
  props<{ error: any }>()
);

export const getBoatsByColor = createAction(
  '[Boats] Get Boats By Color',
  props<{ color: string }>()
);

export const getBoatsByColorSuccess = createAction(
  '[Boats] Get Boats By Color Success',
  props<{ boats: Boat[] }>()
);

export const getBoatsByColorFailure = createAction(
  '[Boats] Get Boats By Color Failure',
  props<{ error: any }>()
);
export const getBoatById = createAction(
  '[Boat] Get Boat By Id',
  props<{ id: string }>()
);
export const getBoatByIdSuccess = createAction(
  '[Boat] Get Boat By Id Success',
  props<{ boat: Boat }>()
);
export const getBoatByIdFailure = createAction(
  '[Boat] Get Boat By Id Failure',
  props<{ error: any }>()
);
