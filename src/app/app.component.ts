import { Component } from '@angular/core';
import { Kombucha } from './models/kombucha.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Kombucha Bar';

  kombuchas: Kombucha[] = [
    new Kombucha('Liquid Air', 'High As a Sky', 4.50, 30),
    new Kombucha('2 Day Tea Brew', 'NoPo', 2, 10)
  ]

}
