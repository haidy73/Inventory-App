import { Component, Input } from '@angular/core';
import { ProductModel } from '../../../core/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product !: ProductModel;

  constructor(private router: Router) {}

  editProduct() {
    this.router.navigate(['/products/edit', this.product._id]);
  }
}
