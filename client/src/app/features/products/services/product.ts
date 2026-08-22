///temp

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  createProduct(data: any): Observable<any> {
    console.log('Mock Create Product:', data);
    return of({ success: true });
  }

  updateProduct(id: string, data: any): Observable<any> {
    console.log('Mock Update Product:', id, data);
    return of({ success: true });
  }

  getProductById(id: string): Observable<any> {
    return of({ name: 'Sample Product', price: 100, category: 'Tech', quantity: 5 });
  }

  deleteProduct(id: string): Observable<any> {
    console.log('Mock Delete Product:', id);
    return of({ success: true });
  }
}
