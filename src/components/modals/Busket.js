import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteProduct, getList } from 'redux/store';
import {
    LittleTitle,
    PagesTitle,
    BusketButton,
} from 'components/common/Common.styled';
import {
    AmountBox,
    BusketItem,
    BusketList,
    BusketProductAmount,
    BusketProductName,
    QuantityBtn,
    BuyButton,
} from './styled/Busket.styled';
import { useEffect } from 'react';

export const Busket = () => {
    const productList = useSelector(state => state.productList);
    const dispatch = useDispatch();

    useEffect(() => {
        const product = productList.map(item => {
            return {
                name: item.name || item.title,
                id: item.name || item.title,
                amount: 1,
            };
        });
        dispatch(getList(product));
    }, [dispatch, productList]);

    const deleteProductfromList = evt => {
        dispatch(deleteProduct(evt.target.id));
    };

    const increment = evt => {
        const amountSpan = document.querySelectorAll('.amount');
        amountSpan.forEach(span => {
            if (span.getAttribute('id') === evt.target.id) {
                span.textContent = Number(span.textContent) + 1;
            }
        });
    };

    const decrement = evt => {
        const amountSpan = document.querySelectorAll('.amount');
        amountSpan.forEach(span => {
            if (
                span.getAttribute('id') === evt.target.id &&
                Number(span.textContent) > 1
            ) {
                span.textContent = Number(span.textContent) - 1;
            }
        });
    };

    return (
        <>
            <PagesTitle>Your choice</PagesTitle>
            {productList.length === 0 && (
                <LittleTitle>You did't choose anything</LittleTitle>
            )}
            <BusketList>
                {productList.map(item => {
                    const productName = item.name || item.title;
                    const id = item.name || item.title;
                    return (
                        <BusketItem key={nanoid()}>
                            <BusketProductName>{productName}</BusketProductName>
                            <AmountBox id={id}>
                                <QuantityBtn
                                    id={id}
                                    type="button"
                                    onClick={increment}
                                >
                                    +1
                                </QuantityBtn>
                                <QuantityBtn
                                    id={id}
                                    type="button"
                                    onClick={decrement}
                                >
                                    -1
                                </QuantityBtn>
                                <BusketProductAmount>
                                    Amount:
                                    <span className="amount" id={id}>
                                        1
                                    </span>
                                </BusketProductAmount>
                            </AmountBox>
                            <BusketButton
                                type="button"
                                id={id}
                                onClick={deleteProductfromList}
                            >
                                Delete
                            </BusketButton>
                        </BusketItem>
                    );
                })}
            </BusketList>
            {productList.length !== 0 && (
                <BuyButton type="button">Buy</BuyButton>
            )}
        </>
    );
};
