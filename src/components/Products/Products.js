import { Section } from 'components/common/Section';
import { AiOutlineArrowRight } from 'react-icons/ai';
import {
    ProductBox,
    ProductItemFirst,
    ProductItemSecond,
    ProductItemThird,
    ProductLink,
    ProductList,
    ProductText,
    ProductTitle,
} from './Product.styled';
import { LittleTitle, Title } from 'components/common/Common.styled';

export const Products = () => {
    return (
        <Section id="products">
            <ProductBox>
                <LittleTitle>100% natural</LittleTitle>
                <Title>products</Title>
                <ProductList>
                    <ProductItemFirst>
                        <ProductTitle>Ice cream</ProductTitle>
                        <ProductText>
                            Ice cream is a sweetened frozen food typically eaten
                            as a snack or dessert. It may be made from milk or
                            cream and is flavoured with a sweetener, either
                            sugar or an alternative, and a spice, such as cocoa
                            or vanilla, or with fruit such as strawberries or
                            peaches.
                        </ProductText>
                        <ProductLink to="/icecream">
                            <AiOutlineArrowRight />
                        </ProductLink>
                    </ProductItemFirst>
                    <ProductItemSecond>
                        <ProductTitle>Coffee</ProductTitle>
                        <ProductText>
                            Coffee is a drink prepared from roasted coffee
                            beans. Darkly colored, bitter, and slightly acidic,
                            coffee has a stimulating effect on humans, primarily
                            due to its caffeine content. It is the most popular
                            hot drink in the world.
                        </ProductText>
                        <ProductLink to="/coffee">
                            <AiOutlineArrowRight />
                        </ProductLink>
                    </ProductItemSecond>
                    <ProductItemThird>
                        <ProductTitle>Milkshakes</ProductTitle>
                        <ProductText>
                            A milkshake (sometimes simply called a shake) is a
                            sweet beverage made by blending milk, ice cream, and
                            flavorings or sweeteners.
                        </ProductText>
                        <ProductLink to="/milkshakes">
                            <AiOutlineArrowRight />
                        </ProductLink>
                    </ProductItemThird>
                </ProductList>
            </ProductBox>
        </Section>
    );
};
