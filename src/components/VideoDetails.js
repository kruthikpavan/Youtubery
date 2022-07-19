import React from "react";
import './VideoDetails.css'

export default function VideoDetails({ video }) {

  const videoSrc= `https://www.youtube.com/embed/${video.id.videoId}`
  if (!video) {
    return <div>Loading...</div>;
  }
  return <div className="ui segment video-details">
    <div className="ui embed">
      <iframe src={videoSrc} frameborder="0"></iframe>
    </div>
    <h3>{video.snippet.title}</h3>
    <p>{video.snippet.description}</p>
    </div>;
}
