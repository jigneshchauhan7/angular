import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent {
  constructor(private product:ActivatedRoute,private service:OrderDetailsService){}
  productid:any;
  productdetail:any;
  ngOnInit():void{
    this.productid = this.product.snapshot.paramMap.get('id');
    console.log(this.productid);
    if(this.productid){
      this.productdetail = this.service.foodDetails.filter((value)=>{
        return value.id == this.productid;
      })
    }    
  }
}
