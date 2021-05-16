import { Component, OnInit, VERSION } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppService } from './app.service';
import {
  getData,
  incrementDecrementCount,
  postTableAction
} from './store/action';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  headerTitle = '';
  count;
  frameParam = [
    {
      userId: 1,
      id: 1020,
      title: 'added',
      body: 'new record inserted'
    },
    {
      userId: 1,
      id: 9,
      title: 'optio reprehenderit',
      body: 'rem eveniet architecto'
    }
  ];
  constructor(private store: Store, private service: AppService) {}
  ngOnInit() {
    this.store.subscribe((value: any) => {
      console.log(value);
      this.count = value.increment.count;
    });
    this.store.dispatch(getData());
  }
  action() {}

  countFunc(type: string) {
    this.store.dispatch(incrementDecrementCount({ countType: type }));
  }

  addRecord() {
    this.store.dispatch(postTableAction({ params: this.frameParam[0] }));
    // this.service.postMethod(this.frameParam[0]).subscribe(response => {
    //   console.log(response);
    // });
  }
}
