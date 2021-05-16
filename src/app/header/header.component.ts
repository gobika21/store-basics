import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { toggleAction } from '../store/action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isToggle;
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.subscribe((value: any) => {
      this.isToggle = value.toggle.toggleState;
      // console.log(value);
    });
  }
  eventToggle() {
    this.store.dispatch(toggleAction({ isToggle: this.isToggle }));
  }
}
