import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampService {
  MyServer = 'http://localhost:3000/users'
  constructor(private http: HttpClient) { }

  getAllData(): Observable<any>{
    return this.http.get(this.MyServer)
  }

  deleteData(id: Number): Observable<any>{
    console.log(id)
    const itemID = this.MyServer + "/" + id
    return this.http.delete<any>(itemID)
  }

  addData(name:string, email:string): Observable<any>{
    // console.log(name, email)
    return this.http.post<any>(this.MyServer, {name,email})
  }

  updData(id: Number,name:string, email:string): Observable<any>{
    console.log(id)
    const itemID = this.MyServer + "/" + id
    return this.http.put<any>(itemID, {name,email})
  }
}
