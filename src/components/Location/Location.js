import { Section } from 'components/common/Section';
import {
    Cafe,
    City,
    DateItem,
    DateList,
    Days,
    FoodTruck,
    LocationItem,
    LocationLink,
    LocationList,
    Time,
} from './Location.styled';

export const Location = () => {
    return (
        <Section
            id="location"
            style={{
                backgroundImage:
                    'linear-gradient(to bottom, #FFF 327px, #FFF5F6 327px)',
            }}
        >
            <LocationList>
                <LocationItem>
                    <Cafe>CAFE</Cafe>
                    <City>Chicago</City>
                    <DateList>
                        <DateItem>
                            <Days>Monday - Friday</Days>
                            <Time>06:00 AM - 10:00 PM</Time>
                        </DateItem>
                        <DateItem>
                            <Days>Saturday - Sunday</Days>
                            <Time>08:00 AM - 16:00 PM</Time>
                        </DateItem>
                    </DateList>
                    <ul>
                        <li>
                            <LocationLink href="tel:+610383766286">
                                +61(0) 383 766 286
                            </LocationLink>
                        </li>
                        <li>
                            <LocationLink href="mailto:noreply@envato.com">
                                noreply@envato.com
                            </LocationLink>
                        </li>
                    </ul>
                </LocationItem>
                <LocationItem>
                    <FoodTruck>FOOD TRUCK</FoodTruck>
                    <City>Los Angeles</City>
                    <DateList>
                        <DateItem>
                            <Days>Monday - Friday</Days>
                            <Time>06:00 AM - 10:00 PM</Time>
                        </DateItem>
                        <DateItem>
                            <Days>Saturday - Sunday</Days>
                            <Time>08:00 AM - 16:00 PM</Time>
                        </DateItem>
                    </DateList>
                    <ul>
                        <li>
                            <LocationLink href="tel:+610383766284">
                                +61(0) 383 766 284
                            </LocationLink>
                        </li>
                        <li>
                            <LocationLink href="mailto:noreply@envato.com">
                                noreply@envato.com
                            </LocationLink>
                        </li>
                    </ul>
                </LocationItem>
                <LocationItem>
                    <Cafe>CAFE</Cafe>
                    <City>New York</City>
                    <DateList>
                        <DateItem>
                            <Days>Monday - Friday</Days>
                            <Time>06:00 AM - 10:00 PM</Time>
                        </DateItem>
                        <DateItem>
                            <Days>Saturday - Sunday</Days>
                            <Time>08:00 AM - 16:00 PM</Time>
                        </DateItem>
                    </DateList>
                    <ul>
                        <li>
                            <LocationLink href="tel:+610383766285">
                                +61(0) 383 766 285
                            </LocationLink>
                        </li>
                        <li>
                            <LocationLink href="mailto:noreply@envato.com">
                                noreply@envato.com
                            </LocationLink>
                        </li>
                    </ul>
                </LocationItem>
            </LocationList>
        </Section>
    );
};
