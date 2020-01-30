import { Component, OnInit } from '@angular/core';
import { WpserviceService } from 'src/app/services/wpservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',

})
export class PostComponent implements OnInit {

  constructor(private dataWp : WpserviceService){}

  posts: any[]=[]

  ngOnInit() {
    this.dataWp.getPost().subscribe(data=>{
      console.log(data)
      this.posts=data
    })
    

}
}

