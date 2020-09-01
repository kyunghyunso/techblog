import axios from 'axios';
//import s from '../config/settings'

var root = 'https://us-central1-team-zerohouse-techblog.cloudfunctions.net/api'

const http = axios.create({
  baseURL: root
});

export default http;
