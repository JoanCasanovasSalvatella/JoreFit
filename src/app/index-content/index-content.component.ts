import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index-content',
  standalone: true,
  imports: [FooterComponent, RouterLink],
  templateUrl: './index-content.component.html',
  styleUrl: './index-content.component.css'
})
export class IndexContentComponent {

}
