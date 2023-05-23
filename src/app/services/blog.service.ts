import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {GLOBAL} from "./GLOBAL";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
 public url: string;
  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
   }
}
