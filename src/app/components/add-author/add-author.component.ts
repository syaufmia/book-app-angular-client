import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service';
import {Author} from '../../model/author';
import {InputService} from '../../service/input.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  inputFirst: string;
  inputLast: string;
  errorMessage: boolean;
  // errMessage = '';
  message: string;
  fromBook: boolean;

  constructor(private api: ApiService, private input: InputService, private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.fromBook = this.input.fromBook;
    this.inputFirst = '';
    this.inputLast = '';
    if (this.fromBook) {
      this.errorMessage = false;
      this.message = 'Bitte gib den Autoren, der das Buch geschrieben hat, ein.';
    }
  }


  addAuthor(): void {
    if (this.inputFirst !== '' && this.inputLast !== '') {
      this.api.postApi(
        'http://localhost:8080/book_manager_war_exploded/api/v1/author' ,
        JSON.stringify(new Author(this.inputFirst, this.inputLast)))
        .subscribe( next => console.log('Successful'),
        error => {
          this.errorMessage = true;
          if (this.api.handleError(error) === 409) {
          this.message = 'Den Autor gibt es schon in der Liste.';
        }
        else {
          this.message = 'Ein unerwarteter Fehler ist aufgetreten.';
        }
      },
          () => {
          this.errorMessage = false;
          this.message = `${this.inputFirst} ${this.inputLast} wurde hinzugefügt.`;
          this.inputFirst = '';
          this.inputLast = '';
        }
      );
    }
    else {
      this.errorMessage = true;
      this.message = 'Bitte fülle alle Felder aus.';
    }
  }

  addAuthorFromBook(): void {
    if (this.inputFirst !== '' && this.inputLast !== '') {
      this.api.postApi(
        'http://localhost:8080/book_manager_war_exploded/api/v1/book',
        JSON.parse(
          `{
          "first_name": "${this.inputFirst}",
          "last_name": "${this.inputLast}",
          "title": "${this.input.placeholderBook.title}",
          "isbn": "${this.input.placeholderBook.isbn}",
          "publisher": "${this.input.placeholderBook.publisher}",
          "year": ${this.input.placeholderBook.year}
          }`
        )
      ).subscribe(next => console.log('Successful'),
        error => {
          this.errorMessage = false;
          this.input.fromBook = false;
          this.input.abort = true;
          if (this.api.handleError(error) === 409) {
            this.input.placeholderMessage = 'Die ISBN gibt es schon in der Liste.';
          }
          else {
            this.input.placeholderMessage = 'Ein unerwarteter Fehler ist aufgetreten.';
          }
          this.router.navigate(['add-book']);
        },
        () => {
          this.errorMessage = false;
          this.input.fromBook = false;
          this.input.complete = true;
          this.router.navigate(['add-book']);
        })
    ;

    }
  }


}
