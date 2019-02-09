import { Component } from "@angular/core";
import { Store } from "@ngrx/store";

import { AppService } from "./app.service";
import { AppState } from "./app.state";

import * as CoustomerActions from "./actions/course.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ngrxApp01";
}
