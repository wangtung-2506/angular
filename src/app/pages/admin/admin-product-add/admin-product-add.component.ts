
import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Router, RouterModule } from '@angular/router';
import { IProduct } from '../../../interface/Product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-admin-product-add',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './admin-product-add.component.html',
  styleUrl: './admin-product-add.component.css'
})
export class AdminProductAddComponent {
  products!: IProduct[];
  
  constructor(private productService: ProductService, private cdr: ChangeDetectorRef,private router: Router) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAll().subscribe((products) => {
      this.products = products;
    });
  }

  addProduct(form: any) {
    this.productService.addProduct(form.value).subscribe((product) => {
      console.log(product);
      this.products.push(product); // Thêm sản phẩm mới vào danh sách
      this.cdr.detectChanges(); // Yêu cầu Angular kiểm tra lại thay đổi
      this.router.navigate(['/admin/product']);
      alert('ban da them thanh cong ')
    });
  }
  
}