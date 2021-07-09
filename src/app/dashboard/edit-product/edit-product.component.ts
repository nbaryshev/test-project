import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  
  edittedProduct = {};

  editProductForm: FormGroup;

  constructor(private ProductsService: ProductsService) { }

  get currentProduct() {
    return Object.assign({}, this.ProductsService.chosenProduct);
  }

  get name() { return this.editProductForm.get('productName')!; }
  get price() { return this.editProductForm.get('productPrice')!; }

  ngOnInit(): void {
    this.editProductForm = new FormGroup ({
      'productName': new FormControl(this.currentProduct.name, [
        Validators.required,
        Validators.maxLength(30)
      ]),
      'productDescription': new FormControl(this.currentProduct.description),
      'productPrice': new FormControl(this.currentProduct.name, [
        Validators.required,
        Validators.min(1)
      ])
    })
  }

  onSubmit() {
    this.edittedProduct = {
      id: this.currentProduct.id,
      name: this.editProductForm.get('productName').value,
      description: this.editProductForm.get('productDescription')?.value,
      price: this.editProductForm.get('productPrice').value
    }
      
    this.ProductsService.updateExistingProductDetails(this.edittedProduct);
  }
}
