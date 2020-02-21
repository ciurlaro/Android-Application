import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchTournamentFlowService {

  private subject = new Subject<string>();

  getFlow(): Observable<string> {
    return this.subject.asObservable();
  }

  publish(text: string) {
    this.subject.next(text);
  }
}
