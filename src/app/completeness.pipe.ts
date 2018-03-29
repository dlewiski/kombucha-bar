import { Pipe, PipeTransform } from '@angular/core';
import { Kombucha } from './models/kombucha.model';

@Pipe({
  name: "completeness",
  pure: false
})

export class CompletenessPipe implements PipeTransform {
  transform(input: Kombucha[], args) {
    let output: Kombucha[] = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i].pintLevel > 120) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
