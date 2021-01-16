import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import axios from "axios";
import HeroCard from "../../components/HeroCard";
import Cards from "../../components/Cards";

function Recent() {
  const { value1, value2, value3 } = useContext(UserContext);
  const [token] = value1;
  const [user] = value2;
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [, setSong] = value3;

  useEffect(() => {
    setLoading(true);
    axios.get(`https://api.deezer.com/user/${user.id}/history?access_token=${token}`).then((resp) => {
      if (resp.data.data !== undefined) {
        setRecent(resp.data.data);
        setLoading(false);
        setSong(resp.data.data[0]);
      }
    });
  }, [token, user.id]);

  if (!loading && recent.length > 0) {
    return (
      <>
        <HeroCard
          coverSmall={recent[0].album.cover_medium}
          coverBig={recent[0].album.cover_big}
          title={recent[0].album.title}
          subTitle={recent[0].artist.name}
        />
        <Cards recent={recent} />
      </>
    );
  } else if (!loading && recent.length <= 0) {
    return <div>No tiene canciones recientes</div>;
  } else {
    return <div>cargando</div>;
  }
}

export default Recent;
