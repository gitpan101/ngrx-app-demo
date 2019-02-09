import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { AppService } from "../app.service";
import { Observable, of } from "rxjs";
import { switchMap, map } from "rxjs/operators";

import * as CourseActions from "../actions/course.actions";
import { ICourse } from "../models/course.model";

@Injectable()
export class CourseEffects {
  constructor(private _actions: Actions, private _appService: AppService) {}

  @Effect()
  loadCourses: Observable<Action> = this._actions.pipe(
    ofType<CourseActions.LoadCourse>(CourseActions.LOAD_COURSE),
    switchMap((actions: CourseActions.LoadCourse) =>
      this._appService
        .getCourseList()
        .pipe(
          map(
            (courses: ICourse[]) => new CourseActions.LoadCourseSuccess(courses)
          )
        )
    )
  );
}
