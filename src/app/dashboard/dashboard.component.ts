import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  addProduct: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  clicked() {
    this.addProduct = !this.addProduct;
  }

  closeForm() {
    this.addProduct = false;
  }
}
