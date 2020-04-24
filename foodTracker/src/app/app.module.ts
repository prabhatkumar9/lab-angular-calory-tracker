import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { FormComponent } from './form/form.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { TodaysComponent } from './todays/todays.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    FormComponent,
    FoodlistComponent,
    TodaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
