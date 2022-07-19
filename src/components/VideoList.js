import React from 'react'
import VideoItem from './VideoItem'

export default function VideoList({videos,onVideoSelect}) {
    const renderedList= videos.map(video=>{
        return <VideoItem video={video} onVideoSelect={onVideoSelect}></VideoItem>
    })
    
  return (
    <div>{renderedList}</div>
  )
}
