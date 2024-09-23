"use client";
// import musicWedding from ;
import ReactAudioPlayer from "react-audio-player";
import React from "react";

export default function MusicBackground() {
  return (
    <>
      <div className="music-background-wrapper">
        <ReactAudioPlayer
          src={require( "./public/musics/music-wedding.mp3")}
          autoPlay={true}
          loop={true}
          volume={0.1}
          controls
        />
      </div>
    </>
  );
}
