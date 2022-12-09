import axios from 'axios';
const baseURL = 'https://api.sampleapis.com/coffee/hot';

export const getHotCoffee = () => {
    return axios.get(baseURL);
};
