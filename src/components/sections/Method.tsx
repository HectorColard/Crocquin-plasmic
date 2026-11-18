import { SectionHeading } from "@/components/ui/SectionHeading";
import {
    ServiceCard,
    type ServiceCardProps,
} from "@/components/ui/ServiceCard";
import { Pagination } from "@/lib/Pagination";

export type MethodProps = {
    heading?: {
        title: string;
        description: string;
    };
    services?: ServiceCardProps[];
    footnotes?: {
        text: string;
    }[];
};

const services: ServiceCardProps[] = [
    {
        title: "Au cabinet",
        description: "À Saint-Ouen-l’Aumône**",
        icon: {
            url: "/assets/Maison.png",
            alt: "Maison",
        },
    },
    {
        title: "Pour vos animaux",
        description: "À votre domicile*",
        icon: {
            url: "/assets/Antenne.png",
            alt: "Animal",
        },
    },
    {
        title: "À distance",
        description: "Avec un rendez-vous téléphonique",
        icon: {
            url: "/assets/Animal.png",
            alt: "Antenne",
        },
    },
];

const footnotes = [
    { text: "* Dans un périmètre de 6kms autour d'Auvers-sur-Oise" },
    { text: "** 1 Place Victor Leveau, 95310 Saint-Ouen-l’Aumône" },
];

const defaultProps: Required<MethodProps> = {
    heading: {
        title: "Méthodes",
        description:
            "Mes séances de magnétisme s’adaptent à vous, patients de tout âge",
    },
    services,
    footnotes,
};

export function Method({
    heading = defaultProps.heading,
    services = defaultProps.services,
    footnotes = defaultProps.footnotes,
}: MethodProps) {
    return (
        <section className="methods section" id="methodes">
            <img className="section-texture" src="/assets/waves.png" alt="" />

            <SectionHeading title={heading.title}>
                {heading.description}
            </SectionHeading>

            <div className="card-row scroll-row">
                {services.map((item, index) => (
                    <ServiceCard key={`${item.title}-${index}`} item={item} />
                ))}
            </div>

            <Pagination count={services.length} />

            <div className="footnotes">
                {footnotes.map((note, index) => (
                    <p key={index}>{note.text}</p>
                ))}
            </div>
        </section>
    );
}
