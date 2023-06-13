import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymetsRoutingModule } from './paymets-routing.module';
import { SuccessComponent } from './success/success.component';
import { CancelComponent } from './cancel/cancel.component';


@NgModule({
  declarations: [
    SuccessComponent,
    CancelComponent
  ],
  imports: [
    CommonModule,
    PaymetsRoutingModule
  ],
  exports: [
    SuccessComponent,
    CancelComponent
  ]
})
export class PaymetsModule { }
