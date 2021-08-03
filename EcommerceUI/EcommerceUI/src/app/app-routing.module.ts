
import { RegisterUserComponent } from './authentication/register-user/register-user.component';

import { CartComponent } from './cloth-detail/cart/cart.component';



import { AddEditClothComponent } from './cloth-detail/add-edit-cloth/add-edit-cloth.component';
import { ClothDetailComponent } from './cloth-detail/cloth-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "clothes", component: ClothDetailComponent },
  { path: "add", component: AddEditClothComponent },
  { path: "signup", component: RegisterUserComponent },
  { path: "login", component: CartComponent },
  { path: "cart", component: CartComponent },
  // { path: 'signup', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
