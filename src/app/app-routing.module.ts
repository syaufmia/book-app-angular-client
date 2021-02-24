import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShowBooksComponent} from './components/show-books/show-books.component';
import {ShowAuthorsComponent} from './components/show-authors/show-authors.component';


const routes: Routes = [
  { path: 'books', component: ShowBooksComponent },
  { path: 'authors', component: ShowAuthorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
