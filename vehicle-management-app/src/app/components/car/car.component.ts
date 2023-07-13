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
  addCar,
  deleteCar,
  getCars,
  turnOffTheHeadlight,
  turnOnTheHeadlight,
  updateCar,
} from '../../../store/actions/car.actions';
import { AppState } from '../../../store/model/app.state';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CarRequest } from 'src/store/model/car-request.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  selectedCar: Car | null = null;

  newCarForm!: FormGroup;
  updateCarForm!: FormGroup;

  constructor(
    private store: Store<AppState>,
    private modalService: BsModalService,
    private formBuilder: FormBuilder
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

    this.newCarForm = this.formBuilder.group({
      color: ['', Validators.required],
      capacity: [0, [Validators.required, Validators.min(1)]],
      length: [0, [Validators.required, Validators.min(1)]],
      wheels: [0, [Validators.required, Validators.min(2)]],
    });

    this.updateCarForm = this.formBuilder.group({
      id: [''],
      vehicleType: ['', Validators.required],
      color: ['', Validators.required],
      capacity: [0, [Validators.required, Validators.min(1)]],
      length: [0, [Validators.required, Validators.min(1)]],
      wheels: [0, [Validators.required, Validators.min(2)]],
      headlightsOn: [false, Validators.required],
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  openAddCarPopup() {
    this.addCarPopupRef = this.modalService.show(this.addCarPopupTemplate);
  }

  closeAddCarPopup() {
    this.addCarPopupRef.hide();
  }

  addCar() {
    if (this.newCarForm.invalid) {
      // Form doğrulama işlemi
      this.newCarForm.markAllAsTouched();
      return;
    }

    this.store.dispatch(addCar({ car: this.newCarForm.value }));
    this.newCarForm.reset();
    this.closeAddCarPopup();
  }

  openUpdateCarPopup(car: Car) {
    console.log(car.id);
    this.selectedCar = car;
    this.updateCarForm.patchValue({
      id: car.id,
      vehicleType: car.vehicleType,
      color: car.color,
      capacity: car.capacity,
      length: car.length,
      wheels: car.wheels,
      headlightsOn: car.headlightsOn,
    });
    this.updateCarPopupRef = this.modalService.show(
      this.updateCarPopupTemplate
    );
  }

  closeUpdateCarPopup() {
    this.updateCarPopupRef.hide();
    this.selectedCar = null;
  }

  updateCar() {
    if (this.updateCarForm.invalid) {
      this.updateCarForm.markAllAsTouched();
      return;
    }
    this.store.dispatch(updateCar({ car: this.updateCarForm.value }));
    this.closeUpdateCarPopup();
  }

  toggleHeadlights(car: Car) {
    if (car.headlightsOn) {
      console.log('Turn Off Headlights');
      this.store.dispatch(turnOffTheHeadlight({ car }));
    } else {
      console.log('Turn On Headlights');
      this.store.dispatch(turnOnTheHeadlight({ car }));
    }
  }

  openDeleteCarPopup(car: Car) {
    this.selectedCar = car;
    this.deleteCarPopupRef = this.modalService.show(
      this.deleteCarPopupTemplate
    );
  }

  closeDeleteCarPopup() {
    this.deleteCarPopupRef.hide();
    this.selectedCar = null;
  }

  deleteCar() {
    if (!this.selectedCar) {
      return;
    }

    this.store.dispatch(deleteCar({ car: this.selectedCar }));
    this.closeDeleteCarPopup();
  }
}
