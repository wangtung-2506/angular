import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { IProduct } from '../../../interface/Product';

@Component({
  selector: 'app-admin-product-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin-product-edit.component.html',
  styleUrl: './admin-product-edit.component.css',
})
export class AdminProductEditComponent {
  product!: IProduct;
  constructor(
    private formbuilder: FormBuilder,
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      const id = this.route.snapshot.params['id'];
      console.log(id);
      this.productService.getProductById(id).subscribe((product) => {
        this.product = product;
        this.productForm.patchValue(product);
      });
    });
  }

  productForm = this.formbuilder.group({
    name: ['tung'],
    price: [1000],
    imageUrl: ['picsum'],
    description: ['mo ta san pham '],
  });

  onSubmit() {
    this.productService
      .updateProduct({ ...this.product, ...this.productForm.value } as IProduct)
      .subscribe(() => {
        alert('Cập nhật thành công');
        this.router.navigate(['/admin/product']);
      });
  }
}
