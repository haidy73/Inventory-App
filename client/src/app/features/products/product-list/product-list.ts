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
  
  totalProductsCount = 0;
  loading = true;
  currentPage = 1;
  pageSize = 7;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.fetchPage();
  }

  fetchPage(): void {
    this.loading = true;
    this.productService.getProducts(this.currentPage, this.pageSize).subscribe({
      next: (res: any) => {
        console.log(res.allProducts);
        this.products = res.allProducts; 
        this.totalProductsCount = res.total;
        this.loading = false
      },
      error: (err) => { console.error(err); this.loading = false; }
    });
  }

  getTotalPages(): number {
    return Math.ceil(this.totalProductsCount / this.pageSize) || 1;
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.getTotalPages()) return;
    this.currentPage = page;
    this.fetchPage();
  }
}
