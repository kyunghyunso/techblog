import axios from 'axios';
import s from '../config/settings'

var root = s.REST_SERVER.protocol + '//' + s.REST_SERVER.host

const http = axios.create({
  baseURL: root + '/api/'
});

export default http;
