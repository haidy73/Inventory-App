import { Component, Input } from '@angular/core';
import { ProductModel } from '../../../core/models/product.model';
import { ProductCard } from '../product-card/product-card';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: ProductModel[] = [];
  loading: boolean = true;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (data: any) => {this.products = data; this.loading = false},
      error: (err) => { console.error(err); this.loading = false}
    });
  }
}
