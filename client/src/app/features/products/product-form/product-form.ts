import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-product-form',
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
})
export class ProductForm implements OnInit {
  productForm!: FormGroup;
  isEditMode = false;
  productId!: string;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(0)]]
    });

    this.productId = this.route.snapshot.params['id'];
    if (this.productId) {
      this.isEditMode = true;
      this.productService.getProductById(this.productId).subscribe({
        next: (product) => this.productForm.patchValue(product),
        error: (err) => console.error('Error fetching product', err)
      });
    }
  }

  onSubmit(): void {
    if (this.productForm.invalid) return;

    if (this.isEditMode) {
      this.productService.updateProduct(this.productId, this.productForm.value).subscribe({
        next: () => this.router.navigate(['/products']),
        error: (err) => console.error(err)
      });
    } else {
      this.productService.createProduct(this.productForm.value).subscribe({
        next: () => this.router.navigate(['/products']),
        error: (err) => console.error(err)
      });
    }
  }

  onDelete(): void {
    if (!this.productId) return;
    if (window.confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(this.productId).subscribe({
        next: () => this.router.navigate(['/products']),
        error: (err) => console.error(err)
      });
    }
  }

  onCancel(): void {
  this.router.navigate(['/products']);
}
}
