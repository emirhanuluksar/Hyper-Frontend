import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Car } from '../../../store/model/car.model';
import {
  getCars,
  turnOffTheHeadlight,
  turnOnTheHeadlight,
} from '../../../store/actions/car.actions';
import { AppState } from '../../../store/model/app.state';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit, OnDestroy {
  @ViewChild('addCarPopupTemplate') addCarPopupTemplate!: TemplateRef<any>;
  @ViewChild('updateCarPopupTemplate')
  updateCarPopupTemplate!: TemplateRef<any>;
  @ViewChild('deleteCarPopupTemplate')
  deleteCarPopupTemplate!: TemplateRef<any>;

  addCarPopupRef!: BsModalRef;
  updateCarPopupRef!: BsModalRef;
  deleteCarPopupRef!: BsModalRef;

  private unsubscribe$ = new Subject<void>();
  cars: Car[] = [];
  showAddCarPopup = false;
  showUpdateCarPopup = false;
  newCar: Car = {
    id: '',
    vehicleType: '',
    color: '',
    capacity: 0,
    length: 0,
    wheels: 0,
    headlightsOn: false,
  };
  selectedCar: Car | null = null;

  constructor(
    private store: Store<AppState>,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.store.dispatch(getCars());
    this.store
      .pipe(
        select((state) => state.cars?.cars),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((cars) => {
        this.cars = cars || [];
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  toggleHeadlights(car: Car) {
    if (car.headlightsOn == true) {
      console.log('TurnOffHeadLights');
      this.store.dispatch(turnOffTheHeadlight({ car }));
    } else {
      console.log('TurnOnTheHeadLights');
      this.store.dispatch(turnOnTheHeadlight({ car }));
    }
  }

  openAddCarPopup() {
    this.addCarPopupRef = this.modalService.show(this.addCarPopupTemplate);
  }

  closeAddCarPopup() {
    this.addCarPopupRef.hide();
  }
}
