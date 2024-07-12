import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import slide1 from "../asstes/images/slide1.jpeg";

export default function Slider() {
  return (
    <div className="slider container">
      <Carousel>
        <Carousel.Item interval={1000}>
          <Image src={slide1} fluid className="slider-img" />
          <Carousel.Caption>
            <div className="slider-title">
              <h3>Makin Sehat<br/>Dengan Promo 9.9</h3>
              <button>Belanja Sekarang</button>
            </div>

            <div className="slider-content-card">
              <div className="discount-rate">
                <h4> 90%</h4>
                <p> Semua Item!</p>
              </div>
              <div className="discount-details">
                <p className="first">Promo Jumbo</p>
                <div>
                <p className="second">Berlaku s/d<span> 10 September 2023</span></p>
                <button className="third">Klaim Promo</button>
                </div>
                <p className="fourth">S&K Berlaku</p>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <Image src={slide1} fluid className="slider-img" />
          <Carousel.Caption>
            <div className="slider-title">
              <h3>Makin Sehat<br/>Dengan Promo 9.9</h3>
              <button>Belanja Sekarang</button>
            </div>

            <div className="slider-content-card">
              <div className="discount-rate">
                <h4> 90%</h4>
                <p> Semua Item!</p>
              </div>
              <div className="discount-details">
                <p className="first">Promo Jumbo</p>
                <div>
                <p className="second">Berlaku s/d<span> 10 September 2023</span></p>
                <button className="third">Klaim Promo</button>
                </div>
                <p className="fourth">S&K Berlaku</p>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <Image src={slide1} fluid className="slider-img" />
          <Carousel.Caption>
            <div className="slider-title">
              <h3>Makin Sehat<br/>Dengan Promo 9.9</h3>
              <button>Belanja Sekarang</button>
            </div>

            <div className="slider-content-card">
              <div className="discount-rate">
                <h4> 90%</h4>
                <p> Semua Item!</p>
              </div>
              <div className="discount-details">
                <p className="first">Promo Jumbo</p>
                <div>
                <p className="second">Berlaku s/d<span> 10 September 2023</span></p>
                <button className="third">Klaim Promo</button>
                </div>
                <p className="fourth">S&K Berlaku</p>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <Image src={slide1} fluid className="slider-img" />
          <Carousel.Caption>
            <div className="slider-title">
              <h3>Makin Sehat<br/>Dengan Promo 9.9</h3>
              <button>Belanja Sekarang</button>
            </div>

            <div className="slider-content-card">
              <div className="discount-rate">
                <h4> 90%</h4>
                <p> Semua Item!</p>
              </div>
              <div className="discount-details">
                <p className="first">Promo Jumbo</p>
                <div>
                <p className="second">Berlaku s/d<span> 10 September 2023</span></p>
                <button className="third">Klaim Promo</button>
                </div>
                <p className="fourth">S&K Berlaku</p>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
