import css from './css/Busket.module.css';
import { nanoid } from 'nanoid';

export const Busket = () => {
    const milkshakes = localStorage.getItem('milkshake')
        ? JSON.parse(localStorage.getItem('milkshake'))
        : [];
    const iceCream = localStorage.getItem('iceCream')
        ? JSON.parse(localStorage.getItem('iceCream'))
        : [];
    const iceCoffee = localStorage.getItem('icedCoffee')
        ? JSON.parse(localStorage.getItem('icedCoffee'))
        : [];
    const hotCoffee = localStorage.getItem('hotCoffee')
        ? JSON.parse(localStorage.getItem('hotCoffee'))
        : [];
    const shoppingList = [
        ...iceCream,
        ...milkshakes,
        ...iceCoffee,
        ...hotCoffee,
    ];

    return (
        <>
            <ul>
                {shoppingList.map(item => {
                    const id = item.name || item.title;
                    return (
                        <li key={nanoid()} className={css.busketListItem}>
                            <b className={css.product}>
                                {item.name || item.title}
                            </b>
                            <button
                                id={id}
                                type="button"
                                className={css.quanitityBTN}
                            >
                                +1
                            </button>
                            <button
                                id={id}
                                type="button"
                                className={css.quanitityBTN}
                            >
                                -1
                            </button>
                            <p className={css.quanitity}>Amount: </p>
                            <button
                                type="button"
                                id={id}
                                className={css.deleteFromBusketBTN}
                            >
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>
            <button type="button" className={css.busketBuyBtn}>
                Buy
            </button>
        </>
    );
};
