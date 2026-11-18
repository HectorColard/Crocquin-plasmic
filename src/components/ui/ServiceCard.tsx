export type ServiceCardProps = {
    title?: string;
    description?: string;
    icon?: {
        url: string;
        alt: string;
    };
};

export function ServiceCard({ item }: { item: ServiceCardProps }) {
    return (
        <article className="card service-card">
            <span className="icon-disc">
                {item.icon?.url && (
                    <img
                        src={item.icon.url}
                        alt={item.icon.alt || ""}
                        width={32}
                        height={32}
                    />
                )}
            </span>

            <h3>{item.title}</h3>
            <p>{item.description}</p>
        </article>
    );
}
