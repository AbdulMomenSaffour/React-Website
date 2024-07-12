import React from "react";

export default function TopBar() {
  return (
    <div className="topBar">
      <div className="container">
        <div className="topBar-content">
        <h2 className="promo">
          9.9 Promo Is Here! <span> Dapatkan Hingga 99% Diskon!</span>
        </h2>
        <div className="counters">
          <div className="counter">
          <span>17</span>
          <p>Jam</p>
        </div>
        <div className="counter">
          <span>50</span>
          <p>Menit</p>
        </div>
        <div className="counter">
          <span>30</span>
          <p>Detik</p>
        </div>
        </div>

        <button className="promo-btn">Cek Promo!</button>
      </div>
      </div>
      </div>
  );
}
