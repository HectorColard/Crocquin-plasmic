export type PriceCardProps = {
    title: string;
    description: string;
    price: string;
};

export function PriceCard({ item }: { item: PriceCardProps }) {
    return (
        <article className="card price-card">
            <h3>{item.title}</h3>
            <strong>{item.price}</strong>
            <p>{item.description}</p>
        </article>
    );
}
