import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  message: any;
  qid:any;

  constructor(private http : HttpClient) { }

  setData(data) {
    this.message = data
  }

  getData(){
    return this.message
  }

  setid(id){
    this.qid = id
  }

  getid(){
    return this.qid
  }

  getSearchProductName(name:String){
    const response = new Promise(resolve => {
      this.http.get('https://backend.spdash.in/products/searchShopifyProducts/'+`${name}`).subscribe( data => {
        resolve(data)
      }, err => {
        console.log(err)
      });
    });
    return response;
  }

  getSearchid(name:String){
    const response = new Promise(resolve => {
      this.http.get('https://backend.spdash.in/products/searchShopifyProducts/'+`${name}`).subscribe( data => {
        resolve(data)
      }, err => {
        console.log(err)
      });
    });
    return response;
  }


}
