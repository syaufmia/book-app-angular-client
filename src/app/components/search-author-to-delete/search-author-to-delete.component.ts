import { Component, OnInit } from '@angular/core';
import {InputService} from '../../service/input.service';
import {ApiService} from '../../service/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-author-to-delete',
  templateUrl: './search-author-to-delete.component.html',
  styleUrls: ['./search-author-to-delete.component.css']
})
export class SearchAuthorToDeleteComponent implements OnInit {

  errorMessage: boolean;
  message: string;
  name: string;


  constructor(private input: InputService, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    if (this.input.abort) {
      this.errorMessage = true;
      this.message = 'Etwas ist schief gelaufen. Bitte versuche es erneut.';
    }
    else if ( this.input.complete) {
      this.errorMessage = false;
      this.message = 'Du hast den Autor erfolgreich gelöscht.';
    }
    this.input.setAllBack();
  }

  search(): void {
    if (this.name !== '' && this.name != null) {
      this.api
        .getAuthorList(`http://localhost:8080/book_manager_war_exploded/api/v1/search/author/${this.name.toLowerCase()}`)
        .subscribe(
          next => {
            this.input.placeholderAuthorList = next;
            if (this.input.placeholderAuthorList.length !== 0) {
              this.errorMessage = false;
              this.router.navigate(['/select-author-to-delete']);
            }
            else {
              this.errorMessage = true;
              this.message = 'Es konnte leider kein Autor mit dem Namen gefunden werden.';
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
