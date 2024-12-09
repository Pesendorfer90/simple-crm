import { Component, inject } from '@angular/core';
import { MATERIAL_MODULES } from '../../shared/material-imports';
import { User } from '../../model/user';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../../service/data.service';
@Component({
  selector: 'app-add-user',
  imports: [MATERIAL_MODULES, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {

  readonly dialogRef = inject(MatDialogRef<AddUserComponent>);
  firestore: Firestore = inject(Firestore);
  user: User = new User();
  birthDate: Date = new Date();
  loading: boolean = false;

  constructor(private dataService: DataService) { };

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    this.loading = true; // Start des Ladevorgangs
    
    this.dataService.saveUser(this.user)
      .then(() => {
        this.dialogRef.close(); // Dialog schließen
        this.loading = false; // Ladevorgang beenden
      })
    }
}
