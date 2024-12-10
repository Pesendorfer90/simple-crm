import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditUserComponent } from './dialog-edit-user.component';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { DataService } from '../../../service/data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('DialogEditUserComponent', () => {
  let component: DialogEditUserComponent;
  let fixture: ComponentFixture<DialogEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogEditUserComponent, RouterModule.forRoot([])],
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

fixture = TestBed.createComponent(DialogEditUserComponent);
component = fixture.componentInstance;
fixture.detectChanges();
  });

it('should create', () => {
  expect(component).toBeTruthy();
});
});
