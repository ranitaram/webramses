import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessComponent } from './success/success.component';
import { CancelComponent } from './cancel/cancel.component';

const routes: Routes = [
  {path: 'success', component: SuccessComponent},
  {path: 'cancel', component: CancelComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymetsRoutingModule { }
