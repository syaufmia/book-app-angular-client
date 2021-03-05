import { Component, OnInit } from '@angular/core';
import {Author} from '../../model/author';
import {InputService} from '../../service/input.service';
import {ApiService} from '../../service/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-select-author-to-delete',
  templateUrl: './select-author-to-delete.component.html',
  styleUrls: ['./select-author-to-delete.component.css']
})
export class SelectAuthorToDeleteComponent implements OnInit {

  errorMessage: boolean;
  message: string;
  list: Author[];
  selectedAuthorId: number;
  showPage: boolean;

  constructor(private input: InputService, private api: ApiService, private router: Router) {
  }

  ngOnInit(): void {
    this.message = '';
    if (this.input.placeholderAuthorList == null) {
      this.showPage = false;
      setTimeout( () => {
        this.router.navigate(['/search-author-to-delete']);
      }, 1500);
    }
    else {
      this.showPage = true;
      this.list = this.input.placeholderAuthorList;
    }
  }

  delete(): void {
    if (this.selectedAuthorId) {
      this.api.delete(
        `http://localhost:8080/book_manager_war_exploded/api/v1/author/id/${this.selectedAuthorId}`
      ).subscribe(
        next => {
          this.input.placeholderAuthorList = null;
          this.input.complete = true;
          this.router.navigate(['search-author-to-delete']);
        },
        error => {
          this.input.abort = true;
          this.router.navigate(['search-author-to-delete']);
        }
      );
    }
    else
    {
      this.input.abort = true;
      this.router.navigate(['search-author-to-delete']);
    }
  }

  goBack(): void {
    this.input.setAllBack();
    this.router.navigate(['search-author-to-delete']);
  }
}
