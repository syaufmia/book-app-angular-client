import {Book} from './book';

export class Author {

  id: number;
  first_name: string;
  last_name: string;
  books: Book[];

  constructor(first_name?: string,
              last_name?: string,
              id?: number,
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

  static fromHttp(author: Author): Author {
    const newAuthor = new Author();
    newAuthor.first_name = author.first_name;
    newAuthor.last_name = author.last_name;
    newAuthor.id = author.id;
    newAuthor.books = author.books;
    return newAuthor;
  }
}
