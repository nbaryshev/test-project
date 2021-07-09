import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: any;

  constructor(private ProductsService: ProductsService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.products = this.ProductsService.products_list;
  }

  editProduct = (product) => {
    this.ProductsService.editProduct(product);
  }

  deleteProduct = (product) => {
    this.ProductsService.deleteProduct(product);
  }

}
