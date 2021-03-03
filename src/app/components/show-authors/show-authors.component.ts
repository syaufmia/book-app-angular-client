import { Component, OnInit } from '@angular/core';
import {Author} from '../../model/author';
import {ApiService} from '../../service/api.service';
import {StringTrimService} from '../../service/string-trim.service';

@Component({
  selector: 'app-show-authors',
  templateUrl: './show-authors.component.html',
  styleUrls: ['./show-authors.component.css']
})
export class ShowAuthorsComponent implements OnInit {

  authors: Author[];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getApi('http://localhost:8080/book_manager_war_exploded/api/v1/author').subscribe(
      element => {
        return this.authors = element;
      }
    );
  }

}
