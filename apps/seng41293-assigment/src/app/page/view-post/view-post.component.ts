import {Component, OnInit} from '@angular/core';
import {Post, ViewPostService} from "./view-post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'seng41293-assignment-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss'],
})
export class ViewPostComponent implements OnInit {
  public post: Post | undefined;
  public isOpenDrawer = false;
  public id: string;
  public isLoading = true;


  constructor(private viewPostService: ViewPostService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.viewPostService.getPostById(this.id).pipe().subscribe(value => {
        this.post = value;
        this.isLoading =false;
      },
      () => {
        this.isLoading =false;
      }
    );
  }

  ngOnInit(): void {
  }

  onClickToggle() {
    this.isOpenDrawer = !this.isOpenDrawer
  }
}
