import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsListComponent } from './dashboard/products-list/products-list.component';
import { EditProductComponent } from './dashboard/edit-product/edit-product.component';
import { NewProductFormComponent } from './dashboard/new-product-form/new-product-form.component';
import { ProductsFilterComponent } from './dashboard/products-filter/products-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductsListComponent,
    EditProductComponent,
    NewProductFormComponent,
    ProductsFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
