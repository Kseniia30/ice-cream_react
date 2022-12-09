import axios from 'axios';
const baseURL = 'https://api.sampleapis.com/coffee/iced';

export const getIceCoffee = () => {
    return axios.get(baseURL);
};
