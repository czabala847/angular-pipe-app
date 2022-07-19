import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { GeneralsComponent } from './pages/generals/generals.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { OrderComponent } from './pages/order/order.component';

import { MayusPipe } from './pipes/mayus.pipe';
import { FlyPipe } from './pipes/fly.pipe';
import { OrderPipe } from './pipes/order.pipe';

@NgModule({
  declarations: [
    GeneralsComponent,
    NoCommonsComponent,
    NumbersComponent,
    OrderComponent,
    MayusPipe,
    FlyPipe,
    OrderPipe,
  ],
  imports: [CommonModule, PrimeNgModule],
  exports: [
    GeneralsComponent,
    NoCommonsComponent,
    NumbersComponent,
    OrderComponent,
  ],
})
export class SalesModule {}
