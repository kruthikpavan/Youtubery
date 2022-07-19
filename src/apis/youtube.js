import axios from "axios"
const KEY= 'AIzaSyB6e7hlakZUUgDweMt77IOv5rBnBo-U1Go'
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
  params:{
    key: KEY,
    part: 'snippet', 
    type: 'video',
    maxResults: 5,
  }
});

