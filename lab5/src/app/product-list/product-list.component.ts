import { Component, OnInit } from '@angular/core';
import { Category, HeaderComponent } from '../header/header.component'
import { ProductItem } from '../product-item/product-item.component';
import { ProductItemService } from '../services/product-item.service';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})


export class ProductListComponent {
  products: ProductItem[] = [];
  categoryName: string = '';

  // constructor(private productService: ProductItemService) { }

  // ngOnInit(): void {
  //   this.products = this.productService.getProducts();
  //   this.categoryName = this.productService.getCategoryName();
  // }

  // productsByCategory: { category: Category, products: ProductItem[] }[] = [];

  // constructor(private productService: ProductItemService) { }

  // selectedCategoryId: number | null = null;

  // ngOnInit(): void {
  //   // Loop through all categories and get products for each category
  //   this.productService.getCategories().forEach(category => {
  //     const products = this.productService.getProductsByCategoryId(category.id);
  //     this.productsByCategory.push({ category, products });
  //   });
  // }

  
  constructor(private productService: ProductItemService) { }

  
  ngOnInit(): void {
    this.productService.selectedCategory$.subscribe((category: Category | null) => {
      if (category) {
        this.categoryName = category.name;
        this.products = this.productService.products
      }
    });

   
    
 
  
}
}
