import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  products_list = [
    {
      id: 1,
      name: 'Shirt 1',
      description: 'Lightweight cotton. Soft, strong and breathable. Cotton 100%',
      price: 10,
      date: new Date
    },
    {
      id: 2,
      name: 'Shirt 2',
      description: 'Lightweight cotton. Soft, strong and breathable. Cotton 100%',
      price: 12,
      date: new Date
    },
    {
      id: 3,
      name: 'Shirt 3',
      description: 'Lightweight cotton. Soft, strong and breathable. Cotton 100%',
      price: 14,
      date: new Date
    },
    {
      id: 4,
      name: 'Shirt 4',
      description: 'Lightweight cotton. Soft, strong and breathable. Cotton 100%',
      price: 16,
      date: new Date
    },
    {
      id: 5,
      name: 'Shirt 5',
      description: 'Lightweight cotton. Soft, strong and breathable. Cotton 100%',
      price: 18,
      date: new Date
    }
  ];

  chosenProduct = this.products_list[0];

  editProduct(product) {
    this.chosenProduct = product;
  }

  updateExistingProductDetails(product) {
    let editedProduct = this.products_list.find(elem => elem.id == product.id)
    editedProduct.name = product.name;
    editedProduct.description = product.description;
    editedProduct.price = product.price;
  }

  addNewProduct(product) {
    this.products_list.push(product);
  }

  deleteProduct(product) {
    let index = this.products_list.findIndex(elem => elem.id == product.id)
    this.products_list.splice(index, 1);
  }

}
