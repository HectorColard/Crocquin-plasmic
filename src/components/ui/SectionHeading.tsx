export function SectionHeading({
    title,
    children,
}: {
    title: string;
    children: string;
}) {
    return (
        <header className="section-heading">
            <h2>{title}</h2>
            <p>{children}</p>
        </header>
    );
}
