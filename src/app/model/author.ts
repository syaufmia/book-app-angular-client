import {Book} from './book';

export class Author {

  id: number;
  first_name: string;
  last_name: string;
  books: Book[];

  constructor(id?: number,
              first_name?: string,
              last_name?: string,
              books?: Book[]) {
    if (id) {
      this.id = id;
    }
    if (first_name) {
      this.first_name = first_name;
    }
    if (last_name) {
      this.last_name = last_name;
    }
    if (books) {
      this.books = books;
    }
  }
}
