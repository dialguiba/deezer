import React from "react";
import Card from "../Card";

function ArtistCards({ artists }) {
  if (artists !== undefined) {
    return (
      <div className="results-container">
        <div>Resultados</div>

        <div className="cards-container">
          {artists.map((element, key) => (
            <Card key={element.id} cover={artists[key].picture_medium} title={artists[key].name} subTitle={artists[key].type} thirdTitle={artists[key].type} />
          ))}
        </div>
      </div>
    );
  } else {
    return "loading";
  }
}

export default ArtistCards;
