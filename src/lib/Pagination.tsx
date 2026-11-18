export function Pagination({ count }: { count: number }) {
    return (
        <div className="pagination" aria-hidden="true">
            {Array.from({ length: count }, (_, index) => (
                <span key={index} className={index === 0 ? "active" : ""} />
            ))}
        </div>
    );
}
