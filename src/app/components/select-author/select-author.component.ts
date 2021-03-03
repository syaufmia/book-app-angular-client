import {Component, OnInit} from '@angular/core';
import {InputService} from '../../service/input.service';
import {Author} from '../../model/author';
import {ApiService} from '../../service/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-select-author',
  templateUrl: './select-author.component.html',
  styleUrls: ['./select-author.component.css']
})
export class SelectAuthorComponent implements OnInit {

  // TODO: errMessage : boolean (checking - check, whether red or grey)
  errMessage = '';
  message = '';
  list: Author[];
  selectedAuthorId: number;
  searchEmpty = false;

  constructor(private input: InputService, private api: ApiService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.input.list == null || this.input.placeholderBook == null) {
      this.router.navigate(['/add-book']);
    }
    else {
      this.list = this.input.list;
      if (this.list.length === 0) {
        this.searchEmpty = true;
        this.errMessage = 'Es gibt keinen Autor mit diesem Namen.';
      }
    }
  }

  addAuthor(): void {
    this.input.fromBook = true;
    this.router.navigate(['/add-author']);
  }

  select(): void {
    if (this.selectedAuthorId) {
      this.api.postApi(
        'http://localhost:8080/book_manager_war_exploded/api/v1/book',
        JSON.parse(
          `{
          "id": ${this.selectedAuthorId},
          "title": "${this.input.placeholderBook.title}",
          "isbn": "${this.input.placeholderBook.isbn}",
          "publisher": "${this.input.placeholderBook.publisher}",
          "year": ${this.input.placeholderBook.year}
          }`
        )
      ).subscribe(
        next => {
          this.input.placeholderBook = null;
          this.input.list = null;
          this.input.complete = true;
          this.router.navigate(['/add-book']);
        }
      );
    }
    else
    {
      this.message = '';
      this.errMessage = 'Es ist ein unerwarteter Fehler aufgetreten.';
      this.router.navigate(['/add-book']);
    }
  }
}
