import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserComponent } from './add-user.component';
import { DataService } from '../../service/data.service';
import { of } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUserComponent],
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

    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
