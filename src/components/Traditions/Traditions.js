import { Section } from 'components/common/Section';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import css from './Traditions.module.css';
import scss from '../common/common.module.css';

export const Traditions = () => {
    return (
        <Section id="tradition" className={css.traditionsSection}>
            <h3 className={scss.littleTitle}>tradition and love </h3>
            <h2 className={scss.title}>how it’s made?</h2>
            <div style={{ display: 'flex', marginTop: '60px' }}>
                <div
                    style={{
                        marginLeft: '145px',
                        width: '470px',
                        marginRight: '140px',
                    }}
                >
                    <p className={css.traditionsText}>
                        One of the most widespread and well-known desserts
                        thanks to his kindness and authenticity of the
                        ingredients! Fresh and high quality food that represents
                        excellence and Italian creativity in the world. But have
                        you ever wondered when, where and why was invented ice
                        cream? Italian Traditions tells you a beautiful story
                        that mixes legends and folk beliefs and testimonies of
                        an ancient tradition.
                    </p>
                    <Link to="/history" className={css.traditionsLink}>
                        Read more
                        <AiOutlineArrowRight
                            className={css.traditionsLinkIcon}
                        />
                    </Link>
                </div>
                <div className={css.imgDiv}>
                    <img
                        src="http://pngimg.com/uploads/cow/cow_PNG50576.png"
                        alt="cow"
                        width="500"
                        style={{
                            position: 'absolute',
                            bottom: '-100px',
                            right: '-240px',
                        }}
                    />
                    <img
                        src="http://pngimg.com/uploads/milk/milk_PNG12758.png"
                        alt="milk"
                        width="400"
                        style={{
                            marginLeft: '100px',
                        }}
                    />
                </div>
            </div>
        </Section>
    );
};
