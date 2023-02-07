import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { StarComponent } from '../shared/star.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces-pipe';
import { FormsModule } from '@angular/forms';
import { ProductDetailGuard } from './product-detail.guard';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent },
    ])
  ]
})

export class ProductModule { }
