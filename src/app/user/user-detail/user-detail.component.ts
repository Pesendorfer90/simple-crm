import { Component } from '@angular/core';
import { MATERIAL_MODULES } from '../../shared/material-imports';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  imports: [ MATERIAL_MODULES],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  userId = '';

  constructor(private route:ActivatedRoute) {
    this.route.paramMap.subscribe( paramMap => {
      this.userId = paramMap.get('id');
      console.log('GOT ID', this.userId);
  })
  }
}
