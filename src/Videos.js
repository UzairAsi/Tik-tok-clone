import React, { useRef, useState } from "react";
import "./Video.css";
import Videofooter from "./Videofooter";
import VideoSidebar from "./VideoSidebar";

function Videos({
  source,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={onVideoPress}
        loop
        src={source}
      ></video>
      <img
        className="videoHeader__logo"
        src="https://1000logos.net/wp-content/uploads/2019/06/logo-TikTok.png"
        alt=""
      />
      <Videofooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Videos;
