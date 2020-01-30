import { Component, OnInit } from '@angular/core';
import { WpserviceService } from 'src/app/services/wpservice.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styles: []
})
export class PostListComponent implements OnInit {

  constructor(private dataWp : WpserviceService){}

  posts: any[]=[]

  ngOnInit() {
    this.dataWp.getPost().subscribe(data=>{
      console.log(data)
      this.posts=data
    })
    

}

}
