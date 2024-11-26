import { Component, inject } from '@angular/core';
import { MATERIAL_MODULES } from '../shared/material-imports';
import { AddUserComponent } from './add-user/add-user.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-user',
  imports: [ MATERIAL_MODULES ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(AddUserComponent)
  }
}
