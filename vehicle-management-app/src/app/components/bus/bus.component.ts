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
import { Bus } from '../../../store/model/bus.model';
import {
  addBus,
  deleteBus,
  getBuses,
  updateBus,
} from '../../../store/actions/bus.actions';
import { AppState } from '../../../store/model/app.state';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css'],
})
export class BusComponent implements OnInit, OnDestroy {
  @ViewChild('addBusPopupTemplate') addBusPopupTemplate!: TemplateRef<any>;
  @ViewChild('updateBusPopupTemplate')
  updateBusPopupTemplate!: TemplateRef<any>;
  @ViewChild('deleteBusPopupTemplate')
  deleteBusPopupTemplate!: TemplateRef<any>;

  addBusPopupRef!: BsModalRef;
  updateBusPopupRef!: BsModalRef;
  deleteBusPopupRef!: BsModalRef;
  private unsubscribe$ = new Subject<void>();
  buses: Bus[] = [];
  showAddBusPopup = false;
  showUpdateBusPopup = false;
  selectedBus: Bus | null = null;

  newBusForm!: FormGroup;
  updateBusForm!: FormGroup;

  constructor(
    private store: Store<AppState>,
    private modalService: BsModalService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.store.dispatch(getBuses());
    this.store
      .pipe(
        select((state) => state.buses?.buses),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((buses) => {
        this.buses = buses || [];
      });

    this.newBusForm = this.formBuilder.group({
      color: ['', Validators.required],
      capacity: [0, [Validators.required, Validators.min(1)]],
      length: [0, [Validators.required, Validators.min(1)]],
    });

    this.updateBusForm = this.formBuilder.group({
      id: [''],
      vehicleType: ['', Validators.required],
      color: ['', Validators.required],
      capacity: [0, [Validators.required, Validators.min(1)]],
      length: [0, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  openAddBusPopup() {
    this.addBusPopupRef = this.modalService.show(this.addBusPopupTemplate);
  }

  closeAddBusPopup() {
    this.addBusPopupRef.hide();
  }

  addBus() {
    if (this.newBusForm.invalid) {
      this.newBusForm.markAllAsTouched();
      return;
    }

    this.store.dispatch(addBus({ bus: this.newBusForm.value }));
    this.newBusForm.reset();
    this.closeAddBusPopup();
  }

  openUpdateBusPopup(bus: Bus) {
    console.log(bus.id);
    this.selectedBus = bus;
    this.updateBusForm.patchValue({
      id: bus.id,
      vehicleType: bus.vehicleType,
      color: bus.color,
      capacity: bus.capacity,
      length: bus.length,
    });
    this.updateBusPopupRef = this.modalService.show(
      this.updateBusPopupTemplate
    );
  }

  closeUpdateBusPopup() {
    this.updateBusPopupRef.hide();
    this.selectedBus = null;
  }

  updateBus() {
    if (this.updateBusForm.invalid) {
      this.updateBusForm.markAllAsTouched();
      return;
    }
    this.store.dispatch(updateBus({ bus: this.updateBusForm.value }));
    this.closeUpdateBusPopup();
  }

  openDeleteBusPopup(bus: Bus) {
    this.selectedBus = bus;
    this.deleteBusPopupRef = this.modalService.show(
      this.deleteBusPopupTemplate
    );
  }

  closeDeleteBusPopup() {
    this.deleteBusPopupRef.hide();
    this.selectedBus = null;
  }

  deleteBus() {
    if (!this.selectedBus) {
      return;
    }

    this.store.dispatch(deleteBus({ bus: this.selectedBus }));
    this.closeDeleteBusPopup();
  }
}
