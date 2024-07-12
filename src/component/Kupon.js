import React from "react";

export default function Kupon({ Kupons, kuponTitle }) {
  return (
    <div>
      <h2 className="section-title">{kuponTitle}</h2>

      <div className="kupon-section">
        {Kupons.map((kupon) => (
          <div className="kupon-content-card">
            <div className={'discount-rate ' + (kupon.kupon_type === "dis" ? 'green' : 'yellow')}>
              <h4>{kupon.kupon}</h4>
              <p>{kupon.iteam}</p>
            </div>
            <div className="discount-details">
              <p className="first">Promo Jumbo</p>
              <div>
                <p className="second">{kupon.restriction}</p>
                <p className="second">
                  Berlaku s/d<span> 10 September 2023</span>
                </p>
                <button className="third">Klaim Promo</button>
              </div>
              <p className="fourth">S&K Berlaku</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
