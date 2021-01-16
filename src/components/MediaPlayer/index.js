import React, { useContext, useRef, useEffect, useState } from "react";
import "./styles.css";
import Previous from "../../assets/icons/Previous.svg";
import Next from "../../assets/icons/Next.svg";
import Play from "../../assets/icons/Play.svg";
import Stop from "../../assets/icons/Stop.svg";
import { UserContext } from "../../providers/UserContext";

function MediaPlayer() {
  const { value3 } = useContext(UserContext);

  const [song] = value3;
  const audio = useRef(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setPlay(false);
  }, [song]);

  function handlePlay() {
    audio.current.play();
    setPlay(true);
  }

  function handleStop() {
    audio.current.pause();
    setPlay(false);
  }

  if (song !== undefined && Object.entries(song).length !== 0) {
    return (
      <>
        <audio ref={audio} src={song.preview}>
          <p>Tu navegador no implementa el elemento audio</p>
        </audio>
        <div className="mediaplayer-container">
          <div className="mediaplayer-container__info">
            <img className="mediaplayer-container__info__image" src={song.album.cover_small} alt="codlplay" />
            &nbsp; &nbsp;&nbsp;&nbsp;
            <div>
              <p>{song.title}</p>
              <p>
                {song.artist.name} - {song.album.title}
              </p>
            </div>
          </div>
          <div className="mediaplayer-container__controls">
            <img src={Previous} alt="previous" />
            {!play && <img src={Play} alt="play" onClick={() => handlePlay()} />}
            {play && <img src={Stop} alt="pause" onClick={() => handleStop()} />}
            <img src={Next} alt="next" />
          </div>
          <div className="mediaplayer-container__volume">volumen</div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <audio ref={audio} src="">
          <p>Tu navegador no implementa el elemento audio</p>
        </audio>
        <div className="mediaplayer-container">
          <div className="mediaplayer-container__info">
            <img className="mediaplayer-container__info__image" src="" alt="codlplay" />
            &nbsp; &nbsp;&nbsp;&nbsp;
            <div>
              <p>Desconocido</p>
              <p>Desconocido - Desconocido</p>
            </div>
          </div>
          <div className="mediaplayer-container__controls">
            {/* <img alt="pre" src={Previous} /> */}

            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
                <rect width="36" height="36" transform="matrix(-1 0 0 1 36 0)" fill="#C4C4C4" />
              </mask>
              <g mask="url(#mask0)">
                <path d="M10.8 17.4L26.1 26.2335L26.1 8.56655L10.8 17.4Z" fill="white" />
                <rect width="2.4" height="20.4" transform="matrix(-1 0 0 1 8.39999 7.20001)" fill="white" />
              </g>
            </svg>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handlePlay()}>
              <circle cx="30" cy="30" r="30" fill="#FF7676" />
              <path
                d="M38.9062 28.8086L26.5312 21.4961C25.5117 20.8984 24 21.4961 24 22.9375V37.5625C24 38.8984 25.4062 39.707 26.5312 39.0391L38.9062 31.7266C39.9961 31.0586 39.9961 29.4766 38.9062 28.8086Z"
                fill="white"
              />
            </svg>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
                <rect width="36" height="36" fill="#C4C4C4" />
              </mask>
              <g mask="url(#mask0)">
                <path d="M25.2 17.4L9.90005 26.2335L9.90005 8.56655L25.2 17.4Z" fill="white" />
                <rect x="27.6001" y="7.20001" width="2.4" height="20.4" fill="white" />
              </g>
            </svg>

            {/* <img alt="play" src={Play} />
          <img alt="next" src={Next} /> */}
          </div>
          <div className="mediaplayer-container__volume">volumen</div>
        </div>
      </>
    );
  }
}

export default MediaPlayer;
