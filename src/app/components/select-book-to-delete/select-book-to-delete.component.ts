import { Component, OnInit } from '@angular/core';
import {Author} from '../../model/author';
import {InputService} from '../../service/input.service';
import {ApiService} from '../../service/api.service';
import {Router} from '@angular/router';
import {Book} from '../../model/book';

@Component({
  selector: 'app-select-book-to-delete',
  templateUrl: './select-book-to-delete.component.html',
  styleUrls: ['./select-book-to-delete.component.css']
})
export class SelectBookToDeleteComponent implements OnInit {

  errorMessage: boolean;
  message: string;
  list: Book[];
  selectedIsbn: number;

  constructor(private input: InputService, private api: ApiService, private router: Router) {
  }

  ngOnInit(): void {
    this.message = '';
    if (this.input.placeholderBookList == null) {
      // TODO: etwas ist schiefgelaufen, bitte kurz warten & 2-3 Sekunden später navigate
      this.router.navigate(['search-book-to-delete']);
    }
    else {
      this.list = this.input.placeholderBookList;
    }
  }

  delete(): void {
    if (this.selectedIsbn) {
      this.api.delete(
        `http://localhost:8080/book_manager_war_exploded/api/v1/book/${this.selectedIsbn}`
      ).subscribe(
        next => {
          this.input.placeholderBookList = null;
          this.input.complete = true;
          this.router.navigate(['search-book-to-delete']);
        },
        error => {
          this.input.abort = true;
          this.router.navigate(['search-book-to-delete']);
        }
      );
    }
    else
    {
      this.input.abort = true;
      this.router.navigate(['search-book-to-delete']);
    }
  }

  goBack(): void {
    this.input.setAllBack();
    this.router.navigate(['search-book-to-delete']);
  }

}
