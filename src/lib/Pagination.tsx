"use client";

import { useEffect, useRef, useState } from "react";

export function Pagination({ count }: { count: number }) {
    const paginationRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const scrollContainer = paginationRef.current?.previousElementSibling;
        if (!(scrollContainer instanceof HTMLElement)) {
            return;
        }

        const updateActiveIndex = () => {
            const cards = Array.from(scrollContainer.children);
            if (cards.length === 0) {
                return;
            }

            const containerLeft = scrollContainer.getBoundingClientRect().left;
            const nextIndex = cards.reduce((nearestIndex, card, index) => {
                const cardDistance = Math.abs(
                    card.getBoundingClientRect().left - containerLeft,
                );
                const nearestDistance = Math.abs(
                    cards[nearestIndex].getBoundingClientRect().left -
                        containerLeft,
                );

                return cardDistance < nearestDistance ? index : nearestIndex;
            }, 0);

            setActiveIndex(nextIndex);
        };

        updateActiveIndex();
        scrollContainer.addEventListener("scroll", updateActiveIndex, {
            passive: true,
        });

        return () =>
            scrollContainer.removeEventListener("scroll", updateActiveIndex);
    }, [count]);

    return (
        <div ref={paginationRef} className="pagination" aria-hidden="true">
            {Array.from({ length: count }, (_, index) => (
                <span
                    key={index}
                    className={index === activeIndex ? "active" : ""}
                />
            ))}
        </div>
    );
}
