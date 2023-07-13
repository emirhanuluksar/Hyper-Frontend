import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { AppState } from '../../../store/model/app.state';
import { Vehicle } from 'src/store/model/vehicle.model';
import { getVehicles } from 'src/store/actions/vehicle.actions';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  vehicles: Vehicle[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(getVehicles());
    this.store
      .pipe(
        select((state) => state.vehicles?.vehicles),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((vehicles) => {
        this.vehicles = vehicles;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
