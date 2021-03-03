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
  errMessage = '';
  message = '';
  fromBook: boolean;

  constructor(private api: ApiService, private input: InputService, private router: Router) { }

  ngOnInit(): void {
    this.fromBook = this.input.fromBook;
    this.inputFirst = '';
    this.inputLast = '';
    if (this.fromBook) {
      this.errorMessage = false;
      this.message = 'Bitte gib den Autoren, der das Buch geschrieben hat, ein.';
      this.fromBook = false;
    }
  }


  addAuthor(): void {
    if (this.inputFirst !== '' && this.inputLast !== '') {
      console.log(
        this.api.postApi(
          'http://localhost:8080/book_manager_war_exploded/api/v1/author' ,
          JSON.stringify(new Author(this.inputFirst, this.inputLast)))
          .subscribe( next => console.log(`Successful, ${next.response}`),
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
        )
      );
    }
    else {
      this.errMessage = 'Ein Fehler ist aufgetreten.';
    }
  }

  addAuthorFromBook(): void {
    if (this.inputFirst !== '' && this.inputLast !== '') {
      console.log(this.api.postApi(
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
      ).subscribe(next => console.log(`Successful, ${next.response}`),
        error => {
          if (this.api.handleError(error) === 409) {
            console.log('Conflict');
            this.message = '';
            this.errMessage = 'Das Buch gibt es schon in der Liste.';
          }
          else {
            console.log('Other');
          }
        })
    );
      this.errMessage = '';
      this.message = 'Du hast ein neues Buch hinzugefügt';
      this.input.fromBook = false;
      this.input.complete = true;
      this.router.navigate(['/add-book']);
    }
  }


}
