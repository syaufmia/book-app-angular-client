import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ShowBooksComponent } from './components/show-books/show-books.component';
import { ShowAuthorsComponent } from './components/show-authors/show-authors.component';

import { ApiService} from './service/api.service';
import { AddAuthorComponent } from './components/add-author/add-author.component';
import {FormsModule} from '@angular/forms';
import { AddBookComponent } from './components/add-book/add-book.component';
import { SearchAuthorComponent } from './components/search-author/search-author.component';
import { SelectAuthorComponent } from './components/select-author/select-author.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ShowBooksComponent,
    ShowAuthorsComponent,
    AddAuthorComponent,
    AddBookComponent,
    SearchAuthorComponent,
    SelectAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
