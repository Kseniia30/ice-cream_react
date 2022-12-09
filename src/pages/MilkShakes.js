import { buyMilkShakes } from 'buy/buyFunc';
import { milkShakes } from 'data/milkShakesData';
import { nanoid } from 'nanoid';
import { Link } from 'react-router-dom';
import scss from '../components/common/common.module.css';
import css from './css/MilkShakes.module.css';

const MilkShakes = () => {
    return (
        <>
            <div className={scss.goBackDiv}>
                <button type="button" className={scss.goBackBtn}>
                    <Link to="/" className={scss.goBackLink}>
                        Go back
                    </Link>
                </button>
            </div>
            <h1 className={scss.title}>Milkshakes</h1>
            <ul className={css.shakesList}>
                {milkShakes.map(item => {
                    const { id, name, sub, img } = item;
                    return (
                        <li key={nanoid()} className={css.shakesItem}>
                            <h2 className={css.shakesTitle}>{name}</h2>
                            <p className={css.shakesDescr}>{sub}</p>
                            <img
                                src={img}
                                alt={name}
                                className={css.shakesImg}
                            />
                            <button
                                type="button"
                                className={scss.takeToBusketBtn}
                                id={id}
                                onClick={buyMilkShakes}
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
export default MilkShakes;
