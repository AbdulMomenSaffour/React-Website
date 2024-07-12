import React, { useState } from 'react'
// components
import Slider from './Slider';
import ProductsList from './ProductsList';
import Review from './Review';
import Kupon from './Kupon';


import green1 from '../asstes/images/proImg/green1.png.png';
import green2 from '../asstes/images/proImg/green2.png.png';
import green3 from '../asstes/images/proImg/green3.png.png';
import green4 from '../asstes/images/proImg/green4.png.png';
import green5 from '../asstes/images/proImg/green5.png.png';
import green6 from '../asstes/images/proImg/green6.png.png';

import review1 from '../asstes/images/reviewImg/review1.png';
import review2 from '../asstes/images/reviewImg/review2.png';
import review3 from '../asstes/images/reviewImg/review3.png';

import company1 from '../asstes/images/reviewImg/company1.png';
import company2 from '../asstes/images/reviewImg/company2.png';



export default function Home() {

const GreenProducts = [
    {product_Img : green1 , product_Name : "Costafarms Soup Pack" , product_Kind : "Fresh, Food & Groceries" , product_Price : "Rp 1.900" , product_Discount : "91%" , previous_Price : "Rp 19.900" , id : 1},
    {product_Img : green2 , product_Name : "Soup Pack + Royco" , product_Kind : "Fresh, Food & Groceries" , product_Price : "Rp 2.000" , product_Discount : "90%" , previous_Price : "Rp 20.000" , id : 2},
    {product_Img : green3 , product_Name : "Paket Sop Bening  Macaroni" , product_Kind : "Fresh, Food & Groceries" , product_Price : "Rp 2.000" , product_Discount : "90%" , previous_Price : "Rp 20.000" , id : 3},
    {product_Img : green4 , product_Name : "Greenfarms Paket Sop Bening" , product_Kind : "Fresh, Food & Groceries" , product_Price : "Rp 2.000" , product_Discount : "90%" , previous_Price : "Rp 20.000" , id : 4},
    {product_Img : green5 , product_Name : "Telly Vegetarian Ramen" , product_Kind : "Instant Food, Food & Groceries" , product_Price : "Rp 900" , product_Discount : "93%" , previous_Price : "Rp 10.700" , id : 5},
    {product_Img : green6 , product_Name : "Soup Veg Pack" , product_Kind : "Fresh, Food & Groceries" , product_Price : "Rp 2.000" , product_Discount : "90%" , previous_Price : "Rp 20.000" , id : 6},
];


const Reviews = [

    { product_Img : review1, product_Name : "Costafarms Soup Pack" , product_Kind : "Fresh, Food & Groceries" , product_Company : {logo : company1 , company_Name : "Costafarm Jogja," , seller_Name : "Sleman" } , product_Price : "Rp 1.900" , product_Discount : "91%" , previous_Price : "Rp 19.900", id : 7, rate: 4.8 },
    { product_Img : review2, product_Name : "Nongshim Soon Vegetarian Noodle Soup Ramen" , product_Kind : "Instant Food" , product_Company : {logo : company2 , company_Name : "Nongshim," , seller_Name : "Jakarta Selatan" } , product_Price : "Rp 4.000" , product_Discount : "30%" , previous_Price : "Rp 6.000", id : 8, rate: 4.9 },
    { product_Img : review3, product_Name : "Costafarms Soup Pack" , product_Kind : "Fresh, Food & Groceries" , product_Company : {logo : company2 , company_Name : "Telly," , seller_Name : "Jakarta Pusat" } , product_Price : "Rp 900" , product_Discount : "93%" , previous_Price : "Rp 10.700", id : 9, rate: 4.5 },
    { product_Img : review1, product_Name : "Costafarms Soup Pack" , product_Kind : "Fresh, Food & Groceries" , product_Company : {logo : company1 , company_Name : "Costafarm Jogja," , seller_Name : "Sleman" } , product_Price : "Rp 1.900" , product_Discount : "91%" , previous_Price : "Rp 19.900", id : 7, rate: 3.5 },
    { product_Img : review2, product_Name : "Nongshim Soon Vegetarian Noodle Soup Ramen" , product_Kind : "Instant Food" , product_Company : {logo : company2 , company_Name : "Nongshim," , seller_Name : "Jakarta Selatan" } , product_Price : "Rp 4.000" , product_Discount : "30%" , previous_Price : "Rp 6.000", id : 8, rate: 2 },
    { product_Img : review3, product_Name : "Costafarms Soup Pack" , product_Kind : "Fresh, Food & Groceries" , product_Company : {logo : company2 , company_Name : "Telly," , seller_Name : "Jakarta Pusat" } , product_Price : "Rp 900" , product_Discount : "93%" , previous_Price : "Rp 10.700", id : 9, rate: 1 },
    { product_Img : review1, product_Name : "Costafarms Soup Pack" , product_Kind : "Fresh, Food & Groceries" , product_Company : {logo : company1 , company_Name : "Costafarm Jogja," , seller_Name : "Sleman" } , product_Price : "Rp 1.900" , product_Discount : "91%" , previous_Price : "Rp 19.900", id : 7, rate: 1},
    { product_Img : review2, product_Name : "Nongshim Soon Vegetarian Noodle Soup Ramen" , product_Kind : "Instant Food" , product_Company : {logo : company2 , company_Name : "Nongshim," , seller_Name : "Jakarta Selatan" } , product_Price : "Rp 4.000" , product_Discount : "30%" , previous_Price : "Rp 6.000", id : 8, rate: 4.5 },
    { product_Img : review3, product_Name : "Costafarms Soup Pack" , product_Kind : "Fresh, Food & Groceries" , product_Company : {logo : company2 , company_Name : "Telly," , seller_Name : "Jakarta Pusat" } , product_Price : "Rp 900" , product_Discount : "93%" , previous_Price : "Rp 10.700", id : 9, rate: 5 }


];


const Kupons = [
  
  {kupon : "90%" , iteam : "Semua Item!"      , exp_Date : "Berlaku s/d 10 September 2023"  , deal : ""  , id : 10, kupon_type: 'dis'},
  {kupon : "20%" , iteam : "Semua Item!"      , exp_Date : "Berlaku s/d 10 September 2023!" ,  deal : "" , id : 11, kupon_type: 'dis'},
  {kupon : "Gratis Ongkir" , restriction : "Minimal Belanja Rp 10.000" , exp_Date : "Berlaku s/d 10 September 2023" , deal : ""  , id : 12, kupon_type: 'offer'},
  {kupon : "Gratis Ongkir" ,  exp_Date : "Berlaku s/d 10 September 2023" , deal : ""  , id : 13, kupon_type: 'offer'}


];

  return (
    <div className='home'> 
    <div className='container'>
    <Slider/>
    </div>
    <ProductsList GreenProducts={GreenProducts} productTitle="Green Sale 9.9"/>
    <Review Reviews={Reviews} reviewTitle="Review Terbaik"/>
    <Kupon Kupons={Kupons} kuponTitle="Kupon Tersedia"/>
    </div>
  )
}
