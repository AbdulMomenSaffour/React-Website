import React, {useEffect} from "react";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';
import OwlCarousel from 'react-owl-carousel';



export default function ProductsList({ GreenProducts, productTitle }) {


  return (
    <div>
      <h2 className="section-title">{productTitle}</h2>
      <OwlCarousel className='owl-theme ps-5' items="6.5" loop margin={10} dots='false' stagePadding="5">
        {GreenProducts.map((product ,index) => (
          <div className="card-preview" key={index}>
            
              <img className="pro-img" src={product.product_Img} />
              <div>
              <h3 className="pro-name">{product.product_Name}</h3>
              <p className="pro-kind">{product.product_Kind}</p>
              </div>
              <div>
              <p className="pro-price">{product.product_Price}</p>
              <div className="new-price">
                  <p className="discount">{product.product_Discount}</p>
                  <p className="previous-price">{product.previous_Price}</p>
              </div>
              <button className="buy">+ Keranjang</button>
              
            </div>
          </div>
        ))}
        </OwlCarousel>
      </div>
  );
}
