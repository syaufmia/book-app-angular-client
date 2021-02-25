import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service';
import {Author} from '../../model/author';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  inputFirst = '';
  inputLast: '';
  message = '';
  statusCode = 0;

  constructor(private data: DataService) { }

  ngOnInit(): void {}

  addAuthor(): void {
    if (this.inputFirst !== '' && this.inputLast !== '' && this.inputFirst != null && this.inputLast != null) {
      console.log(
        this.data.postApi(
          'http://localhost:8080/book_manager_war_exploded/api/v1/author' ,
          JSON.stringify(new Author(this.inputFirst, this.inputLast))
        ).subscribe( w => this.statusCode = w.status)
      );
      console.log(this.statusCode);
      this.message = '';
      this.inputLast = '';
      this.inputLast = '';
    }
    else {
      this.message = 'Ein Fehler ist aufgetreten.';
    }
  }

}
