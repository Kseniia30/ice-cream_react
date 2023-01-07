import { Container } from './Common.styled';

export const Section = ({ id, children, style }) => {
    return (
        <section id={id} style={style}>
            <Container>{children}</Container>
        </section>
    );
};
