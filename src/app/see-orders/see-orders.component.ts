import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SseService } from '../sse.service';

@Component({
  selector: 'app-see-orders',
  templateUrl: './see-orders.component.html',
  styleUrls: ['./see-orders.component.scss']
})
export class SeeOrdersComponent implements OnInit {

  orders: Order[]

  constructor(private http: HttpClient, private sseService: SseService) { }

  ngOnInit() {
    this.getOrders().subscribe(data => this.orders = data)
    this.sseService
      .getServerSentEvent("/api/order/sse")
      .subscribe(event => {
        console.log(event.data);
        this.orders = JSON.parse(event.data);
        this.orders = this.orders.filter(o => o.status != 2)
      });
  }

  getOrders() {
    return this.http.get<Order[]>("api/order")
  }

  completeOrder(id: number){
    console.log("Order Id Done: "+id)
    this.http.get(`/api/order/complete/${id}`).subscribe()
    this.getOrders().subscribe(data => this.orders = data)
  }
}
