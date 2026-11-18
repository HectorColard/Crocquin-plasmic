import { SectionHeading } from "@/components/ui/SectionHeading";
import { PriceCard } from "@/components/ui/PriceCard";
import { Pagination } from "@/lib/Pagination";

type PricingProps = {
    heading?: {
        title: string;
        description: string;
    };
    prices?: {
        title: string;
        description: string;
        price: string;
    }[];
};

const prices = [
    {
        title: "Séance adulte",
        description: "Séance de magnétisme pour adulte",
        price: "50€",
    },
    {
        title: "Séance enfant",
        description: "Séance de magnétisme pour enfant",
        price: "30€",
    },
    {
        title: "Séance animale",
        description: "Séance de magnétisme pour animaux",
        price: "40€",
    },
];

const defaultProps: Required<PricingProps> = {
    heading: {
        title: "Tarifs",
        description: "Découvrez mes tarifs pour les différentes prestations",
    },
    prices: prices,
};

export function Pricing({
    heading = defaultProps.heading,
    prices = defaultProps.prices,
}: PricingProps) {
    return (
        <section className="pricing section" id="tarifications">
            <SectionHeading title={heading.title}>
                {heading.description}
            </SectionHeading>
            <div className="card-row scroll-row">
                {prices.map((item) => (
                    <PriceCard key={item.title} item={item} />
                ))}
            </div>
            <Pagination count={prices.length} />
        </section>
    );
}
