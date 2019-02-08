import { Component, OnInit } from "@angular/core";

import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { ICourse } from "../models/course.model";
import { AppState } from "./../app.state";
import * as CustomerActions from "../actions/course.actions";

@Component({
  selector: "app-read",
  templateUrl: "./read.component.html",
  styleUrls: ["./read.component.scss"]
})
export class ReadComponent implements OnInit {
  courses$: Observable<ICourse[]>;

  constructor(private store: Store<AppState>) {
    this.courses$ = this.store.select("course");
  }

  deleteCourse(index: number) {
    this.store.dispatch(new CustomerActions.RemoveCourse(index));
  }

  ngOnInit() {}
}
