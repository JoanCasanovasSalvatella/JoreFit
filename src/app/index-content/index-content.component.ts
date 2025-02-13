import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-index-content',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './index-content.component.html',
  styleUrl: './index-content.component.css'
})
export class IndexContentComponent {

}
