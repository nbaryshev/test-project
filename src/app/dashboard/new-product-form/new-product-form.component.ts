import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-new-product-form',
  templateUrl: './new-product-form.component.html',
  styleUrls: ['./new-product-form.component.scss']
})
export class NewProductFormComponent implements OnInit {
  @Input() closeForm;

  constructor(private ProductService: ProductsService) { }

  newProduct: any;
  newProductForm: FormGroup;

  get name() { return this.newProductForm.get('productName'); }
  get description() { return this.newProductForm.get('productPrice'); }
  get price() { return this.newProductForm.get('productPrice'); }

  ngOnInit(): void {
    this.newProductForm = new FormGroup ({
      'productName': new FormControl('', [
        Validators.required,
        Validators.maxLength(30)
      ]),
      'productDescription': new FormControl(''),
      'productPrice': new FormControl('', [
        Validators.required,
        Validators.min(1)
      ])
    })
  }

  onSubmit() {
    let name = this.newProductForm.get('productName').value;
    let description = this.newProductForm.get('productDescription')?.value;
    let price = this.newProductForm.get('productPrice').value;
    let date = new Date()
    this.newProduct = new Product(0, name, description, price, date);
    this.ProductService.addNewProduct(this.newProduct);
  }

}
