export const Section = ({ id, className, children }) => {
    return (
        <section id={id} className={className}>
            {children}
        </section>
    );
};
