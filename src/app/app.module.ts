import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';


import { AppComponent } from './app.component';
import { AddKombuchaComponent } from './add-kombucha/add-kombucha.component';
import { EditKombuchaComponent } from './edit-kombucha/edit-kombucha.component';
import { KombuchaListComponent } from './kombucha-list/kombucha-list.component';
import { RemoveKombuchaComponent } from './remove-kombucha/remove-kombucha.component';


@NgModule({
  declarations: [
    AppComponent,
    AddKombuchaComponent,
    EditKombuchaComponent,
    KombuchaListComponent,
    RemoveKombuchaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
