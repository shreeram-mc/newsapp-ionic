import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  data:any;

  ngOnInit(): void {
    this.fetchNews();
  }

  constructor(
    private newsService:NewsService, private router:Router){}

  fetchNews()  {
    this.newsService.getData('top-headlines?country=us').subscribe(data=>
      {       
       this.data = data;
      });
  }

  getSingle(article){
    console.log("i came to get single");
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }
  
}
