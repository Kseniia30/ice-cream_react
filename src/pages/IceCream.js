import {
    BusketButton,
    Button,
    Container,
    GoBackDiv,
    GoBackLink,
    PagesTitle,
} from 'components/common/Common.styled';
import { iceCreamData } from 'data/iceCreamData';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from 'redux/store';
import {
    IceCreamImg,
    IceCreamItem,
    IceCreamList,
    IceCreamName,
    IceCreamSpan,
    IceCreamSub,
} from './styled/IceCream.styled';

const IceCream = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);

    const buyIceCream = evt => {
        const id = evt.target.id;
        const product = iceCreamData.find(item => item.id === id);
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
                <PagesTitle>Ice cream</PagesTitle>
                <IceCreamList>
                    {iceCreamData.map(item => {
                        const { id, name, sub, img, ingredients } = item;
                        return (
                            <IceCreamItem key={nanoid()}>
                                <IceCreamName>{name}</IceCreamName>
                                <IceCreamSub>{sub}</IceCreamSub>
                                <IceCreamSub>
                                    <IceCreamSpan>Ingredients:</IceCreamSpan>{' '}
                                    {ingredients.join(', ')}
                                </IceCreamSub>
                                <IceCreamImg src={img} alt={name} />
                                <br />
                                <BusketButton
                                    type="button"
                                    onClick={buyIceCream}
                                    id={id}
                                >
                                    take to busket
                                </BusketButton>
                            </IceCreamItem>
                        );
                    })}
                </IceCreamList>
            </Container>
        </>
    );
};
export default IceCream;
