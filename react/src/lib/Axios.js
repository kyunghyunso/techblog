import axios from 'axios';
//import s from '../config/settings'

var root = 'https://us-central1-team-zerohouse-techblog.cloudfunctions.net/api'

axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const http = axios.create({
  baseURL: root
});

export const authAxios = axios.create({
  baseURL: root,
  headers: {
    //'Authorization' : `Bearer ${token}`
  }
})

export default http;

