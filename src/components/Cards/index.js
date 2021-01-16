import React from "react";
import Card from "../Card";
import "./styles.css";

function Cards({ recent }) {
  if (recent !== undefined) {
    return (
      <div className="results-container">
        <div>Resultados</div>

        <div className="cards-container">
          {recent.map((element, key) => (
            <Card
              key={element.id}
              cover={recent[key].album.cover_medium}
              title={recent[key].title}
              subTitle={recent[key].album.title}
              thirdTitle={recent[key].artist.name}
              obj={recent[key]}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Cards;
