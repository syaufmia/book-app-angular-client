import { Component, OnInit } from '@angular/core';
import {InputService} from '../../service/input.service';
import {Author} from '../../model/author';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-search-author',
  templateUrl: './search-author.component.html',
  styleUrls: ['./search-author.component.css']
})
export class SearchAuthorComponent implements OnInit {

  errMessage = '';
  message = '';
  name = '';
  list: Author[] = [];


  constructor(private inp: InputService, private data: DataService) { }

  ngOnInit(): void {
  }

  search(): void {
    if (this.name !== '') {
      this.data.getApi(`http://localhost:8080/book_manager_war_exploded/api/v1/search/author/${this.name.toLowerCase()}`)
        .subscribe(
          body => {
            this.list = body;
          }
        );
      this.errMessage = '';
      console.log(this.list);
    }
    else {
      this.errMessage = 'Bitte gib etwas ein.';
    }
  }

}
