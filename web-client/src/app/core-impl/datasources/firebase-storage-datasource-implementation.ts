import {FirebaseStorageDatasource} from '../../data/datasources/firebase-storage-datasource';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirebaseStorageDatasourceImplementation implements FirebaseStorageDatasource {

  constructor(private firebaseStorage: AngularFireStorage) {
  }

  getFileUrl(path: string): Observable<string> {
    return this.firebaseStorage.ref(path).getDownloadURL().pipe(
      map((value) => {
        if (typeof value === 'string' || value instanceof String) {
          return value as string;
        } else {
          throw Error('js suck, long live to Kotlin!');
        }
      })
    );
  }

  uploadFile(data: Uint8Array, path: string): Observable<boolean> {
    return new Observable(subscriber => {
      this.firebaseStorage.ref(path).put(data).then((task) => {
        subscriber.next(true);
        subscriber.complete();
      });
    });
  }

}
