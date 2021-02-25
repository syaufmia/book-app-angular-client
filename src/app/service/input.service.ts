import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  inputTitle = '';
  inputISBN = '';
  inputYear = 2020;
  inputPublisher = '';

  constructor() { }
}
