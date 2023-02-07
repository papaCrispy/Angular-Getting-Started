import { Component, OnDestroy, OnInit  } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IProduct } from './IProduct';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit, OnDestroy{
    cardTitle:string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    imageVisibility: boolean = false;
    errorMessage: string = '';
    sub!: Subscription;
    
    private _listFilter: string = '';
    get listFilter(): string{
      return this._listFilter;
    }
    set listFilter(value: string){
      this._listFilter = value;
      this.filteredProducts = this.productsList.filter((product: IProduct) => product.productName.toLowerCase().includes(this.listFilter.toLowerCase()))
    }

    filteredProducts: IProduct[] = [];
    productsList: IProduct[] = [];

    /**
     *
     */
    constructor(private productService: ProductService) {
    }

    onRatingClicked(message: string): void{
      this.cardTitle = message;
    }

    showImage(): void
    {
      if(this.imageVisibility == true)
      {
        this.imageVisibility = false;
      }
      else
    {
      this.imageVisibility = true;
    }
  }

    ngOnInit(): void
    {
      this.sub = this.productService.getProducts().subscribe({
        next: products => {
          this.productsList = products;
          this.filteredProducts = this.productsList;
        },
        error: err => this.errorMessage = err
      });
      this.listFilter = '';
      
    }

    ngOnDestroy(): void{

      this.sub.unsubscribe;
    }

}