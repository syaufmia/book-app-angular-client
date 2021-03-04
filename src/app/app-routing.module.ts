import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowBooksComponent} from './components/show-books/show-books.component';
import {ShowAuthorsComponent} from './components/show-authors/show-authors.component';
import {AddAuthorComponent} from './components/add-author/add-author.component';
import {AddBookComponent} from './components/add-book/add-book.component';
import {SearchAuthorComponent} from './components/search-author/search-author.component';
import {SelectAuthorComponent} from './components/select-author/select-author.component';
import {SearchAuthorToDeleteComponent} from './components/search-author-to-delete/search-author-to-delete.component';
import {SelectAuthorToDeleteComponent} from './components/select-author-to-delete/select-author-to-delete.component';
import {SearchBookToDeleteComponent} from './components/search-book-to-delete/search-book-to-delete.component';
import {SelectBookToDeleteComponent} from './components/select-book-to-delete/select-book-to-delete.component';


const routes: Routes = [
  { path: 'books', component: ShowBooksComponent },
  { path: 'authors', component: ShowAuthorsComponent },
  { path: 'add-author', component: AddAuthorComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'search-author', component: SearchAuthorComponent },
  { path: 'select-author', component: SelectAuthorComponent },
  { path: 'search-author-to-delete', component: SearchAuthorToDeleteComponent },
  { path: 'select-author-to-delete', component: SelectAuthorToDeleteComponent },
  { path: 'search-book-to-delete', component: SearchBookToDeleteComponent },
  { path: 'select-book-to-delete', component: SelectBookToDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
