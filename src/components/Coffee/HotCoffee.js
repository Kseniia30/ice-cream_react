import { getHotCoffee } from 'fetch/getHotCoffee';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import css from './Coffee.module.css';
import scss from '../common/common.module.css';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addProduct } from 'redux/store';

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
    return (
        <ul className={css.coffeeList}>
            {coffeeList.map(item => {
                const { id, title, description, image, ingredients } = item;
                return (
                    <li key={nanoid()} className={css.coffeeItem}>
                        <h3 className={css.coffeeTitle}>{title}</h3>
                        <p className={css.coffeeDescr}>{description}</p>
                        <p className={css.coffeeDescr}>
                            <b>Ingredients: </b>
                            {ingredients.join(', ')}
                        </p>
                        <img
                            src={image}
                            alt={title}
                            className={css.coffeeImg}
                        />
                        <br />
                        <button
                            id={id}
                            type="button"
                            className={scss.takeToBusketBtn}
                            onClick={buyHotCoffee}
                        >
                            take to busket
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default HotCoffee;
