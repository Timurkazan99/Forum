import axios from 'axios';
import { URI } from '../utils/const.js';

const host = process.env.REACT_APP_HOST;
const baseURL = `${host}${URI}`;

const $host = axios.create({ baseURL });

export { $host }; // eslint-disable-line import/prefer-default-export
