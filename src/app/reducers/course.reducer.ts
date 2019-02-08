import { Action } from "@ngrx/store";
import { ICourse } from "../models/course.model";
import * as CourseActions from "../actions/course.actions";

const initialState: ICourse = {
  name: "Initial Tutorial",
  url: "https://stackoverflow.com"
};

export function courseReducer(
  state: ICourse[] = [initialState],
  action: CourseActions.Actions
) {
  switch (action.type) {
    case CourseActions.ADD_COURSE:
      return [...state, action.payload];

    case CourseActions.REMOVE_COURSE:
      return [...state].filter((course, index) => index !== action.payload);

    default:
      return state;
  }
}
