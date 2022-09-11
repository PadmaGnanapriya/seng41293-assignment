import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HomeService, Post} from "./home.service";

@Component({
  selector: 'seng41293-assignment-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public post$: Observable<Post[]> | undefined;
  public isOpenDrawer = false;

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
  }

  onClickToggle() {
    this.isOpenDrawer = !this.isOpenDrawer
  }

  fetchData() {
    this.post$ = this.homeService.getPosts().pipe();
  }
}
