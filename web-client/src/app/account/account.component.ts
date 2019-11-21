import {Component, OnDestroy, OnInit} from '@angular/core';
import * as myModule from 'my-application/packages/my-application-mpp-lib/kotlin/my-application-mpp-lib.js';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {


  constructor() {
      const c = myModule.prin
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
  }

}
