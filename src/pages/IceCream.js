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
import { useDispatch } from 'react-redux';
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
    const buyIceCream = evt => {
        const id = evt.target.id;
        const product = iceCreamData.filter(item => item.id === id);
        dispatch(addProduct(...product));
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
