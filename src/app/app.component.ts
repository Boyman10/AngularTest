import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import {any} from 'codelyzer/util/function';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Welcome test-project';
  seconds: number;
  counterSubscription: Subscription;

  constructor() {
  }
  ngOnInit(): void {

    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      (value: number) => {
        this.seconds = value;
      }
    );

  }

  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }
}
