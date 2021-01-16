import React, { useEffect, useContext, useState } from "react";
import "./styles.css";
import { Link } from "wouter";
import foxbelMusic from "../../assets/img/foxbel-music.png";
import axios from "axios";
import { UserContext } from "../../providers/UserContext";

function Sidebar() {
  const { value1 } = useContext(UserContext);
  const [token] = value1;
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    axios.get(`https://api.deezer.com/user/me/playlists?access_token=${token}`).then((res) => {
      if (res.data.data !== undefined) setPlaylists(res.data.data);
    });
  }, [token]);

  return (
    <div className="sidebar-container">
      <img className="sidebar-container__image" alt="foxbelmusic" src={foxbelMusic} />
      <h2>Mi Librería</h2>
      <ul className="sidebar-container__list">
        <li className="sidebar-container__list__element">
          <Link className="sidebar-container__list__element__link" href="/recent">
            Recientes
          </Link>
        </li>
        <li className="sidebar-container__list__element">
          <Link className="sidebar-container__list__element__link" href="/artists">
            Artistas
          </Link>
        </li>
        <li className="sidebar-container__list__element">
          <Link className="sidebar-container__list__element__link" href="/albums">
            Álbums
          </Link>
        </li>
        <li className="sidebar-container__list__element">
          <Link className="sidebar-container__list__element__link" href="/songs">
            Canciones
          </Link>
        </li>
        <li className="sidebar-container__list__element">
          <Link className="sidebar-container__list__element__link" href="/stations">
            Estaciones
          </Link>
        </li>
      </ul>

      <h2>Playlist</h2>
      <ul className="sidebar-container__list">
        {playlists.map((playlist) => {
          return (
            <li className="sidebar-container__list__element">
              <Link className="sidebar-container__list__element__link" href="/recent">
                {playlist.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
