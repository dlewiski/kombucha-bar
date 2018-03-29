import { Component, Output, EventEmitter } from '@angular/core';
import { Kombucha } from '../models/kombucha.model';


@Component({
  selector: 'app-add-kombucha',
  templateUrl: './add-kombucha.component.html',
  styleUrls: ['./add-kombucha.component.css']
})
export class AddKombuchaComponent {
  @Output() sendKombucha = new EventEmitter();
  submitForm(nameNew: string, brandNew: string, priceNew: string, probioticNew: string) {
    let newKombucha: Kombucha = new Kombucha (nameNew, brandNew, parseInt(priceNew), parseInt(probioticNew));
    this.sendKombucha.emit(newKombucha);
  }

  constructor() { }
  ngOnInit() {
  }

}
