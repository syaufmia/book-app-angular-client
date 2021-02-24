import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowBooksComponent} from './components/show-books/show-books.component';
import {ShowAuthorsComponent} from './components/show-authors/show-authors.component';
import {AddAuthorComponent} from './components/add-author/add-author.component';


const routes: Routes = [
  { path: 'books', component: ShowBooksComponent },
  { path: 'authors', component: ShowAuthorsComponent},
  { path: 'add-author', component: AddAuthorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
