import { Component, inject } from '@angular/core';
import { MATERIAL_MODULES } from '../shared/material-imports';
import { AddUserComponent } from './add-user/add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../service/data.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [MATERIAL_MODULES, RouterLink ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  readonly dialog = inject(MatDialog);
  users: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // Daten abonnieren
    this.dataService.getData('user').subscribe((users) => {
      this.users = users; // Daten speichern
      console.log('Aktuelle Benutzer:', this.users);
    });
  }

  openDialog() {
    this.dialog.open(AddUserComponent)
  }
}
