import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
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

  getDocument(docType: string, docNumber: string): Observable<any> {
    if (!docType || !docNumber) {
      return of(null);
    }

    return this.http.get(
      `${environment.URL_BASE}/clientes/buscar?tipoDocumento=${docType}&numeroDocumento=${docNumber}`
    );

  }

  getDocumentMock(docType: string, docNumber: string): Observable<any> {
    if (!docType || !docNumber) {
      return of(null);
    }

    return of(this.clientsList.find(
      (client) =>
        client.tipoDocumento === docType && client.numeroDocumento === docNumber
    ));
  }


}
