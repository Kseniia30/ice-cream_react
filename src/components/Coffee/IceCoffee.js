import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { getIceCoffee } from 'fetch/getIceCoffee';
import css from './Coffee.module.css';
import scss from '../common/common.module.css';
import { buyIcedCoffeeFunc } from 'buy/buyFunc';

const IceCoffee = () => {
    const [coffeeList, setCoffeeList] = useState(null);

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
                        <button
                            type="button"
                            className={scss.takeToBusketBtn}
                            id={id}
                            onClick={buyIcedCoffeeFunc}
                        >
                            take to busket
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default IceCoffee;
