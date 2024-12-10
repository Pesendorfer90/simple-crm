import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MATERIAL_MODULES } from './shared/material-imports';

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet, MATERIAL_MODULES ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
