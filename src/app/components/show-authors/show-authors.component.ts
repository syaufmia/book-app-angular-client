import { Component, OnInit } from '@angular/core';
import {Author} from '../../model/author';
import {DataService} from '../../service/data.service';
import {StringTrimService} from '../../service/string-trim.service';

@Component({
  selector: 'app-show-authors',
  templateUrl: './show-authors.component.html',
  styleUrls: ['./show-authors.component.css']
})
export class ShowAuthorsComponent implements OnInit {

  authors: Author[];
  constructor(private data: DataService, private trimmer: StringTrimService) { }

  ngOnInit(): void {

    this.data.getApi('http://localhost:8080/book_manager_war_exploded/api/v1/author').subscribe(
      element => {
        this.authors = element;
      }
    );
  }

}
