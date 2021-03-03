import { Injectable } from '@angular/core';
import {Author} from '../model/author';
import {Book} from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  placeholderBook: Book;
  list: Author[] = [];
  fromBook = false;
  complete = false;
  listEmpty = true;

  constructor() { }
}
