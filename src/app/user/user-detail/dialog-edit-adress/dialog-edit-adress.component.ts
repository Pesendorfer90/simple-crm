import { Component, inject } from '@angular/core';
import { User } from '../../../model/user';
import { MATERIAL_MODULES } from '../../../shared/material-imports';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../../../service/data.service';

@Component({
  selector: 'app-dialog-edit-adress',
  imports: [MATERIAL_MODULES, FormsModule],
  templateUrl: './dialog-edit-adress.component.html',
  styleUrl: './dialog-edit-adress.component.scss'
})
export class DialogEditAdressComponent {

  readonly dialogRef = inject(MatDialogRef<DialogEditAdressComponent>);

  user!: User;
  userId: string | null = '';
  loading: boolean = false;

  constructor(private dataService: DataService) { };

  saveUser() {
    this.loading = true;
    this.dataService.updateUser(this.user, this.userId)
    .then(() => {
      this.dialogRef.close(); // Dialog schließen
      this.loading = false; // Ladevorgang beenden
    })
  }
}
