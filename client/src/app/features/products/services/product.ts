import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProductModel } from '../../../core/models/product.model';
import { Observable } from 'rxjs';

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

  getProducts(currentPage = 1, pageSize = 7) {
    const params = new HttpParams()
      .set('page', currentPage)
      .set('limit', pageSize);
      
    return this.http.get(`${this.apiUrl}`, { params });
  }

  getCategories() {
    console.log('here');
    
    return this.http.get(`${this.apiUrl}/categories`);
  }

  getProductById(id: string): Observable<ProductModel> {
    return this.http.get<ProductModel>(`${this.apiUrl}/products/${id}`);
  }
  
}