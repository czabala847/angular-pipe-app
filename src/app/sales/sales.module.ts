import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { GeneralsComponent } from './pages/generals/generals.component';
import { OrderComponent } from './pages/order/order.component';

@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    GeneralsComponent,
    OrderComponent,
  ],
  imports: [CommonModule],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    GeneralsComponent,
    OrderComponent,
  ],
})
export class SalesModule {}
