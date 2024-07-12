import React from 'react';
import ReactStars from "react-rating-stars-component";

export default function Review( {Reviews , reviewTitle}) {
  return (
    <div>
      
    <h2 className='section-title'>{reviewTitle}</h2>
    <div className='review-section'>

    {Reviews.map((review) => (

      <div className='review-card'>
        
        <img className='review-img' src={review.product_Img}/>
        
        <div className='review-details'>
        
        <h3 className='pro-name review-name'> {review.product_Name} </h3>
        <p className='review-pro-kind'> {review.product_Kind} </p>

        <div className='rate-stars'>
        <ReactStars
          count={5}
          size={14}
          isHalf={true}
          edit={false}
          activeColor="#ffd700"
          value={review.rate}
        />
        <span>{ review.rate }/5.0</span>
        </div>

        <div className='company-details'>

        <img className='company-logo' src={review.product_Company.logo}/>
        <p className='company-name'> {review.product_Company.company_Name} </p>
        <p className='seller-name'> {review.product_Company.seller_Name} </p>
        
        </div>

      
            <p className="pro-price">{review.product_Price}</p>
            <div className="new-price review-price">
                <p className="discount">{review.product_Discount}</p>
                <p className="previous-price">{review.previous_Price}</p>
            </div>
            <button className="buy review-buy">Tambahkan ke Keranjang</button>
            
            </div>            

      </div>



    ))}

    </div>

    </div>
  )
}
