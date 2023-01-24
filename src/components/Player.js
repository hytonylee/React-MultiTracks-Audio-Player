import React, { useEffect, useRef, useContext } from "react";
import WaveSurfer from "wavesurfer.js";
import PlayerContext from "./PlayerContext";

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "LightGrey",
  progressColor: "Grey",
  cursorColor: "Grey",
  barWidth: 3,
  barRadius: 3,
  responsive: true,
  height: 150,
  normalize: true,
  partialRender: true
});

export default function Player({ title, url }) {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const playing = useContext(PlayerContext);

  // console.log(playing);

  useEffect(() => {
    // setPlay(false);
    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);
    wavesurfer.current.load(url);

    return () => wavesurfer.current.destroy();
  }, [url]);

  if (
    playing === true &&
    wavesurfer.current &&
    title !== "" &&
    url !== "" &&
    waveformRef !== ""
  ) {
    return wavesurfer.current.play();
  }

  if (
    playing === false &&
    wavesurfer.current &&
    title !== "" &&
    url !== "" &&
    waveformRef !== ""
  ) {
    return wavesurfer.current.pause();
  }

  return (
    <div>
      <div id="waveform" ref={title !== "" && url !== "" ? waveformRef : ""} />
      <h3>{title}</h3>
      <hr />
    </div>
  );
}
