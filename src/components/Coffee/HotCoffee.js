import { getHotCoffee } from 'fetch/getHotCoffee';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addProduct } from 'redux/store';
import {
    CoffeeImg,
    CoffeeItem,
    CoffeeList,
    CoffeeName,
    CoffeeSub,
} from './TypeCoffee.styled';
import { BusketButton } from 'components/common/Common.styled';

const HotCoffee = () => {
    const [coffeeList, setCoffeeList] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            getHotCoffee().then(res => {
                setCoffeeList(res.data);
            });
        } catch (error) {
            console.log(error.message);
        }
    }, []);

    if (!coffeeList) {
        return;
    }
    const getHotById = id => {
        return axios.get(`https://api.sampleapis.com/coffee/hot/${id}`);
    };
    const buyHotCoffee = evt => {
        const id = evt.currentTarget.id;
        getHotById(id).then(res => {
            dispatch(addProduct(res.data));
        });
    };
    if (!coffeeList) {
        return;
    }
    return (
        <CoffeeList>
            {coffeeList.map(item => {
                console.log(item);
                const { id, title, description, image } = item;
                return (
                    <CoffeeItem key={nanoid()}>
                        <CoffeeName>{title}</CoffeeName>
                        <CoffeeSub>{description}</CoffeeSub>
                        <CoffeeImg src={image} alt={title} />
                        <br />
                        <BusketButton
                            id={id}
                            type="button"
                            onClick={buyHotCoffee}
                        >
                            take to busket
                        </BusketButton>
                    </CoffeeItem>
                );
            })}
        </CoffeeList>
    );
};

export default HotCoffee;
