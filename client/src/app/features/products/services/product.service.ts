import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ProductModel } from '../../../core/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = environment.apiUrl + '/products';
  
  constructor(private http: HttpClient) {}

  updateProduct(id: string, updatedProduct: ProductModel) {
    const token = localStorage.getItem('token');

    return this.http.put(`${this.apiUrl}/${id}`, updatedProduct, {
        headers:{
          Authorization:`Bearer ${token}`
        }
      });
  } 
  
  deleteProduct(id: string) {
    const token = localStorage.getItem('token');

    return this.http.delete(`${this.apiUrl}/${id}`, {
        headers:{
          Authorization:`Bearer ${token}`
        }
      });
  } 
  
  searchProductName(name: string) {
    return this.http.get(`${this.apiUrl}/name/${name}`);
  }
  
  searchProductCategory(category: string) {
    return this.http.get(`${this.apiUrl}/category/${category}`);
  }

  createProduct(product:any){

    const token = localStorage.getItem('token');

    return this.http.post(
      this.apiUrl,
      product,
      {
        headers:{
          Authorization:`Bearer ${token}`
        }
      }
    );
  }

  getProducts(currentPage = 1, pageSize = 7) {
    const params = new HttpParams()
      .set('page', currentPage)
      .set('limit', pageSize);
      
    return this.http.get(`${this.apiUrl}`, { params });
  }

  getProductById(id: string) {
    return this.http.get(`this.apiUrl}/${id}`);
  }
  
}
