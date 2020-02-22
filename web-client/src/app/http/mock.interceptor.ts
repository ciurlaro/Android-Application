import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomHttpRequestBuilderService} from './custom-http-request-builder.service';

@Injectable()
export class MockInterceptor implements HttpInterceptor {

  constructor(private urlBuilderService: CustomHttpRequestBuilderService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const words = request.url.split('/');
    if (words[3] === 'api') {
      try {
        const builtUrlData = this.urlBuilderService.buildUrl(
          `/mock/${this.handleMockResponse(request, words.splice(4))}.json`,
          () => new HttpParams(),
          () => new HttpHeaders().set('Content-Type', 'application/json')
        );
        return next.handle(request.clone({
          method: 'GET',
          headers: builtUrlData.headers,
          url: builtUrlData.path,
          params: builtUrlData.params
        }));

      } catch (e) {
        console.error(request);
        console.error(e);
        return next.handle(request);
      }
    } else {
      return next.handle(request);
    }
  }


  handleMockResponse(request: HttpRequest<unknown>, words: string[]): string {
    switch (request.url) {
      case '/isAccountVerified':
        return 'verification_status_response.json';
      case '/isAccountSubscribed':
        return 'subscription_status_response.json';
      default:
        return singleOrMultipleResponse();
    }

    function singleOrMultipleResponse() {
      switch (words.length) {
        case 1:
          return lengthOneCase();
        case 2:
          return `${words[0]}_response`;
        default:
          return DefaultCase();
      }

      function lengthOneCase(): string {
        if (request.method === 'GET') {
          return `multiple_${words[0].split('?')[0]}s_response`;
        } else {
          return `${words[0]}_response`;
        }
      }

      function DefaultCase(): string {
        if (words[1] === 'search') {
          return `multiple_${words[0]}s_response`;
        } else {
          if (['game', 'tournament', 'registration', 'match', 'user'].includes(words[words.length - 1])) {
            return `${words[words.length - 1]}_response`;
          } else if (words[words.length - 1] === 'admin') {
            return 'user_response';
          } else {
            throw new Error('Request cannot be handled by the mock engine');
          }
        }
      }
    }

  }
}

