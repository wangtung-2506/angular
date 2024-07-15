import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { IProduct } from '../../../interface/Product';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-product.component.html',
  styleUrl: './admin-product.component.css',
})
export class AdminProductComponent {
  products!: IProduct[];
  constructor(private productService: ProductService, private router: Router) {
    this.productService.getAll().subscribe((products) => {
      this.products = products;
    });
  }
  removeItem(id: number) {
    const confirm = window.confirm('Are you sure??');
    if (confirm) {
      this.productService.deleteProduct(id).subscribe(() => {
        console.log('Delete success!');
        this.products = this.products.filter((product) => product.id !== id);
      });
    }
  }
  adminProductAdd(){
    this.router.navigate(['/product']);
  }
}
