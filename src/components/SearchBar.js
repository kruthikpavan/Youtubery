import React,{useState} from 'react'


export default function SearchBar() {

    const [videoName,setVideoName]= useState('stephen grider')
    function handleSearch(value){
        setVideoName(value)
    }
  return (
    <div className='ui segment'>
        <div>
            {videoName}
        </div>

        <form className='ui form'>
            <div className="field">
            <input type='text'  placeholder='Search for video'
            value={videoName}
            onChange={(e)=>{
                handleSearch(e.target.value);
            }}
            ></input>
            <button className='ui button'>Search</button>
            </div>
        </form>
       
    </div>
  )
}
