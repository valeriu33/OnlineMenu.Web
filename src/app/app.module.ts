import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MakeOrderComponent } from './make-order/make-order.component';
import { SeeOrdersComponent } from './see-orders/see-orders.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'make-order', component: MakeOrderComponent },
  { path: 'see-orders',      component: SeeOrdersComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MakeOrderComponent,
    SeeOrdersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
