import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import forms module to leverage input forms
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';

//import http client
import { HttpClientModule } from '@angular/common/http';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {MatButtonModule} from  '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from  '@angular/material/input';

import {MatSliderModule} from  '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ListingDataFormComponent } from './listing-data-form/listing-data-form.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';


@NgModule({
  declarations: [AppComponent, LoginFormComponent, ListingsPageComponent, MyListingsPageComponent, NavBarComponent, NewListingPageComponent, EditListingPageComponent, ContactPageComponent, ListingDataFormComponent, ListingDetailPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
      BrowserAnimationsModule,
    HttpClientModule, //!!!! for  testing http requests
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
