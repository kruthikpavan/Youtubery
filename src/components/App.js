import React, { useState } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoDetails from "./VideoDetails";
import VideoList from "./VideoList";
export default function App() {
  const [videos,setVideos]= useState([])
  const [selectedVideo,setSelectedVideo]= useState(null)
  async function  onVideoNameSubmit(term) {
    const response= await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items)
  }

  function onVideoSelect(video){
    setSelectedVideo(video)

  }
  return (
    <>
      <div className="ui container">
        <SearchBar onVideoNameSubmit={onVideoNameSubmit} />
        <div className="container">
        <VideoDetails video={selectedVideo}></VideoDetails>
        <VideoList videos={videos} onVideoSelect={onVideoSelect} />
        </div>
        
      </div>
    </>
  );
}
