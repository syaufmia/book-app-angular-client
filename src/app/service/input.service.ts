import { Injectable } from '@angular/core';
import {Author} from '../model/author';
import {Book} from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  placeholderBook: Book;
  placeholderBookList: Book[];
  placeholderAuthorList: Author[];
  placeholderMessage = '';
  fromBook = false;
  complete = false;
  abort = false;

  constructor() { }

  setAllBack(): void {
    this.fromBook = false;
    this.complete = false;
    this.abort = false;
  }
}
