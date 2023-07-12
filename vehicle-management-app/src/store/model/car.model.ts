import { Vehicle } from './vehicle.model';

export interface Car extends Vehicle {
  wheels: number;
  headlightsOn: boolean;
}
