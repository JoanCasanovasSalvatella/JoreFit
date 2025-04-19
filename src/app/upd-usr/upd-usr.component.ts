import { Component } from '@angular/core';
import { Footer2Component } from "../footer2/footer2.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-upd-usr',
  standalone: true,
  imports: [Footer2Component, CommonModule, RouterLink],
  templateUrl: './upd-usr.component.html',
  styleUrl: './upd-usr.component.css'
})
export class UpdUsrComponent {
  showPassword = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

}
