import { Component, inject } from '@angular/core';
import { MATERIAL_MODULES } from '../../shared/material-imports';
import { User } from '../../model/user';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';

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

  async saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('user', this.user);
    this.loading = true;

    const userCollection = collection(this.firestore, 'user');

    try {
      const result = await addDoc(userCollection, this.user.toJSON());
      console.log('User added:', result);
      this.loading = false;
      this.dialogRef.close();
    } catch (error) {
      console.error('Error adding user:', error);
    }
  }
}
