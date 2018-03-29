import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';


import { AppComponent } from './app.component';
import { AddKombuchaComponent } from './add-kombucha/add-kombucha.component';
import { EditKombuchaComponent } from './edit-kombucha/edit-kombucha.component';
import { KombuchaListComponent } from './kombucha-list/kombucha-list.component';
import { RemoveKombuchaComponent } from './remove-kombucha/remove-kombucha.component';
import { CompletenessPipe } from './completeness.pipe';
import { HappyHourPipe } from './happyHour.pipe'


@NgModule({
  declarations: [
    AppComponent,
    AddKombuchaComponent,
    EditKombuchaComponent,
    KombuchaListComponent,
    RemoveKombuchaComponent,
    CompletenessPipe,
    HappyHourPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
