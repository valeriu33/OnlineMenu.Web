import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.scss']
})
export class MakeOrderComponent implements OnInit {

  constructor(private http: HttpClient) { }

  menu: Product[] = [ {id: 1, name: "Pizza", price: 100}, {id: 2, name: "Fries", price: 50}]


  selectedItems: Product[] = []

  ngOnInit() {
    this.getMenu().subscribe((data: Product[]) => this.menu = data);
  }

  addItem(item: Product) {
    this.selectedItems.push(item)
  }

  removeItem(item: Product) {
    this.selectedItems = this.selectedItems.filter(i => i.id != item.id)
  }

  makeOrder() {
    this.addOrder(this.selectedItems.map(se => se.id)).subscribe()
    this.selectedItems = []
  }

  getMenu() {
    return this.http.get<Product[]>("api/order/get-menu")
  }

  addOrder(order: number[]) {
    return this.http.post("api/order/add", order)
  }
}
