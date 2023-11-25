"use client";
import musicWedding from "./public/musics/music-wedding.mp3";
import ReactAudioPlayer from "react-audio-player";
import React from "react";

export default function MusicBackground() {
  return (
    <>
      <div className="music-background-wrapper">
        <ReactAudioPlayer
          src={musicWedding}
          autoPlay={true}
          loop={true}
          controls
        />
      </div>
    </>
  );
}
