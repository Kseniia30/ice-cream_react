import css from './css/Location.module.css';
import scss from '../common/common.module.css';
const LocationMap = () => {
    return (
        <div id="map">
            <h2 className={scss.littleTitle}>
                125 W Mountain Ave,Fort Collins, CO 80524, United States of
                America
            </h2>
            <div>
                <div className={css.locationIframeDiv}>
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12119.625849114444!2d-105.08993570322401!3d40.58782004480317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87694af54943b837%3A0xd6b4276c408dedd4!2sWalrus%20Ice%20Cream!5e0!3m2!1sru!2sua!4v1655163836491!5m2!1sru!2sua"
                        width="400"
                        height="400"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className={css.locationIframe}
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default LocationMap;
