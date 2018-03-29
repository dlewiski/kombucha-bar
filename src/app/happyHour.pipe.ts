import { Pipe, PipeTransform } from '@angular/core';
import { Kombucha } from './models/kombucha.model';

@Pipe({
  name: "happyHour",
  pure: false
})

export class HappyHourPipe implements PipeTransform {
  transform(input: Kombucha[], happyHour) {
    for (let i = 0; i < input.length; i++) {
      if(happyHour && (input[i].price >= 1)) {
        console.log(input[i]);
        let newPrice = input[i].price--;
      }
}
    return input;
  }
}
