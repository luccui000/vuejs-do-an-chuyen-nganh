import axios from 'axios';
import API_URL from '@/common/config';

export const apis = axios.create({
    baseURL: API_URL
});

export default apis;