import {InjectionToken} from '@angular/core';

export const firebaseConfig = {
  apiKey: 'AIzaSyBxp-apzgy-EsK_wwrFh3rJPI32hjUWSA4',
  authDomain: 'unito-taas-project.firebaseapp.com',
  databaseURL: 'https://unito-taas-project.firebaseio.com',
  projectId: 'unito-taas-project',
  storageBucket: 'unito-taas-project.appspot.com',
  messagingSenderId: '848647809387',
  appId: '1:848647809387:web:d35677d9266210b8d7c42e',
  measurementId: 'G-6HSSE0RCW1'
};

export const facebookAppId = '660604807780881';

export const protocolToken = new InjectionToken('protocolToken');
export const hostToken = new InjectionToken('hostToken');
export const portToken = new InjectionToken('portToken');
