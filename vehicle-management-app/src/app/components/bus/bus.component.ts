import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getBuses } from 'src/store/actions/bus.actions';
import { AppState } from 'src/store/model/app.state';
import { Bus } from 'src/store/model/bus.model';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css'],
})
export class BusComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  buses: Bus[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(getBuses());
    this.store
      .pipe(
        select((state) => state.buses?.buses),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((buses) => {
        this.buses = buses;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
