import Image from "next/image";

type HeroProps = {
    title?: string;
    subtitle?: string;
    primaryButtonLabel?: string;
    secondaryButtonLabel?: string;
};

const defaultProps: Required<HeroProps> = {
    title: "NOUS MÉRITONS TOUS D’ÊTRE SOIGNÉS ET SOULAGÉS",
    subtitle: "PHYSIQUE - PSYCHOLOGIQUE - EMOTIONNEL - ENVIRONNEMENTAL",
    primaryButtonLabel: "Prendre rendez-vous",
    secondaryButtonLabel: "En savoir plus",
};

export function Hero({
    title = defaultProps.title,
    subtitle = defaultProps.subtitle,
    primaryButtonLabel = defaultProps.primaryButtonLabel,
    secondaryButtonLabel = defaultProps.secondaryButtonLabel,
}: HeroProps) {
    console.log("Hero component props:", { title, subtitle, primaryButtonLabel, secondaryButtonLabel });
    return (
        <section className="hero" id="accueil">
            <div className="hero-copy">
                <h1>{title}</h1>
                <p>{subtitle}</p>
                <a className="button primary" href="#contact">
                    {primaryButtonLabel}
                </a>
                <a className="button secondary" href="#presentation">
                    {secondaryButtonLabel}
                </a>
            </div>
            <picture className="energy-mark">
                <source
                    media="(max-width: 699px)"
                    srcSet={`/assets/onde-mini.svg`}
                />
                <Image
                    src={`/assets/onde.svg`}
                    alt="onde"
                    width={500}
                    height={500}
                />
            </picture>
        </section>
    );
}
