import React, { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import "./styles.css";

function Card({ cover, title, subTitle, thirdTitle, obj }) {
  const { value3 } = useContext(UserContext);

  const [, setSong] = value3;

  function handleClick(obj) {
    setSong(obj);
  }

  if (title !== undefined) {
    return (
      <div className="card-container" onClick={() => handleClick(obj)}>
        <div className="card-container__image" style={{ backgroundImage: `url(${cover})` }} />
        <div>{title}</div>
        <div>{subTitle}</div>
        <div>{thirdTitle}</div>
      </div>
    );
  } else {
    return "loading";
  }
}

export default Card;
