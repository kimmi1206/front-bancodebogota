import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from '../shared/models/user';
import * as jsonData from '../assets/data.json';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public queryData: BehaviorSubject<any>;
  usersList: User[] = (jsonData as any).default;

  constructor(private readonly http: HttpClient) {
    this.queryData = new BehaviorSubject<any>({});
  }

  getDocument(docNumber: string, docType: string) {
    if (!docNumber || !docType) {
      return;
    }
    return this.http.get(
      `${environment.URL_BASE}/users?docNumber=${docNumber}&docType=${docType}`
    );
  }

  getDocumentMock(docNumber: string, docType: string): User | undefined {
    if (!docNumber || !docType) {
      return;
    }
    return this.usersList.find(
      (user) =>
        user.tipoDocumento === docType && user.numeroDocumento === docNumber
    );
  }


}
