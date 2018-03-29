import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Kombucha } from '../models/kombucha.model';

@Component({
  selector: 'app-remove-kombucha',
  templateUrl: './remove-kombucha.component.html',
  styleUrls: ['./remove-kombucha.component.css']
})
export class RemoveKombuchaComponent {
  @Input() childSelectedKombucha: Kombucha;
  @Output() clickedRemove = new EventEmitter();

  removeKombucha(kombuchaToDelete: Kombucha) {
    this.clickedRemove.emit(kombuchaToDelete);
  }
  constructor() { }

  ngOnInit() {
  }

}
