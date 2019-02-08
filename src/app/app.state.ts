import { ICourse } from "./models/course.model";

export interface AppState {
  readonly course: ICourse[];
}
