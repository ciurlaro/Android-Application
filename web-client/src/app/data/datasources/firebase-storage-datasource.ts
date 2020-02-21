import {Observable} from 'rxjs';

export abstract class FirebaseStorageDatasource {
  abstract uploadFile(data: Uint8Array, path: string): Observable<boolean>;

  abstract getFileUrl(path: string): Observable<string>;
}
