import {Component, OnDestroy, OnInit} from '@angular/core';
import JsDependencyContainer = com.example.myapplication.jsbindings.JsDependencyContainer;


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {


  constructor() {
    new JsDependencyContainer()
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

}
