import { Component, Input } from '@angular/core';
import { Kombucha } from './models/kombucha.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  title = 'Kombucha Bar';
  kombuchas: Kombucha[] = [
    new Kombucha('Liquid Air', 'High As a Sky', 4.50, 30),
    new Kombucha('2 Day Tea Brew', 'NoPo', 2, 10)
  ];
  selectedKombucha = null;
  pouredKombucha = null;
  saveNewKombucha = null;

  editKombucha(currentKombucha){
    this.selectedKombucha = currentKombucha;
  }

  pourPint(currentKombucha){
    this.pouredKombucha = currentKombucha;
    this.pouredKombucha.pintLevel--;
  }

  finishedEditing() {
    this.selectedKombucha = null;
  }

  addKombucha(newKombucha: Kombucha) {
    this.kombuchas.push(newKombucha);
  }


}
