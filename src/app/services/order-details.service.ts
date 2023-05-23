import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // food detail
  foodDetails = [
    {
      id:1,
      foodname:'momos',
      fooddetail:'momos with chatni and mayonise',
      foodprice:200,
      foodimg:'../../../assets/images/momos.jpg',
    },
    {
      id:2,
      foodname:'pani puri',
      fooddetail:'pani puri with pani and puri',
      foodprice:100,
      foodimg:'../../../assets/images/panipuri.jpg',
    },
    {
      id:3,
      foodname:'samosa',
      fooddetail:'samosa with red and green chatni',
      foodprice:250,
      foodimg:'../../../assets/images/samosa.jpg',
    },
    {
      id:4,
      foodname:'puff',
      fooddetail:'various puff flavors avilable here',
      foodprice:350,
      foodimg:'../../../assets/images/puff.jpg',
    },
    {
      id:5,
      foodname:'ice cream',
      fooddetail:'various ice cream flavors avilable here',
      foodprice:250,
      foodimg:'../../../assets/images/ice-cream.jpg',
    },
    {
      id:6,
      foodname:'pizza',
      fooddetail:'various pizza flavors avilable here',
      foodprice:500,
      foodimg:'../../../assets/images/pizza.jpg',
    },

  ]
}
