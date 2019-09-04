import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class billingService {
  constructor(private http: HttpClient) { }

  urlSaveItem = 'http://localhost:2019/bill';

  urlfetchItem = 'http://localhost:2019/fetchallbill';
  urlfetch = 'http://localhost:2019/fetchstacklist/';
urlfetchbasename='http://localhost:2019/fetchstacklist/';
urlfetchItemname='http://localhost:2019/fetchallbrand';

urlfechbillidbase='http://localhost:2019/fetchbybilliddemo/';

urlfetchItemf = 'http://localhost:2019/fetchall';

urlSaveItemnames='http://localhost:2019/brand';

urlfetchItemnamef='http://localhost:2019/fetchallbrand';


urlfetchItembyid='http://localhost:2019/fetchbybrandid/';

urlupload='http://localhost:2019/uploadFile/';
  public saveItem(bill) {
    
      return this.http.post<any>(this.urlSaveItem,bill);      
    }
    
    public fetchItem(){
      console.log( this.http.get<any>(this.urlfetchItem))
      return this.http.get<any>(this.urlfetchItem);   
    }
    public fetch(id){
      var id;
      console.log("qqwee",id.id);
      console.log( this.http.get<any>(this.urlfetch))
      return this.http.get<any>(this.urlfetchItembyid+id.id);   
    }
    public fetchbyid(id){
      
      return this.http.get<any>(this.urlfetchItembyid+id);   
    }
    public fetchbasename(name){
     
      // console.log("hsgdjsf",name.name);
      console.log( this.http.get<any>(this.urlfetchbasename))
      return this.http.get<any>(this.urlfetchbasename+name);   
    }

    public fetchItemname(){
      console.log( this.http.get<any>(this.urlfetchItemname))
      return this.http.get<any>(this.urlfetchItemname);   
    }
    public fetchbyidbillbase(id){
      
      return this.http.get<any>(this.urlfechbillidbase+id);   
    }
  }
 
