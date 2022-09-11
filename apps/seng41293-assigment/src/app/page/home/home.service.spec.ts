import {TestBed} from '@angular/core/testing';

import {HomeService} from './home.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('HomeService', () => {
  let service: HomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HomeService]
    })
    service = TestBed.inject(HomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getData function', () => {
    expect(service.getPosts()).toBeTruthy();
  });

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(HomeService);
  // });

  // it('should be created', () => {
  //   service.getPosts();
  //   expect(service).toBeTruthy();
  // });

});
