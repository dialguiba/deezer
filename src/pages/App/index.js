import React, { useEffect, useContext } from "react";
import { Switch, Route } from "wouter";
import Sidebar from "../../components/Sidebar";
import MediaPlayer from "../../components/MediaPlayer";
import Recent from "../Recent";
import Albums from "../Albums";
import Artists from "../Artists";
import Songs from "../Songs";
import Stations from "../Stations";

import "./styles.css";
import axios from "axios";
import { UserContext } from "../../providers/UserContext";
import Topbar from "../../components/Topbar";
import env from "react-dotenv";

function Home({ location }) {
  const { value1 } = useContext(UserContext);
  const [, setToken] = value1;

  let params = new URLSearchParams(location.search);

  let code = params.get("code");
  let secret = env.APP_SECRET;
  let id = "457362";
  let regex = /access_token=(\S+)&/;

  useEffect(() => {
    localStorage.getItem("token") === null &&
      axios.get(`https://connect.deezer.com/oauth/access_token.php?app_id=${id}&secret=${secret}&code=${code}`).then((res) => {
        localStorage.setItem("token", res.data.match(regex)[1]);
        setToken(res.data.match(regex)[1]);
      });

    localStorage.getItem("token") !== null && setToken(localStorage.getItem("token"));
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <Topbar />
      <Switch>
        <div className="page-container">
          <Route path="/recent" component={Recent} />
          <Route path="/artists" component={Artists} />
          <Route path="/albums" component={Albums} />
          <Route path="/songs" component={Songs} />
          <Route path="/stations" component={Stations} />
        </div>
      </Switch>
      <MediaPlayer />
    </div>
  );
}

export default Home;
