import { Car } from '../model/car.model';

export interface CarState {
  cars: Car[];
  addCarSuccess: boolean;
}
