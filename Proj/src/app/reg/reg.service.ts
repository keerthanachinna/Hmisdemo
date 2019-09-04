import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class regService {
  constructor(private http: HttpClient) { }

  urlSaveReg = 'http://localhost:2019/reg';




  public saveReg(reg) {
    
      return this.http.post<any>(this.urlSaveReg,reg);      
    }
    // else{
    //   console.log("ghjk");
    // }
    // console.log( "return this.http.post<any>(this.urlSaveReg,reg")") ;
  }
   