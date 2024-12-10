import { Component, inject } from '@angular/core';
import { User } from '../../../model/user';
import { MATERIAL_MODULES } from '../../../shared/material-imports';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../../../service/data.service';

@Component({
  selector: 'app-dialog-edit-user',
  imports: [MATERIAL_MODULES, FormsModule],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {

  readonly dialogRef = inject(MatDialogRef<DialogEditUserComponent>);

  user: User = new User;
  userId: string | null = '';
  loading: boolean = false;
  birthDate!: Date;

  constructor(private dataService: DataService) { };

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    this.loading = true;
    this.dataService.updateUser(this.user, this.userId)
    .then(() => {
      this.dialogRef.close(); // Dialog schließen
      this.loading = false; // Ladevorgang beenden
    })
  }
}
