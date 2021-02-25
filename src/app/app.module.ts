import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ShowBooksComponent } from './components/show-books/show-books.component';
import { ShowAuthorsComponent } from './components/show-authors/show-authors.component';

import { DataService} from './service/data.service';
import { AddAuthorComponent } from './components/add-author/add-author.component';
import {FormsModule} from '@angular/forms';
import { AddBookComponent } from './components/add-book/add-book.component';
import { SearchAuthorComponent } from './components/search-author/search-author.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ShowBooksComponent,
    ShowAuthorsComponent,
    AddAuthorComponent,
    AddBookComponent,
    SearchAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
