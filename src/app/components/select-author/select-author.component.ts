import {Component, OnInit} from '@angular/core';
import {InputService} from '../../service/input.service';
import {Author} from '../../model/author';
import {ApiService} from '../../service/api.service';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';

@Component({
  selector: 'app-select-author',
  templateUrl: './select-author.component.html',
  styleUrls: ['./select-author.component.css']
})
export class SelectAuthorComponent implements OnInit {

  // TODO: errMessage : boolean
  errMessage = '';
  message = '';
  list: Author[];
  selectedAuthorId: number;
  searchEmpty = false;
  showPage: boolean;

  constructor(private input: InputService, private api: ApiService, private router: Router) {
    this.router.events.subscribe((event) => {
      console.log(event);
    });
  }

  ngOnInit(): void {
    if (this.input.placeholderAuthorList == null || this.input.placeholderBook == null) {
      this.showPage = false;
      setTimeout(() => {
        this.router.navigate(['add-book']);
      }, 1500);  // 5s
    }
    else {
      this.showPage = true;
      this.list = this.input.placeholderAuthorList;
      if (this.list.length === 0) {
        this.searchEmpty = true;
        this.errMessage = 'Es gibt keinen Autor mit diesem Namen.';
      }
    }
  }

  addAuthor(): void {
    this.input.fromBook = true;
    this.router.navigate(['add-author']);
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
          this.input.setAllBack();
          this.input.placeholderAuthorList = null;
          this.router.navigate(['add-book']);
        },
        error => {
          catchError(error);
          this.input.setAllBack();
          this.input.abort = true;
          this.input.placeholderAuthorList = null;
          if (error.status === 409) {
            this.input.placeholderMessage = 'Ein Buch mit dieser ISBN existiert bereits.';
          }
          else {
            this.input.placeholderMessage = 'Ein unbekannter Fehler ist aufgetreten. Bitte versuche es erneut.';
          }
          this.router.navigate(['add-book']);
        }
      );
    }
    else
    {
      this.message = '';
      this.errMessage = 'Es ist ein unerwarteter Fehler aufgetreten.';
      this.router.navigate(['add-book']);
    }
  }
}
