import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/products.model';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})



export class ProductsComponent implements OnInit {

  product?: IProduct;
  productsList: IProduct[] = [];
  //color: string;

  constructor(
    private _route: ActivatedRoute,
    private _apiService: ApiService) { }


  ngOnInit(): void {
    //this._route.params.subscribe(params => {
    //this._apiService.getAllProducts(Number(params['productId']))
    this._apiService.getAllProducts().subscribe((data: IProduct[]) => {
      //console.log(data);
      this.productsList = data;
    })

  }
}

