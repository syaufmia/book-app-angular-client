import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowBooksComponent} from './components/show-books/show-books.component';
import {ShowAuthorsComponent} from './components/show-authors/show-authors.component';
import {AddAuthorComponent} from './components/add-author/add-author.component';
import {AddBookComponent} from './components/add-book/add-book.component';
import {SearchAuthorComponent} from './components/search-author/search-author.component';
import {SelectAuthorComponent} from './components/select-author/select-author.component';


const routes: Routes = [
  { path: 'books', component: ShowBooksComponent },
  { path: 'authors', component: ShowAuthorsComponent },
  { path: 'add-author', component: AddAuthorComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'search-author', component: SearchAuthorComponent },
  { path: 'select-author', component: SelectAuthorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
