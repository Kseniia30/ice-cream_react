import { LittleTitle } from 'components/common/Common.styled';
import { BuyButton } from './styled/Busket.styled';
import {
    OrderBox,
    OrderInput,
    OrderLabel,
    OrderOptions,
    OrderSelect,
    OrderTextArea,
} from './styled/Order.styled';

export const Order = ({ onClose }) => {
    return (
        <OrderBox id="order">
            <LittleTitle>Confirm the order and enter your details</LittleTitle>
            <form>
                <OrderLabel>
                    Name
                    <OrderInput type="text" name="name" required />
                </OrderLabel>
                <OrderLabel>
                    Email
                    <OrderInput type="email" name="email" required />
                </OrderLabel>
                <OrderLabel>
                    Phone
                    <OrderInput type="tel" name="phone" />
                </OrderLabel>
                <OrderLabel>
                    Address where you will bring your order
                    <OrderSelect name="city" defaultValue="c" required>
                        <option value="c">Chicago</option>
                        <option value="la">Los Angeles</option>
                        <option value="ny">New York</option>
                    </OrderSelect>
                </OrderLabel>
                <OrderLabel>
                    Payment
                    <OrderSelect name="type" defaultValue="ep" required>
                        <OrderOptions value="cp">Cash payment</OrderOptions>
                        <OrderOptions value="t">
                            Transfer from card
                        </OrderOptions>
                        <OrderOptions value="ep">E-pay</OrderOptions>
                    </OrderSelect>
                </OrderLabel>
                <OrderLabel>
                    Order comment <br />
                    <OrderTextArea name="feedback" rows="5" />
                </OrderLabel>
                <BuyButton type="submit" onClick={onClose}>
                    Buy
                </BuyButton>
            </form>
        </OrderBox>
    );
};
