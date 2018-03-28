import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Kombucha } from '../models/kombucha.model';

@Component({
  selector: 'app-edit-kombucha',
  templateUrl: './edit-kombucha.component.html',
  styleUrls: ['./edit-kombucha.component.css']
})
export class EditKombuchaComponent {
  @Input() childSelectedKombucha: Kombucha;
  @Output() clickedDone = new EventEmitter();

  finishedEditing() {
    this.clickedDone.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
