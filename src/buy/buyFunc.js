import axios from 'axios';
import { iceCreamData } from 'data/iceCreamData';
import { milkShakes } from 'data/milkShakesData';

const getHotById = id => {
    return axios.get(`https://api.sampleapis.com/coffee/hot/${id}`);
};
export const buyHotCoffeeFunc = evt => {
    const id = evt.currentTarget.id;
    getHotById(id).then(res => {
        const hotCoffee = localStorage.getItem('hotCoffee')
            ? JSON.parse(localStorage.getItem('hotCoffee'))
            : [];
        hotCoffee.push(res.data);
        localStorage.setItem('hotCoffee', JSON.stringify(hotCoffee));
    });
};

const getIcedById = id => {
    return axios.get(`https://api.sampleapis.com/coffee/iced/${id}`);
};

export const buyIcedCoffeeFunc = evt => {
    const id = evt.currentTarget.id;
    getIcedById(id).then(res => {
        const icedCoffee = localStorage.getItem('icedCoffee')
            ? JSON.parse(localStorage.getItem('icedCoffee'))
            : [];
        icedCoffee.push(res.data);
        localStorage.setItem('icedCoffee', JSON.stringify(icedCoffee));
    });
};

export const buyIceCream = evt => {
    const id = evt.target.id;
    const product = iceCreamData.filter(item => item.id === id);
    console.log(...product);
    const iceCream = localStorage.getItem('iceCream')
        ? JSON.parse(localStorage.getItem('iceCream'))
        : [];
    iceCream.push(...product);
    console.log(iceCream);
    localStorage.setItem('iceCream', JSON.stringify(iceCream));
};

export const buyMilkShakes = evt => {
    const id = evt.target.id;
    const product = milkShakes.filter(item => item.id === id);
    const milkshake = localStorage.getItem('milkshake')
        ? JSON.parse(localStorage.getItem('milkshake'))
        : [];
    milkshake.push(product);
    localStorage.setItem('milkshake', JSON.stringify(milkshake));
};
