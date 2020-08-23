import axios from 'axios';
//import s from '../config/settings'

var root = 'http:' + '//' + 'localhost'

const http = axios.create({
  baseURL: root + '/api/'
});

export default http;
