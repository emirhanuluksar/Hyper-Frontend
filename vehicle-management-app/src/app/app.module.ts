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

@NgModule({
  declarations: [AppComponent, CarComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ cars: carsReducer }),
    EffectsModule.forRoot([CarsEffects]),
  ],
  providers: [CarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
