import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexContentComponent } from './index-content/index-content.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,IndexContentComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JoreFit';
}
