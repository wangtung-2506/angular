import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IProduct } from '../../interface/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css'
})
export class ProductDetailPageComponent {
  product!: IProduct;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) {

    this.route.params.subscribe(params => {
      const id = params['id'];
      this.productService.getProductById(id).subscribe(product => {
        this.product = product;
      })
    })
  }
}
