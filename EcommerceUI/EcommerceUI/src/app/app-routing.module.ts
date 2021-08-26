import { AdminGuard } from './shared/guards/admin.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './authentication/login/login.component';

import { RegisterUserComponent } from './authentication/register-user/register-user.component';

import { CartComponent } from './cloth-detail/cart/cart.component';



import { AddEditClothComponent } from './cloth-detail/add-edit-cloth/add-edit-cloth.component';
import { ClothDetailComponent } from './cloth-detail/cloth-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "clothes", component: ClothDetailComponent },
  { path: "add", component: AddEditClothComponent, canActivate: [AdminGuard] },
  { path: "signup", component: RegisterUserComponent },
  { path: "login", component: LoginComponent },
  { path: "cart", component: CartComponent, canActivate: [AuthGuard] },
  { path: "forbidden", component: ForbiddenComponent }
  // { path: 'signup', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
