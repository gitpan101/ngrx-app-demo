import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import dbJson from "./db/db.json";
import { ICourse } from "./models/course.model";

@Injectable({
  providedIn: "root"
})
export class AppService {
  _uri: string = "./db/db.json";
  course: ICourse[];

  constructor(private _http: HttpClient) {}

  getCourseList(): Observable<ICourse[]> {
    return new Observable<ICourse[]>(observer => {
      observer.next(dbJson);

      observer.complete();
    });
  }
}
