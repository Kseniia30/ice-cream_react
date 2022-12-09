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

    const getQuantity = evt => {
        console.log(evt.target.value);
    };
    return (
        <>
            <ul>
                {shoppingList.map(item => {
                    const id = item.name || item.title;
                    return (
                        <li key={nanoid()}>
                            <b>{item.name || item.title}</b>
                            <button type="button" id={id}>
                                Delete
                            </button>
                            <label>
                                how many
                                <input
                                    type="number"
                                    value="1"
                                    onChange={getQuantity}
                                />
                            </label>
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
