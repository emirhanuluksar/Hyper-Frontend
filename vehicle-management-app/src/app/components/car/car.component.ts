import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Car } from '../../../store/model/car.model';
import { getCars } from '../../../store/actions/car.actions';
import { AppState } from '../../../store/model/app.state';

@Component({
  selector: 'app-car',
  template: `
    <div *ngFor="let car of cars">
      {{ car.color }} Car with {{ car.wheels }} wheels
    </div>
  `,
})
export class CarComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  cars: Car[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(getCars());
    this.store
      .pipe(
        select((state) => state.cars?.cars),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((cars) => {
        this.cars = cars;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}