import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  products!: Product[];
  productService;

  constructor() {
    this.productService = new ProductService();
  }

  getProducts() {
    this.products = this.productService.getProducts();
  }

  ngOnInit(): void {
  }

}
