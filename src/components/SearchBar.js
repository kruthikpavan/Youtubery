import React,{useState} from 'react'


export default function SearchBar({onVideoNameSubmit}) {

    const [videoName,setVideoName]= useState()
    function handleSearch(value){
        setVideoName(value)
    }

    function handleFormSubmit(event){
        event.preventDefault()
        onVideoNameSubmit(videoName)

        //TODO:- HANDLE YOUTUBE API

    }
  return (
    <div className='ui segment'>
     

        <form  onSubmit={(e)=>{
            handleFormSubmit(e)
        }}  className='ui form'>
            <div className="field">
            <input type='text'  placeholder='Search for video'
            value={videoName}
            onChange={(e)=>{
                handleSearch(e.target.value);
            }}
            ></input>
            
 
            </div>
        </form>
       
    </div>
  )
}
