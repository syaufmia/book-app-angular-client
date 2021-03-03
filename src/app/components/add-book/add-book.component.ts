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

  errMessage = '';
  title: string;
  isbn: string;
  year: number;
  publisher = '';
  message = '';

  constructor(private input: InputService, private router: Router) { }

  ngOnInit(): void {
    this.year = 2020;
    if (this.input.complete) {
      this.message = 'Du hast ein neues Buch hinzugefügt!';
    }
  }

  checkForm(): void {
    if (this.title !== '' && this.publisher !== '' && this.isbn !== '' ) {
      this.input.placeholderBook = new Book(this.title, this.isbn, this.publisher, this.year);
      this.errMessage = '';
      this.router.navigate(['/search-author']);
    }
    else {
      this.errMessage = 'Bitte fülle alle Felder aus.';
      this.message = '';
    }
  }

}
