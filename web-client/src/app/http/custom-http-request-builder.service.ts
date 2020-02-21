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
    paramsBuilder: ((params: HttpParams) => void) = (_) => {
    },
    headersBuilder: ((headers: HttpHeaders) => void) = (_) => {
    }
  ): Url {
    const params = new HttpParams();
    paramsBuilder(params);
    const headers = new HttpHeaders();
    headersBuilder(headers);
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
