import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleComponent } from '../app/components/vehicle/vehicle.component';
import { CarComponent } from '../app/components/car/car.component';
import { BusComponent } from '../app/components/bus/bus.component';
import { BoatComponent } from '../app/components/boat/boat.component';

const routes: Routes = [
  { path: '', redirectTo: '/vehicles', pathMatch: 'full' },
  { path: 'vehicles', component: VehicleComponent },
  { path: 'cars', component: CarComponent },
  { path: 'buses', component: BusComponent },
  { path: 'boats', component: BoatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
