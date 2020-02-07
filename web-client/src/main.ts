import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

import 'my-application-kodein-di'

const JsDependencyContainer = com.myapplication.example.jscontainer.JsDependencyContainer;

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

let lol = new JsDependencyContainer("", "", 112);
