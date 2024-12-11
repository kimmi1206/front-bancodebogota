import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Cliente } from '../shared/models/cliente';
import * as jsonData from '../assets/data.json';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  public queryData: BehaviorSubject<any>;
  clientsList: Cliente[] = (jsonData as any).default;

  constructor(private readonly http: HttpClient) {
    this.queryData = new BehaviorSubject<any>({});
  }

  getDocument(docNumber: string, docType: string) {
    if (!docNumber || !docType) {
      return;
    }
    return this.http.get(
      `${environment.URL_BASE}/clients?docNumber=${docNumber}&docType=${docType}`
    );
  }

  getDocumentMock(docNumber: string, docType: string): Cliente | undefined {
    if (!docNumber || !docType) {
      return;
    }
    return this.clientsList.find(
      (client) =>
        client.tipoDocumento === docType && client.numeroDocumento === docNumber
    );
  }


}
