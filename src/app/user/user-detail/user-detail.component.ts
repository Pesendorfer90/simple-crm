import { Component } from '@angular/core';
import { MATERIAL_MODULES } from '../../shared/material-imports';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../service/data.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-detail',
  imports: [MATERIAL_MODULES ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  userId: string | null = '';
  userIdstring: string = this.userId ?? 'default string';

  user: User = new User();

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      this.userIdstring = this.userId as string;
      console.log('GOT ID', this.userId);
      this.getUser();
    })
  }

  getUser() {
    this.dataService.getUserById('user', this.userIdstring).subscribe((user) => {
      this.user = new User(user); // Daten speichern
      console.log(this.user);
    });
  }

  openAdressDialog() {
    console.log('works');
    
  }
}
