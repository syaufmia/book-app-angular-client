import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppRoutingModule} from '../../app-routing.module';
import {InputService} from '../../service/input.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  errMessage = '';
  inputTitle = '';
  inputISBN = '';
  inputYear = 2020;
  inputPublisher = '';
  message = '';

  constructor(private inp: InputService, private router: Router) { }

  ngOnInit(): void {
  }

  formFilled(): void {
    if (this.inputTitle !== '' && this.inputPublisher !== '' && this.inputISBN !== '' ) {
      this.inputTitle = this.inp.inputTitle;
      this. inputISBN = this.inp.inputISBN;
      this.inputPublisher = this.inp.inputPublisher;
      this.inputYear = this.inp.inputYear;
      this.errMessage = '';
      this.router.navigate(['/search-author']);
    }
    else {
      this.errMessage = 'Bitte fülle alle Felder aus.';
      this.message = '';
    }
  }

}
