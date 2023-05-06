import { Component, OnInit } from '@angular/core';
import {DataService} from "../../utils/data.service";
export interface News {
  title: string;
  content: string;
  date?: string;
  author?: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public news: News[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.news = this.dataService.news;
  }

}
