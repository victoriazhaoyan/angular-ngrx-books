import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { BookListComponent } from "./book-list/book-list.component"
import { BookCollectionComponent } from "./book-collection/book-collection.component"
import { booksReducer } from "./state/books.reducer";
import { StoreModule } from "@ngrx/store";
import { collectionReducer } from "./state/collection.reducer";

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({ books: booksReducer, collection: collectionReducer }),
    HttpClientModule
  ],
  declarations: [AppComponent, BookListComponent, BookCollectionComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
