import { Component, OnInit } from "@angular/core";

import { Store } from "@ngrx/store";

import * as CourseActions from "../actions/course.actions";
import { ICourse } from "../models/course.model";
import { AppState } from "./../app.state";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"]
})
export class CreateComponent implements OnInit {
  course: ICourse;

  constructor(private store: Store<AppState>) {}

  addCourse(name: string, url: string) {
    this.course = {
      name,
      url
    };

    this.store.dispatch(new CourseActions.AddCourse(this.course));
  }

  ngOnInit() {}
}
