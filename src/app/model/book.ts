import {Author} from './author';

export class Book {

  title: string;
  isbn: string;
  author: Author;
  publisher: string;
  year: number;

  constructor(title?: string,
              isbn?: string,
              publisher?: string,
              year?: number,
              author?: Author,) {
    if (title) {
      this.title = title;
    }
    if (isbn) {
      this.isbn = isbn;
    }
    if (publisher) {
      this.publisher = publisher;
    }
    if (author) {
      this.author = author;
    }
    if (year) {
      this.year = year;
    }
  }
}
