import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserContext";
import axios from "axios";
import HeroCard from "../../components/HeroCard";
import Cards from "../../components/Cards";

function Albums() {
  const { value1, value2 } = useContext(UserContext);
  const [token] = value1;
  const [user] = value2;
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://api.deezer.com/user/${user.id}/history?access_token=${token}`).then((resp) => {
      if (resp.data.data !== undefined) {
        setRecent(resp.data.data);
        setLoading(false);
      }
    });
  }, []);

  if (!loading) {
    return (
      <>
        <HeroCard recent={recent[0]} />
        <Cards recent={recent} />
      </>
    );
  } else {
    return <div>cargando</div>;
  }
}

export default Albums;
