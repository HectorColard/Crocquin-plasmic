import Image from "next/image";

type PresentationProps = {
    title?: string;
    content?: PresentationContent;
};

type PresentationContent = {
    magnetism: {
        title: string;
        paragraphs: {
            text: string;
        }[];
        introduction: string;
        points: {
            text: string;
        }[];
        disclaimer: string;
        image: {
            src: string;
            alt: string;
        };
    };
    background: {
        title: string;
        paragraphs: {
            text: string;
            muted?: boolean;
        }[];
        image: {
            src: string;
            alt: string;
        };
    };
};

const defaultProps: Required<PresentationProps> = {
    title: "Présentation",
    content: {
        magnetism: {
            title: "Le magnétisme",
            paragraphs: [
                {
                    text: "Le magnétisme est une pratique énergétique qui vise à favoriser un rééquilibrage et une meilleure circulation des énergies dans le corps.",
                },
                {
                    text: "Il peut accompagner différentes situations et contribuer à apporter détente, apaisement et mieux-être.",
                },
            ],
            introduction:
                "Les séances peuvent notamment être proposées pour accompagner :",
            points: [
                {
                    text: "les troubles du sommeil et les difficultés à retrouver un sommeil apaisé ;",
                },
                {
                    text: "les tensions, contractures et sensations de nœuds dans le corps ;",
                },
                {
                    text: "certaines problématiques cutanées, comme l’eczéma ou le zona ;",
                },
                {
                    text: "les brûlures, notamment grâce à l’accompagnement du « coupeur de feu ».",
                },
            ],
            disclaimer:
                "Le magnétisme peut également être pratiqué en complément d’un parcours médical, notamment pour les personnes suivant des traitements tels que la radiothérapie ou la chimiothérapie. Il ne se substitue en aucun cas à un traitement ou à un suivi médical.",
            image: {
                src: "/assets/fleur.png",
                alt: "Fleur de pissenlit en noir et blanc",
            },
        },
        background: {
            title: "Mon parcours",
            paragraphs: [
                {
                    text: "Après avoir suivi une formation auprès d’un professionnel reconnu dans le domaine du magnétisme, je pratique cette discipline depuis six ans.",
                },
                {
                    text: "Au fil de ma pratique, j’ai développé une approche attentive et bienveillante, adaptée aux besoins de chaque personne. Mon objectif est de vous accompagner dans un cadre d’écoute, de confiance et de respect, afin de favoriser votre bien-être.",
                    muted: true,
                },
            ],
            image: {
                src: "/assets/fleur.png",
                alt: "Fleur de pissenlit en noir et blanc",
            },
        },
    },
};

export function Presentation({
    title = defaultProps.title,
    content = defaultProps.content,
}: PresentationProps) {
    return (
        <section className="presentation section" id="presentation">
            <div className="presentation-copy">
                <div className="magnetism">
                    <h2>{content.magnetism.title}</h2>
                    {content.magnetism.paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph.text}</p>
                    ))}
                    <p>{content.magnetism.introduction}</p>
                    <ul>
                        {content.magnetism.points.map((point, index) => (
                            <li key={index}>{point.text}</li>
                        ))}
                    </ul>
                    <p>{content.magnetism.disclaimer}</p>
                </div>
                <div className="botanical mobile-botanical">
                    <img
                        src={`${content.magnetism.image.src}`}
                        alt={`${content.magnetism.image.alt}`}
                        width={500}
                        height={500}
                    />
                </div>
                <div className="background">
                    <h2>{content.background.title}</h2>
                    {content.background.paragraphs.map((paragraph, index) => (
                        <p
                            key={index}
                            className={paragraph.muted ? "muted" : ""}
                        >
                            {paragraph.text}
                        </p>
                    ))}
                </div>
            </div>
            <div className="botanical desktop-botanical">
                <img
                    src={`${content.background.image.src}`}
                    alt={`${content.background.image.alt}`}
                    width={500}
                    height={500}
                />
            </div>
        </section>
    );
}
