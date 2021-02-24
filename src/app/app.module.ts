import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ShowBooksComponent } from './components/show-books/show-books.component';
import { ShowAuthorsComponent } from './components/show-authors/show-authors.component';

import { DataService} from './service/data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ShowBooksComponent,
    ShowAuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
