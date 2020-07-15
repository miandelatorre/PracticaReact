import axios from 'axios';
import {BASE_URL} from '../config/api';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Api-Key':
      '699667f923e65fac39b632b0d9b2db0d9ee40f9da15480ad5a4bcb3c1b095b7a',
    'Api-Username': 'madelatorre',
  },
});

export const getLatestTopics = () => {
  const url = '/latest.json';
  return instance.get(url);
};
