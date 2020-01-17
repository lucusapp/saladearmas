import { Component, OnInit } from '@angular/core';
import { WpserviceService } from 'src/app/services/wpservice.service';
import {Observable} from 'rxjs'
import {postInter} from '../../interfaces/post.interface'

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styles: []
})
export class AngularComponent implements OnInit {

  constructor(private dataWp : WpserviceService) { }

  posts: Observable<any[]>

  ngOnInit() {
    this.posts = this.dataWp.getPost()
  }

}
