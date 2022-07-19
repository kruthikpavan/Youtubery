import React from "react";
import'./VideoItem.css'
export default function VideoItem({ video }) {
  return (
    <div className="video-item">
      <img  src={video.snippet.thumbnails.medium.url} alt="" />
      <div className="video-desc">
        <h4>
        {video.snippet.title}

        </h4>
        </div>
    </div>
  );
}
