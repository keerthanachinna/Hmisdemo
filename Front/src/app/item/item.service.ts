import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class itemService {
  constructor(private http: HttpClient) { }

  urlSaveItem = 'http://localhost:2019/item';
  urlSaveItemm = 'http://localhost:2019/bill';
  urlfetchItem = 'http://localhost:2019/fetchall';
  
   urlfetchItembyidfull = 'http://localhost:2019/fetchbybackiddemo/';
urlSaveItemname='http://localhost:2019/brand';
urledit='http://localhost:2019/edit';
urlfetchItemname='http://localhost:2019/fetchallbrand';

urldelete='http://localhost:2019/deleteback/';
urlfetchItembyid='http://localhost:2019/fetchbybrandid/';

urlupload='http://localhost:2019/uploadFile/';




urlfetchItemm = 'http://localhost:2019/fetchallbill';
  urlfetchm = 'http://localhost:2019/fetchstacklist/';
urlfetchbasenamem='http://localhost:2019/fetchstacklist/';
urlfetchItemnamem='http://localhost:2019/fetchallbrand';

urlfechbillidbasem='http://localhost:2019/fetchbybilliddemo/';

urlfetchItemfm = 'http://localhost:2019/fetchall';

urlSaveItemnamesm='http://localhost:2019/brand';

urlfetchItemnamefm='http://localhost:2019/fetchallbrand';

urlfetchItembyidm='http://localhost:2019/fetchbybrandid/';

urluploadm='http://localhost:2019/uploadFile/';
urldeletebill='http://localhost:2019/deletebill/';
// urlimage='http://localhost:4200/assets/';


urlsearchname='http://localhost:2019/fetchallname/';

urlitemidshowbill="http://localhost:2019/fetchalliddemobaseid";

  public saveItem(item) {
    
      return this.http.post<any>(this.urlSaveItem,item);      
    }
    public saveItemm(bill) {
    
      return this.http.post<any>(this.urlSaveItemm,bill);      
    }

    
    public fetchItem(){
      console.log( this.http.get<any>(this.urlfetchItem))
      return this.http.get<any>(this.urlfetchItem);   
    }
    public fetchItemfull(id){
      console.log( this.http.get<any>(this. urlfetchItembyidfull))
      return this.http.get<any>(this.urlfetchItembyidfull+id);   
    }
    public deleteitem(id){
    
      return this.http.get<any>(this.urldelete+id);   
    }

    public deletebill(id){
    
      return this.http.get<any>(this.urldeletebill+id);   
    }
    public edititem(item){
    
      return this.http.get<any>(this.urledit,item);   
    }
    public saveItemname(brand) {
    
      return this.http.post<any>(this.urlSaveItemname,brand);      
    }

    
    public fetchItemname(){
      console.log( this.http.get<any>(this.urlfetchItemname))
      return this.http.get<any>(this.urlfetchItemname);   
    }
    public fetchItemnamebyid(id){
    
      //console.log( this.http.get<any>(this.urlfetchItembyid,id))
      return this.http.get<any>(this.urlfetchItembyid+id);   
    }
    public uploadfileimage(formData,item){
    
       console.log( this.http.get<any>(this.urlupload,item+formData))
       return this.http.get<any>(this.urlupload,item+formData);   
     }




     public fetchItemm(){
      console.log( this.http.get<any>(this.urlfetchItem))
      return this.http.get<any>(this.urlfetchItem);   
    }
    public fetchm(id){
      var id;
      console.log("qqwee",id.id);
      console.log( this.http.get<any>(this.urlfetchm))
      return this.http.get<any>(this.urlfetchItembyid+id.id);   
    }
    public fetchbyidm(id){
      
      return this.http.get<any>(this.urlfetchItembyid+id);   
    }
    public fetchbasename(name){
     
      // console.log("hsgdjsf",name.name);
      console.log( this.http.get<any>(this.urlfetchbasenamem))
      return this.http.get<any>(this.urlfetchbasenamem+name);   
    }

    public fetchItemnamem(){
      console.log( this.http.get<any>(this.urlfetchItemname))
      return this.http.get<any>(this.urlfetchItemname);   
    }
    public fetchbyidbillbasem(id){
      
      return this.http.get<any>(this.urlfechbillidbasem+id);   
    }
    public fetchItemmm(){
      console.log( this.http.get<any>(this.urlfetchItemm))
      return this.http.get<any>(this.urlfetchItemm);   
    }


    public fetchItemnamesearch(id){
      console.log( this.http.get<any>(this.urlfetchItem))
      return this.http.get<any>(this.urlsearchname+id);   
    }


    public fetchItemiddemobase(){
      console.log( this.http.get<any>(this.urlitemidshowbill))
      return this.http.get<any>(this.urlitemidshowbill);   
    }
  }

    //  
  
  
