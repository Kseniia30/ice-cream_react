import { LocationTitle, Map, MapBox } from './styled/LocationMap.styled';

const LocationMap = () => {
    return (
        <div id="map">
            <LocationTitle>
                125 W Mountain Ave,Fort Collins, CO 80524, United States of
                America
            </LocationTitle>
            <div>
                <MapBox>
                    <Map
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12119.625849114444!2d-105.08993570322401!3d40.58782004480317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87694af54943b837%3A0xd6b4276c408dedd4!2sWalrus%20Ice%20Cream!5e0!3m2!1sru!2sua!4v1655163836491!5m2!1sru!2sua"
                        width="400"
                        height="400"
                        style={{ border: '0' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></Map>
                </MapBox>
            </div>
        </div>
    );
};

export default LocationMap;
