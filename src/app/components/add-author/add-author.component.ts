import { Component, OnInit } from '@angular/core';
import {DataService} from '../../service/data.service';
import {Author} from '../../model/author';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  inputFirst = '';
  inputLast: '';
  errMessage = '';
  message = '';

  constructor(private data: DataService) { }

  ngOnInit(): void {}

  addAuthor(): void {
    if (this.inputFirst !== '' && this.inputLast !== '' && this.inputFirst != null && this.inputLast != null) {
      console.log(
        this.data.postApi(
          'http://localhost:8080/book_manager_war_exploded/api/v1/author' ,
          JSON.stringify(new Author(this.inputFirst, this.inputLast))
        ).subscribe( )
      );
      this.message = `${this.inputFirst} ${this.inputLast} wurde hinzugefügt.`;
      this.errMessage = '';
      this.inputLast = '';
      this.inputLast = '';
    }
    else {
      this.errMessage = 'Ein Fehler ist aufgetreten.';
    }
  }

}
