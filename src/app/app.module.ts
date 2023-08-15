import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowErrorDirective } from './show-error.directive';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import {ModalComponent} from "./components/profile-form/modal/modal.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ShowErrorDirective,
    FormFieldComponent,
    ProfileFormComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
