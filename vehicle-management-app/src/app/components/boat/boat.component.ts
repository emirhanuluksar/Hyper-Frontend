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
import { Boat } from '../../../store/model/boat.model';
import {
  addBoat,
  deleteBoat,
  getBoats,
  updateBoat,
} from '../../../store/actions/boat.actions';
import { AppState } from '../../../store/model/app.state';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-boat',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.css'],
})
export class BoatComponent implements OnInit, OnDestroy {
  @ViewChild('addBoatPopupTemplate') addBoatPopupTemplate!: TemplateRef<any>;
  @ViewChild('updateBoatPopupTemplate')
  updateBoatPopupTemplate!: TemplateRef<any>;
  @ViewChild('deleteBoatPopupTemplate')
  deleteBoatPopupTemplate!: TemplateRef<any>;

  addBoatPopupRef!: BsModalRef;
  updateBoatPopupRef!: BsModalRef;
  deleteBoatPopupRef!: BsModalRef;
  private unsubscribe$ = new Subject<void>();
  boats: Boat[] = [];
  showAddBoatPopup = false;
  showUpdateBoatPopup = false;
  selectedBoat: Boat | null = null;

  newBoatForm!: FormGroup;
  updateBoatForm!: FormGroup;

  constructor(
    private store: Store<AppState>,
    private modalService: BsModalService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.store.dispatch(getBoats());
    this.store
      .pipe(
        select((state) => state.boats?.boats),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((boats) => {
        this.boats = boats || [];
      });

    this.newBoatForm = this.formBuilder.group({
      color: ['', Validators.required],
      capacity: [0, [Validators.required, Validators.min(1)]],
      length: [0, [Validators.required, Validators.min(1)]],
    });

    this.updateBoatForm = this.formBuilder.group({
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

  openAddBoatPopup() {
    this.addBoatPopupRef = this.modalService.show(this.addBoatPopupTemplate);
  }

  closeAddBoatPopup() {
    this.addBoatPopupRef.hide();
  }

  addBoat() {
    if (this.newBoatForm.invalid) {
      this.newBoatForm.markAllAsTouched();
      return;
    }

    this.store.dispatch(addBoat({ boat: this.newBoatForm.value }));
    this.newBoatForm.reset();
    this.closeAddBoatPopup();
  }

  openUpdateBoatPopup(boat: Boat) {
    console.log(boat.id);
    this.selectedBoat = boat;
    this.updateBoatForm.patchValue({
      id: boat.id,
      vehicleType: boat.vehicleType,
      color: boat.color,
      capacity: boat.capacity,
      length: boat.length,
    });
    this.updateBoatPopupRef = this.modalService.show(
      this.updateBoatPopupTemplate
    );
  }

  closeUpdateBoatPopup() {
    this.updateBoatPopupRef.hide();
    this.selectedBoat = null;
  }

  updateBoat() {
    if (this.updateBoatForm.invalid) {
      this.updateBoatForm.markAllAsTouched();
      return;
    }
    this.store.dispatch(updateBoat({ boat: this.updateBoatForm.value }));
    this.closeUpdateBoatPopup();
  }

  openDeleteBoatPopup(boat: Boat) {
    this.selectedBoat = boat;
    this.deleteBoatPopupRef = this.modalService.show(
      this.deleteBoatPopupTemplate
    );
  }

  closeDeleteBoatPopup() {
    this.deleteBoatPopupRef.hide();
    this.selectedBoat = null;
  }

  deleteBoat() {
    if (!this.selectedBoat) {
      return;
    }

    this.store.dispatch(deleteBoat({ boat: this.selectedBoat }));
    this.closeDeleteBoatPopup();
  }
}
