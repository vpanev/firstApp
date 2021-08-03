import { ErrorHandlerService } from './shared/services/error-handler.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthenticationService } from './shared/services/authentication.service';
import { ClothDetailService } from './shared/services/cloth-detail.service';
import { CartService } from './shared/services/cart.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothDetailComponent } from './cloth-detail/cloth-detail.component';
import { ClothDetailFormComponent } from './cloth-detail/cloth-detail-form/cloth-detail-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditClothComponent } from './cloth-detail/add-edit-cloth/add-edit-cloth.component';
import { CartComponent } from './cloth-detail/cart/cart.component';
import { FilterTextboxComponent } from './shared/filter-textbox.component';
import { PriceComponent } from './sorting/price/price.component';
import { BrandComponent } from './sorting/brand/brand.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ClothDetailComponent,
    ClothDetailFormComponent,
    AddEditClothComponent,
    CartComponent,
    FilterTextboxComponent,
    PriceComponent,
    BrandComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AuthenticationModule
  ],
  providers: [CartService, ClothDetailService, AuthenticationService, {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorHandlerService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
