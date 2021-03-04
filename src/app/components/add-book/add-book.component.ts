import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {InputService} from '../../service/input.service';
import {Book} from '../../model/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  errorMessage: boolean;
  title: string;
  isbn: string;
  year: number;
  publisher: string;
  message: string;

  constructor(private input: InputService, private router: Router) { }

  ngOnInit(): void {
    this.title = '';
    this.isbn = '';
    this.publisher = '';
    this.message = '';
    this.year = 2020;
    if (this.input.complete) {
      this.errorMessage = false;
      this.message = 'Du hast ein neues Buch hinzugefügt!';
    }
    else if (this.input.abort) {
      this.errorMessage = true;
      this.message = this.input.placeholderMessage;
      this.input.abort = false;
    }
    this.input.setAllBack();
  }

  checkForm(): void {
    if (this.title !== '' && this.publisher !== '' && this.isbn !== '' ) {
      this.input.placeholderBook = new Book(this.title, this.isbn, this.publisher, this.year);
      this.errorMessage = false;
      this.router.navigate(['/search-author']);
    }
    else {
      this.errorMessage = true;
      this.message = 'Bitte fülle alle Felder aus.';
    }
  }

}
