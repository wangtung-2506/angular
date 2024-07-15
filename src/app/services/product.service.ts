import { Injectable } from '@angular/core';
import { IProduct } from '../interface/Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:3000/products');
  }
  getProductById(id: number | string): Observable<IProduct> {
    return this.http.get<IProduct>('http://localhost:3000/products/' + id);
  }
  addProduct(product: IProduct) {
    return this.http.post<IProduct>('http://localhost:3000/products', product);
  }
  deleteProduct(id: number): Observable<IProduct | {}> {
    return this.http.delete<IProduct | {}>(
      `http://localhost:3000/products/${id}`
    );
  }
  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(
      `http://localhost:3000/products/${product.id}`,
      product
    );
  }
}
