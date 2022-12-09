import { buyIceCream } from 'buy/buyFunc';
import { iceCreamData } from 'data/iceCreamData';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import scss from '../components/common/common.module.css';
import css from './css/IceCream.module.css';

const IceCream = () => {
    return (
        <>
            <div className={scss.goBackDiv}>
                <button type="button" className={scss.goBackBtn}>
                    <Link to="/" className={scss.goBackLink}>
                        Go back
                    </Link>
                </button>
            </div>
            <h1 className={scss.title}>Ice cream</h1>
            <ul className={css.creamList}>
                {iceCreamData.map(item => {
                    const { id, name, sub, img, ingredients } = item;
                    return (
                        <li key={nanoid()} className={css.creamListItem}>
                            <h2 className={css.creamTitle}>{name}</h2>
                            <p className={css.creamDescr}>{sub}</p>
                            <p className={css.creamDescr}>
                                <b>Ingredients:</b> {ingredients.join(', ')}
                            </p>
                            <img
                                src={img}
                                alt={name}
                                className={css.creamImg}
                            />
                            <br />
                            <button
                                type="button"
                                className={scss.takeToBusketBtn}
                                onClick={buyIceCream}
                                id={id}
                            >
                                take to busket
                            </button>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
export default IceCream;
