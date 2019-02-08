import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { StoreModule } from "@ngrx/store";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { courseReducer } from "./reducers/course.reducer";
import { ReadComponent } from "./read/read.component";
import { CreateComponent } from "./create/create.component";

@NgModule({
  declarations: [AppComponent, ReadComponent, CreateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ course: courseReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
