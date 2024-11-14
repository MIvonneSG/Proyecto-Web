import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct, Category } from '../models/products.model';
import { Product } from '../products/products.mock';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  //private baseURL= 'https://fakestoreapi.com/products'
  //private baseURL= 'http://localhost:8080/Producto'
  private baseURL= '/Producto'
  
  constructor(private _httpClient: HttpClient) { }

  public getAllProducts(): Observable<IProduct[]>{
    return this._httpClient.get<IProduct[]>(`${this.baseURL}/find-all`);
  }
  
  public getProduct(id: number | string): Observable<IProduct>{
    return this._httpClient.get<IProduct>(`${this.baseURL}/${id}`);
  }

  public getAllCategories(): Observable<Category[]>{
    return this._httpClient.get<Category[]>(`${this.baseURL}/categories`);
  }

  public newProduct(product: Product): Observable<IProduct>{
    return this._httpClient.post<IProduct>(`${this.baseURL}`, product);
  }


  public updateProduct(id: number, product: IProduct): Observable<IProduct>{
    return this._httpClient.put<IProduct>(`${this.baseURL}/${id}`,product);
  }

  public deleteProduct(id: number): Observable<IProduct>{
    return this._httpClient.delete<IProduct>(`${this.baseURL}/${id}`);
  }

}
