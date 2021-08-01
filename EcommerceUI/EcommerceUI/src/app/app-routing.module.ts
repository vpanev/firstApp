import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cloth-detail/cart/cart.component';



import { AddEditClothComponent } from './cloth-detail/add-edit-cloth/add-edit-cloth.component';
import { ClothDetailComponent } from './cloth-detail/cloth-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: "clothes", component: ClothDetailComponent },
  { path: "add", component: AddEditClothComponent },
  { path: "signup", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "cart", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
