import css from './css/Busket.module.css';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteProduct } from 'redux/store';
import scss from '../common/common.module.css';

export const Busket = () => {
    const productList = useSelector(state => state.productList);
    const dispatch = useDispatch();

    const deleteProductfromList = evt => {
        dispatch(deleteProduct(evt.target.id));
    };
    return (
        <>
            <h1 className={scss.title} style={{ marginBottom: '10px' }}>
                Your choice
            </h1>
            {productList.length === 0 && (
                <p className={scss.littleTitle}>You did't choose anything</p>
            )}
            <ul>
                {productList.map(item => {
                    const productName = item.name || item.title;
                    const id = item.name || item.title;
                    return (
                        <li key={nanoid()} className={css.busketListItem}>
                            <b className={css.product}>{productName}</b>
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
                                onClick={deleteProductfromList}
                            >
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ul>
            {productList.length !== 0 && (
                <button type="button" className={css.busketBuyBtn}>
                    Buy
                </button>
            )}
        </>
    );
};
