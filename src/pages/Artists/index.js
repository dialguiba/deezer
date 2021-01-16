import React, { useEffect, useContext, useState } from "react";

import HeroCard from "../../components/HeroCard";
import { UserContext } from "../../providers/UserContext";
import axios from "axios";
import ArtistCards from "../../components/ArtistCards";
import "./styles.css";

function Artists() {
  const { value1, value2 } = useContext(UserContext);
  const [token] = value1;
  const [user] = value2;
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://api.deezer.com/user/${user.id}/recommendations/artists?access_token=${token}`).then((resp) => {
      resp.data.data !== undefined && setArtists(resp.data.data);
      resp.data.data !== undefined && setLoading(false);
    });
  }, [token]);

  if (!loading) {
    return (
      <>
        <HeroCard cover={artists[0].picture_medium} title={artists[0].name} subTitle={artists[0].type} />
        <ArtistCards artists={artists} />
      </>
    );
  } else {
    return <div>cargando</div>;
  }
}

export default Artists;
