import { milkShakes } from 'data/milkShakesData';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from 'redux/store';
import {
    BusketButton,
    Button,
    Container,
    GoBackDiv,
    GoBackLink,
    PagesTitle,
} from 'components/common/Common.styled';
import {
    MilkshakesImg,
    MilkshakesItem,
    MilkshakesList,
    MilkshakesName,
    MilkshakesSub,
} from './styled/Milkshakes.styled';

const MilkShakes = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const butMilkShake = evt => {
        const id = evt.target.id;
        const product = milkShakes.find(item => item.id === id);
        try {
            const productItem = productList.find(
                item => item.name === product.name
            );
            if (productItem.name === product.name) {
                return alert(`${product.name} is already is the busket`);
            }
        } catch (err) {
            console.log(err.message);
        }
        dispatch(addProduct(product));
    };
    return (
        <>
            <GoBackDiv>
                <Container>
                    <Button type="button">
                        <GoBackLink to="/">Go back</GoBackLink>
                    </Button>
                </Container>
            </GoBackDiv>
            <Container>
                <PagesTitle>Milkshakes</PagesTitle>
                <MilkshakesList>
                    {milkShakes.map(item => {
                        const { id, name, sub, img } = item;
                        return (
                            <MilkshakesItem key={nanoid()}>
                                <MilkshakesName>{name}</MilkshakesName>
                                <MilkshakesSub>{sub}</MilkshakesSub>
                                <MilkshakesImg src={img} alt={name} />
                                <BusketButton
                                    type="button"
                                    id={id}
                                    onClick={butMilkShake}
                                >
                                    take to busket
                                </BusketButton>
                            </MilkshakesItem>
                        );
                    })}
                </MilkshakesList>
            </Container>
        </>
    );
};
export default MilkShakes;
