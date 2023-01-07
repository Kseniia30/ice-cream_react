import {
    Button,
    Container,
    GoBackDiv,
    GoBackLink,
    PagesTitle,
} from 'components/common/Common.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
    CoffeeBox,
    CoffeeLinkItem,
    CoffeeLinkList,
    CoffeeMainBox,
    CoffeeMainImg,
    CoffeeMainImgSecond,
    CoffeeMainText,
    CoffeeNavLink,
    CoffeeTextBox,
} from './styled/Coffee.styled';

const Coffee = () => {
    return (
        <>
            <GoBackDiv>
                <Container>
                    <Button type="button">
                        <GoBackLink to="/">Go back</GoBackLink>
                    </Button>
                </Container>
            </GoBackDiv>
            <CoffeeBox>
                <Container>
                    <PagesTitle>Coffee</PagesTitle>
                    <CoffeeMainBox>
                        <CoffeeTextBox>
                            <CoffeeMainText>
                                Coffee is a drink prepared from roasted coffee
                                beans. Darkly colored, bitter, and slightly
                                acidic, coffee has a stimulating effect on
                                humans, primarily due to its caffeine content.
                                It is the most popular hot drink in the world.
                            </CoffeeMainText>
                            <CoffeeMainText>
                                Seeds of the Coffea plant's fruits are separated
                                to produce unroasted green coffee beans. The
                                beans are roasted and then ground into fine
                                particles that are typically steeped in hot
                                water before being filtered out, producing a cup
                                of coffee. It is usually served hot, although
                                chilled or iced coffee is common. Coffee can be
                                prepared and presented in a variety of ways
                                (e.g., espresso, French press, caffè latte, or
                                already-brewed canned coffee). Sugar, sugar
                                substitutes, milk, and cream are often used to
                                mask the bitter taste or enhance the flavor.
                            </CoffeeMainText>
                            <CoffeeMainText>
                                Though coffee is now a global commodity, it has
                                a long history tied closely to food traditions
                                around the Red Sea. The earliest credible
                                evidence of coffee drinking in the form of the
                                modern beverage appears in modern-day Yemen from
                                the mid-15th century in Sufi shrines, where
                                coffee seeds were first roasted and brewed in a
                                manner similar to current methods. The Yemenis
                                procured the coffee beans from the Ethiopian
                                Highlands via coastal Somali intermediaries and
                                began cultivation. By the 16th century, the
                                drink had reached the rest of the Middle East
                                and North Africa, later spreading to Europe. In
                                the 20th century, coffee became a global
                                commodity, creating different coffee cultures
                                around the world.
                            </CoffeeMainText>
                            <CoffeeMainText>
                                The two most commonly grown coffee bean types
                                are C. arabica and C. robusta. Coffee plants are
                                cultivated in over 70 countries, primarily in
                                the equatorial regions of the Americas,
                                Southeast Asia, the Indian subcontinent, and
                                Africa. As of 2018, Brazil was the leading
                                grower of coffee beans, producing 35% of the
                                world's total. Green, unroasted coffee is the
                                most traded agricultural commodity and one of
                                the most traded commodities overall, second only
                                to petroleum. Despite sales of coffee reaching
                                billions of dollars worldwide, farmers producing
                                coffee beans disproportionately live in poverty.
                                Critics of the coffee industry have also pointed
                                to its negative impact on the environment and
                                the clearing of land for coffee-growing and
                                water use.
                            </CoffeeMainText>
                            <CoffeeLinkList>
                                <CoffeeLinkItem>
                                    <CoffeeNavLink to="/coffee/hot">
                                        Hot coffee
                                    </CoffeeNavLink>
                                </CoffeeLinkItem>
                                <CoffeeLinkItem>
                                    <CoffeeNavLink to="/coffee/ice">
                                        Ice coffee
                                    </CoffeeNavLink>
                                </CoffeeLinkItem>
                            </CoffeeLinkList>
                        </CoffeeTextBox>
                        <div>
                            <CoffeeMainImg
                                src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                alt="coffee"
                            />
                            <CoffeeMainImgSecond
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzQ_nzF_GnbV4PaK1Afx1-ry1zNGP4x5vtEg&usqp=CAU"
                                alt="coffee"
                            />
                        </div>
                    </CoffeeMainBox>
                    <Suspense fallback={null}>
                        <Outlet />
                    </Suspense>
                </Container>
            </CoffeeBox>
        </>
    );
};
export default Coffee;
