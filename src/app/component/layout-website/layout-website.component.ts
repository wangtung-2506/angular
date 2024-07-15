import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-website',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout-website.component.html',
  styleUrl: './layout-website.component.css'
})
export class LayoutWebsiteComponent {

}
