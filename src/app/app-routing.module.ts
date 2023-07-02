import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatepaymentComponent } from './createpayment/createpayment.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';

const routes: Routes = [
  {path:'payment',component:PaymentlistComponent},
  {path:'createpayment',component:CreatepaymentComponent},
  {path:'',redirectTo:'payment',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
