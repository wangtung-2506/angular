import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout-admin',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './layout-admin.component.html',
  styleUrl: './layout-admin.component.css'
})
export class LayoutAdminComponent {
    constructor(private router: Router){}
    navigateToAdminProduct(){
      this.router.navigate(['/product']);
    }
}
