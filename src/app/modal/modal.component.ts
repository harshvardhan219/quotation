
import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import {FormGroup, FormControl} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


interface productData {
  _id: string,
  productName: string,
  productDescription: string,
  price: Number,
  quantity ?: Number,
  shopifyProductId : string
}

interface apidata {
    quotationId: string,
    shopifyProductId?: string,
    shopifyVariantId?: string,
    sku?: string,
    productName: string,
    productDescription: string,
    images?: [],
    targetPrice: string,
    targetQuantity: string,
    productPageLink?: string,
    productQuoteId?: string,
}

  


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  credentials = {
  _id: "",
  productName: "",
  productDescription: "",
  price: "",
  quantity : ""
  }

  ShowAlert = false;
  alertMsg = 'We are updating!!'
  alertColor = 'blue'
  inSubmission = false
  



  constructor(private shared: SharedService, private http: HttpClient) {
      
  }


  dataItems:productData  = this.shared.getData()
  tranfer: apidata = {
    quotationId: "",
    shopifyProductId : "",
    shopifyVariantId : "",
    sku: "",
    productName: "",
    productDescription: "",
    images : [],
    targetPrice: "",
    targetQuantity: "",
    productPageLink: "",
    productQuoteId:""
  }

  async createdata(res,data){
    
    this.tranfer.productName = data.productName;
    this.tranfer.targetPrice = data.price;
    this.tranfer.targetQuantity = data.quantity;
    this.tranfer.quotationId = res.quotationId;
    this.tranfer.productDescription = this.dataItems.productDescription;
    this.tranfer.productQuoteId = this.dataItems.shopifyProductId

   console.log(this.tranfer)

   await this.http.post('https://backend.spdash.in/products/quote/create', this.tranfer).subscribe(
   (response) => console.log(response),
   (error) => console.log(error))
  }

  async update(data){


    try{
      await this.http.post('https://backend.spdash.in/quotation/create/draft/satvik@hnh.com', this.tranfer).subscribe(
      (response) => this.createdata(response, data),
      (error) => console.log(error))

    } catch (e){
        console.log(e)
        return
    }




    this.alertMsg="Update Successful"
    this.alertColor="green"

  }
  

  ngOnInit(): void {
    this.dataItems = this.shared.getData()
  }

}
