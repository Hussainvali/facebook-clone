import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private ApiService:ApiService) { }

  postList:any;
  total_records:any;
  IMAGE_URI = environment.IMAGE_URI;

  ngOnInit(): void {
    this.getUserPosts()
  }

  getUserPosts(){
    this.ApiService.getAuth('user/feed?page=1').subscribe((result:any) => {
      if(result['status'] === 'success'){
        this.postList=result['data']['post_list'];
        this.total_records=result['data']['count']
        alert("post fetched successfully")
      }else{
        alert(result.message);
      }
    });

  }

}
