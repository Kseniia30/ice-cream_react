import { historyData, historyImages } from 'data/historyData';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import scss from '../components/common/common.module.css';
import css from './css/History.module.css';

const History = () => {
    return (
        <>
            <div className={scss.goBackDiv}>
                <button type="button" className={scss.goBackBtn}>
                    <Link to="/" className={scss.goBackLink}>
                        Go back
                    </Link>
                </button>
            </div>
            <h1 className={scss.title}>History of coffee</h1>
            <p className={scss.littleTitle}>(By Robin Weir)</p>
            <div className={css.historyFlexDiv}>
                <ul className={css.historyImgList}>
                    {historyImages.map(image => {
                        const { id, src, height } = image;
                        return (
                            <li key={id} className={css.histioryItem}>
                                <img
                                    src={src}
                                    alt="ice cream"
                                    width="240"
                                    height={height}
                                    className={css.histioryImg}
                                />
                            </li>
                        );
                    })}
                </ul>
                <ul className={css.historyTextList}>
                    {historyData.map(item => {
                        const { id, title, time, content } = item;
                        return (
                            <li key={id} className={css.histioryItem}>
                                <p className={css.historyTime}>{time}</p>
                                <h2 className={css.historyTextTitle}>
                                    {title}
                                </h2>
                                {content.map(text => {
                                    return (
                                        <p
                                            key={nanoid()}
                                            className={css.historyText}
                                        >
                                            {text}
                                        </p>
                                    );
                                })}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};
export default History;
