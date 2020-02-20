import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) { }

  url = "http://c1300044.ferozo.com/";

  getPlanes(): Observable<any> {
    return this.http.get(this.url + 'getListado.php');
  }

  addProduct(plan, periodoo): Observable<any> {
    let llamada = `plan=${plan}&periodo=${periodoo}`;
    return this.http.get(this.url + 'agregarItem.php?' + llamada);
  }

  shoppingCart(): Observable<any> {
    return this.http.get(this.url + 'getListadoCarrito.php');
  }

  //coloque un get porque no tengo permiso para delete
  deleteProduct(id_producto): Observable<any> {
    let llamada = `id_producto=${id_producto}`;
    return this.http.get(this.url + 'removerItem.php?' + llamada);
  }

}