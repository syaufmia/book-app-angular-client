import { Component, OnInit } from '@angular/core';
import {InputService} from '../../service/input.service';
import {Author} from '../../model/author';
import {ApiService} from '../../service/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-author',
  templateUrl: './search-author.component.html',
  styleUrls: ['./search-author.component.css']
})
export class SearchAuthorComponent implements OnInit {

  errMessage;
  message;
  name;


  constructor(private input: InputService, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    if (this.input.placeholderBook == null) {
      this.router.navigate(['/add-book']);
    }
  }

  search(): void {
    if (this.name !== '' && this.name != null) {
      this.api
        .getAuthorList(`http://localhost:8080/book_manager_war_exploded/api/v1/search/author/${this.name.toLowerCase()}`)
        .subscribe(
          next => {
            // console.log(next.length);
            // for (const item of next) {
            //   this.input.list.push(item);
            // }
            // console.log(`Länge: ${this.input.list.length}`, this.input.list);
            this.input.list = next;
            this.errMessage = '';
            this.router.navigate(['/select-author']);
          }
        );
    }
    else {
      this.errMessage = 'Bitte gib etwas ein.';
    }
  }
}
