import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {postInter} from '../interfaces/post.interface';
import {Observable} from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class WpserviceService {

  constructor(private http:HttpClient) { }

  urlApi='https://saladearmas.000webhostapp.com/wp-json/wp/v2/posts?_embed'

  getPost(): Observable<any>{
    return this.http.get(
      this.urlApi,
      {
      params:{
        per_page:'9'
      }
    }
    )
  }
}
