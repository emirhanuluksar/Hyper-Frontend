import { BoatState } from '../reducers/boat.state';
import { BusState } from '../reducers/bus.state';
import { CarState } from '../reducers/car.state';
import { VehicleState } from '../reducers/vehicle.state';

export interface AppState {
  cars: CarState;
  boats: BoatState;
  buses: BusState;
  vehicles: VehicleState;
}
