export type TestimonialCardProps = {
    author: string;
    quote: string;
    location: string;
};

export function TestimonialCard({ item }: { item: TestimonialCardProps }) {
    return (
        <article className="card testimonial-card">
            <p className="quote">{item.quote}</p>
            <footer>
                <span />
                <div>
                    <b>{item.author}</b>
                    <small>{item.location}</small>
                </div>
            </footer>
        </article>
    );
}
