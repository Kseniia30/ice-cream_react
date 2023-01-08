import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { getIceCoffee } from 'fetch/getIceCoffee';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addProduct } from 'redux/store';
import {
    CoffeeImg,
    CoffeeItem,
    CoffeeList,
    CoffeeName,
    CoffeeSpan,
    CoffeeSub,
} from './TypeCoffee.styled';
import { BusketButton } from 'components/common/Common.styled';

const IceCoffee = () => {
    const [coffeeList, setCoffeeList] = useState(null);
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);

    useEffect(() => {
        try {
            getIceCoffee().then(res => {
                setCoffeeList(res.data);
            });
        } catch (error) {
            console.log(error.message);
        }
    }, []);

    if (!coffeeList) {
        return;
    }
    const getIcedById = id => {
        return axios.get(`https://api.sampleapis.com/coffee/iced/${id}`);
    };

    const buyIcedCoffee = evt => {
        const id = evt.currentTarget.id;
        getIcedById(id).then(res => {
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
    return (
        <CoffeeList>
            {coffeeList.map(item => {
                const { id, title, description, image, ingredients } = item;
                return (
                    <CoffeeItem key={nanoid()}>
                        <CoffeeName>{title}</CoffeeName>
                        <CoffeeSub>{description}</CoffeeSub>
                        <CoffeeSub>
                            <CoffeeSpan>Ingredients: </CoffeeSpan>
                            {ingredients.join(', ')}
                        </CoffeeSub>
                        <CoffeeImg src={image} alt={title} />
                        <BusketButton
                            type="button"
                            id={id}
                            onClick={buyIcedCoffee}
                        >
                            take to busket
                        </BusketButton>
                    </CoffeeItem>
                );
            })}
        </CoffeeList>
    );
};

export default IceCoffee;
