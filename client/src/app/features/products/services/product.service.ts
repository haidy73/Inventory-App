import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../../../core/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = environment.apiUrl + '/products';
  
  constructor(private http: HttpClient) {}

  updateProduct(id: string, updatedProduct: ProductModel) {
    return this.http.put(`${this.apiUrl}/${id}`, updatedProduct);
  } 
  
  deleteProduct(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  } 
  
  searchProductName(name: string) {
    return this.http.get(`${this.apiUrl}/name/${name}`);
  }
  
  searchProductCategory(category: string) {
    return this.http.get(`${this.apiUrl}/category/${category}`);
  }

  createProduct(product: ProductModel) {
    return this.http.post(`${this.apiUrl}/`, product);
  } 

  getProducts() {
    return this.http.get(`${this.apiUrl}/`);
  }
  
}
