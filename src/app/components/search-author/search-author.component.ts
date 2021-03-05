import { Component, OnInit } from '@angular/core';
import {InputService} from '../../service/input.service';
import {ApiService} from '../../service/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-author',
  templateUrl: './search-author.component.html',
  styleUrls: ['./search-author.component.css']
})
export class SearchAuthorComponent implements OnInit {

  // TODO: errorMessage: boolean
  errMessage;
  message;
  name;
  showPage: boolean;


  constructor(private input: InputService, private api: ApiService, private router: Router) {
    this.router.events.subscribe((event) => {
      console.log(event);
    });
  }

  ngOnInit(): void {

    if (this.input.placeholderBook == null) {
      setTimeout(() =>
        {
          this.showPage = false;
          this.router.navigate(['add-book']);
        },
        1500
      );
    }
    else {
      this.showPage = true;
    }
  }

  search(): void {
    if (this.name !== '' && this.name != null) {
      this.api
        .getAuthorList(`http://localhost:8080/book_manager_war_exploded/api/v1/search/author/${this.name.toLowerCase()}`)
        .subscribe(
          next => {
            this.input.placeholderAuthorList = next;
            this.errMessage = '';
            this.router.navigate(['select-author']);
          }
        );
    }
    else {
      this.errMessage = 'Bitte gib etwas ein.';
    }
  }
}
