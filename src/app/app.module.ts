import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelDrivenFormsComponent } from './model-driven-forms/model-driven-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToggleComponent} from './template-driven-forms/toggle/toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelDrivenFormsComponent,
    TemplateDrivenFormsComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
