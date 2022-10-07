import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cuentas } from './cuentas';

@Injectable({
  providedIn: 'root'
})

export class CuentasService {

  private baseURL = "http://localhost:8080/cuentas";
  constructor(private httpClient: HttpClient) { }

  getCuentasList() : Observable<Cuentas[]> {
    return this.httpClient.get<Cuentas[]>(`${this.baseURL}`);
  };

  createCuentas(cuentas: Cuentas) : Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, cuentas);
  }

  getCuentasById(id: number) : Observable<Cuentas> {
      return this.httpClient.get<Cuentas>(`${this.baseURL}/${id}`);
  }

  updateCuentas(id: number, cuentas: Cuentas) : Observable<Object> {
      return this.httpClient.put<Cuentas>(`${this.baseURL}/${id}`, cuentas);
  }

  deleteCuentas(id: number) : Observable <Object> {
      return this.httpClient.delete<Cuentas>(`${this.baseURL}/${id}`);
  }
}
