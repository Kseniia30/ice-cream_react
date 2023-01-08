import { getHotCoffee } from 'fetch/getHotCoffee';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
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
    const productList = useSelector(state => state.productList);

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
            try {
                const product = productList.find(
                    item => item.title === res.data.title
                );
                if (product.title === res.data.title) {
                    return alert(`${res.data.title} is already is the busket`);
                }
            } catch (err) {
                console.log(err.message);
            }
            dispatch(addProduct(res.data));
        });
    };
    if (!coffeeList) {
        return;
    }
    return (
        <CoffeeList>
            {coffeeList.map(item => {
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
