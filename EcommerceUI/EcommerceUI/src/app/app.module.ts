import { AuthService } from './shared/services/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothDetailComponent } from './cloth-detail/cloth-detail.component';
import { ClothDetailFormComponent } from './cloth-detail/cloth-detail-form/cloth-detail-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddEditClothComponent } from './cloth-detail/add-edit-cloth/add-edit-cloth.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CartComponent } from './cloth-detail/cart/cart.component';
import { FilterTextboxComponent } from './shared/filter-textbox.component';
import { PriceComponent } from './sorting/price/price.component';
import { BrandComponent } from './sorting/brand/brand.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ClothDetailComponent,
    ClothDetailFormComponent,
    AddEditClothComponent,
    SignUpComponent,
    CartComponent,
    FilterTextboxComponent,
    PriceComponent,
    BrandComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
