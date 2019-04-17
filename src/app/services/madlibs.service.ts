import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { MadlibTemplate } from "../interfaces/madlib-template.interface"
import { Observable } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class MadlibsService {
  constructor(private http: HttpClient) {}

  getNewMadlib(): Observable<MadlibTemplate> {
    return this.http.get<MadlibTemplate>(
      "http://madlibz.herokuapp.com/api/random?minlength=5&maxlength=25"
    )
  }
}
