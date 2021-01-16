import React from "react";
import "./styles.css";

function HeroCard({ coverSmall, coverBig, title, subTitle }) {
  if (coverSmall !== undefined) {
    return (
      <div className="herocard-container">
        <div className="herocard-container__picture" style={{ backgroundImage: `url(${coverSmall})` }} />
        <div className="herocard-container__data" style={{ backgroundImage: `linear-gradient(#eb5757,#eb5757),url(${coverBig})` }}>
          <h3>{title}</h3>
          <h4>{subTitle}</h4>
          <p>Seguidores</p>
          <p>Información</p>
        </div>
      </div>
    );
  } else {
    return "loading";
  }
}

export default HeroCard;
