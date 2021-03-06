import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Kombucha } from '../models/kombucha.model';

@Component({
  selector: 'app-kombucha-list',
  templateUrl: './kombucha-list.component.html',
  styleUrls: ['./kombucha-list.component.css']
})
export class KombuchaListComponent {
  @Input() childKombuchaList: Kombucha[];
  @Input() childHappyHour: boolean;
  @Output() clickedPourPint = new EventEmitter();
  @Output() clickedEditKombucha = new EventEmitter();
  @Output() clickedRemove = new EventEmitter();

  pourPint(kombuchaToPour: Kombucha) {
    this.clickedPourPint.emit(kombuchaToPour);
  }

  editKombucha(kombuchaToEdit: Kombucha) {
    this.clickedEditKombucha.emit(kombuchaToEdit);
  }

  removeKombucha(kombuchaToDelete: Kombucha) {
    this.clickedRemove.emit(kombuchaToDelete);
  }
  constructor() { }

  ngOnInit() {
  }

}
