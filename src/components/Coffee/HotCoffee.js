import { getHotCoffee } from 'fetch/getHotCoffee';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import css from './Coffee.module.css';
import scss from '../common/common.module.css';
import { buyHotCoffeeFunc } from 'buy/buyFunc';

const HotCoffee = () => {
    const [coffeeList, setCoffeeList] = useState(null);

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
                            onClick={buyHotCoffeeFunc}
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
