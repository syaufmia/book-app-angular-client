import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringTrimService {

  constructor() { }

  getTrimmed(sentence: string): string {
    const words: string[] = sentence.split(' ');
    const newSentence =  '';
    for (let i = 0; i < words.length; i++) {
      if (words[i] !== '') {
        newSentence.concat(words[i].substring(0, 1).toUpperCase()).concat(words[i].substring(1).toLowerCase());
        if (i !== (sentence.length - 1)) {
          newSentence.concat(' ');
        }
      }
    }
    return newSentence;
  }
}
