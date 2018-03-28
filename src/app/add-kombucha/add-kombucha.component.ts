import { Component, Input } from '@angular/core';
import { Kombucha } from '../models/kombucha.model';

@Component({
  selector: 'app-add-kombucha',
  templateUrl: './add-kombucha.component.html',
  styleUrls: ['./add-kombucha.component.css']
})
export class AddKombuchaComponent {

  @Input() childKambuchaList: Kombucha[];

  constructor() { }

  ngOnInit() {
  }

}
