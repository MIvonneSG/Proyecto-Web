import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from '../models/products.model';
import { ApiService } from '../services/api.service';
import { reduce } from 'rxjs';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})



export class ProductDetailComponent implements OnInit {

  productList: IProduct[] = [];
  product?: IProduct;
  color: string = "";
  loading: boolean = true;
  constructor(private _route: ActivatedRoute,
    private _apiService: ApiService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe({
      next: (params: Params) => {
        this._apiService.getProduct(Number(params['productId'])).subscribe({
          next: (data: IProduct) => {
            this.product = data;
            this.color = this.product?.price as number > 200 ? 'red' : ''
            this.loading = false;
          },
          error: (error: any) => {
            console.log(error)
            this.loading = false;
          }
        })
        //console.log(params['productId']);
      }
    })
  }
}
