import {Inject, Injectable} from '@angular/core';
import {hostToken, portToken, protocolToken} from '../../environments/environment.common';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {Url} from '../data/datasources/arena-tournament-endpoints';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpRequestBuilderService {

  constructor(
    @Inject(protocolToken) private protocol: string,
    @Inject(hostToken) private host: string,
    @Inject(portToken) private port: number
  ) {
  }

  buildUrl(
    encodedPath: string,
    paramsBuilder: (() => HttpParams) = () => new HttpParams(),
    headersBuilder: (() => HttpHeaders) = () => new HttpHeaders()
  ): Url {

    const params = paramsBuilder();
    const headers = headersBuilder();
    let finalEncodedPath = encodedPath;
    if (finalEncodedPath[0] !== '/') {
      finalEncodedPath = `/${finalEncodedPath}`;
    }
    return {
      path: `${this.protocol}://${this.host}${this.port !== 80 ? `:${this.port}` : ''}${finalEncodedPath}`,
      params,
      headers
    };

  }
}
