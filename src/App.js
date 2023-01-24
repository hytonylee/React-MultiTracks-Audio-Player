import "./styles.css";
import Player from "./components/Player";
import React, { useState } from "react";
import { audio1 as tracks1, audio2 as tracks2 } from "./components/Tracks";
import PlayerContext from "./components/PlayerContext";

export default function App() {
  const [playing, setPlay] = useState(false);
  const [option, setOption] = useState(false);

  const handleClick = () => {
    setPlay(!playing);
  };

  const handleChange = () => {
    setOption(!option);
  };

  return (
    <PlayerContext.Provider value={playing}>
      <div className="App">
        <h1>Multi Tracks Audio Players</h1>
        <button onClick={handleClick}>
          {!playing ? "Play" : "Pause"}
        </button>{" "}
        <button onClick={handleChange}>
          {!option ? "Toggle to Song 2" : "Toggle to Song 1"}
        </button>
        <hr />
        {(!option ? tracks1 : tracks2).map((track) => {
          return (
            <Player key={Math.random()} title={track.name} url={track.src} />
          );
        })}
      </div>
    </PlayerContext.Provider>
  );
}
