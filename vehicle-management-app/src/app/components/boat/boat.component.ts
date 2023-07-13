import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subject, of } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { AppState } from '../../../store/model/app.state';
import { Boat } from 'src/store/model/boat.model';
import { getBoats } from 'src/store/actions/boat.actions';

@Component({
  selector: 'app-boat',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.css'],
})
export class BoatComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  boats: Boat[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(getBoats());
    this.store
      .pipe(
        select((state) => state.boats?.boats),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((boats) => {
        this.boats = boats;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
