import React, { useState } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoDetails from "./VideoDetails";
import VideoList from "./VideoList";
export default function App() {
  const [videos,setVideos]= useState([])
  async function  onVideoNameSubmit(term) {
    const response= await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(response);
    setVideos(response.data.items)
  }
  return (
    <>
      <div className="ui container">
        <SearchBar onVideoNameSubmit={onVideoNameSubmit} />
        <VideoList videos={videos} />
      </div>
    </>
  );
}
