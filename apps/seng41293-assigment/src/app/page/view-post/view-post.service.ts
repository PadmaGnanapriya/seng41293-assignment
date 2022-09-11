import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({providedIn: 'root'})
export class ViewPostService {
  constructor(private httpClient: HttpClient) {
  }

  getPostById(id: string) {
    return this.httpClient.get<Post>(
      'https://jsonplaceholder.typicode.com/posts/' + id
    );
  }
}
