import { Component, OnInit } from '@angular/core';
import {InputService} from '../../service/input.service';
import {ApiService} from '../../service/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-book-to-delete',
  templateUrl: './search-book-to-delete.component.html',
  styleUrls: ['./search-book-to-delete.component.css']
})
export class SearchBookToDeleteComponent implements OnInit {

  errorMessage: boolean;
  message: string;
  word: string;

  constructor(private input: InputService, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    if (this.input.abort) {
      this.errorMessage = true;
      this.message = 'Etwas ist schief gelaufen. Bitte versuche es erneut.';
    }
    else if ( this.input.complete) {
      this.errorMessage = false;
      this.message = 'Du hast das Buch erfolgreich gelöscht.';
    }
    this.input.setAllBack();
  }

  search(): void {
    if (this.word !== '' && this.word != null) {
      this.api
        .getBookList(`http://localhost:8080/book_manager_war_exploded/api/v1/search/book/${this.word.toLowerCase()}`)
        .subscribe(
          next => {
            this.input.placeholderBookList = next;
            if (this.input.placeholderBookList.length !== 0) {
              this.errorMessage = false;
              this.router.navigate(['select-book-to-delete']);
            }
            else {
              this.errorMessage = true;
              this.message = 'Es konnte leider kein Buch mit dem Suchbegriff gefunden werden.';
            }
          }
        );
    }
    else {
      this.errorMessage = true;
      this.message = 'Bitte gib etwas ein.';
    }
  }
}
