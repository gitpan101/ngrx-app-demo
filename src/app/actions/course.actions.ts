import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { ICourse } from "./../models/course.model";

export const LOAD_COURSE = "[COURSE] Load";
export const LOAD_COURSE_SUCCESS = "[COURSE] Load Success";
export const ADD_COURSE = "[COURSE] Add";
export const REMOVE_COURSE = "[COURSE] Remove";

export class LoadCourse implements Action {
  readonly type = LOAD_COURSE;
}

export class LoadCourseSuccess implements Action {
  readonly type = LOAD_COURSE_SUCCESS;

  constructor(public payload: ICourse[]) {}
}

export class AddCourse implements Action {
  readonly type = ADD_COURSE;

  constructor(public payload: ICourse) {}
}

export class RemoveCourse implements Action {
  readonly type = REMOVE_COURSE;

  constructor(public payload: number) {}
}

export type Actions = LoadCourse | LoadCourseSuccess | AddCourse | RemoveCourse;
