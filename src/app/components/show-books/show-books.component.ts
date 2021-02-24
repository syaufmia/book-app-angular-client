import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {DataService} from '../../service/data.service';


@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.css']
})
export class ShowBooksComponent implements OnInit {
  books: Book[];

  constructor(private data: DataService ) { }

  ngOnInit(): void {

    this.data.getApi('http://localhost:8080/book_manager_war_exploded/api/v1/book').subscribe(
      body => {
        this.books = body;
      }
    );
}

}
