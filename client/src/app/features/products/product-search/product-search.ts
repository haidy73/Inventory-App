import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-search',
  imports: [],
  templateUrl: './product-search.html',
  styleUrl: './product-search.css',
})
export class ProductSearch {

  @Output() searchChange = new EventEmitter<string>();
  @Output() categoryChange = new EventEmitter<string>();

  private searchDebounce: any;

  onSearchInput(value: string): void {
    clearTimeout(this.searchDebounce);
    this.searchDebounce = setTimeout(() => {
      this.searchChange.emit(value);
    }, 400);
  }

  onCategorySelect(value: string): void {
    this.categoryChange.emit(value);
  }

}
