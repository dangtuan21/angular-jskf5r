import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialExampleModule} from '../material.module';
import {AutocompleteAutoActiveFirstOptionExample} from './autocomplete-auto-active-first-option-example';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [AutocompleteAutoActiveFirstOptionExample],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AutocompleteAutoActiveFirstOptionExample],
})
export class AppModule {}
