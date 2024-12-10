import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditAdressComponent } from './dialog-edit-adress.component';
import { DataService } from '../../../service/data.service';
import { of } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('DialogEditAdressComponent', () => {
  let component: DialogEditAdressComponent;
  let fixture: ComponentFixture<DialogEditAdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditAdressComponent],
      providers: [
        provideAnimations(),
        { provide: MatDialogRef, useValue: {} }, // Mock für MatDialogRef
        { provide: MAT_DIALOG_DATA, useValue: {} }, // Mock für MAT_DIALOG_DATA
        {
          provide: DataService,
          useValue: {
            // Mock-Methode für DataService
            getData: jasmine.createSpy('getData').and.returnValue(of([])),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogEditAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
