import axios from 'axios';

const KEY = 'AIzaSyCS1nuSJ8BeCveraRs6v0-dEAtcUQWquPU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
