import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { CarComponent } from '../app/components/car/car.component';
import { carsReducer } from '../store/reducers/car.reducer';
import { CarsEffects } from '../store/effects/car.effects';
import { CarService } from '../app/services/car.service';
import { BusComponent } from './components/bus/bus.component';
import { BoatComponent } from './components/boat/boat.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { AppRoutingModule } from './app-routing.module';
import { BusService } from './services/bus.service';
import { BusesEffects } from 'src/store/effects/bus.effects';
import { busesReducer } from 'src/store/reducers/bus.reducer';
import { boatsReducer } from 'src/store/reducers/boat.reducer';
import { BoatsEffects } from 'src/store/effects/boat.effects';
import { BoatService } from './services/boat.service';
import { VehicleEffects } from 'src/store/effects/vehicle.effects';
import { vehiclesReducer } from 'src/store/reducers/vehicle.reducer';
import { VehicleService } from './services/vehicle.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BusComponent,
    BoatComponent,
    VehicleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      cars: carsReducer,
      buses: busesReducer,
      boats: boatsReducer,
      vehicles: vehiclesReducer,
    }),
    EffectsModule.forRoot([
      CarsEffects,
      BusesEffects,
      BoatsEffects,
      VehicleEffects,
    ]),
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [CarService, BusService, BoatService, VehicleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
