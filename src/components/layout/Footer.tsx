import Image from "next/image";
type FooterProps = {
    brand?: {
        name: string;
        description: string;
    };
    contact?: {
        title: string;
        email: string;
        phone: string;
    };
    social?: {
        title: string;
        links: {
            name: string;
            url: string;
        }[];
    };
    legal?: {
        copyright: string;
        mentionsLink: {
            label: string;
            url: string;
        };
    };
};

const defaultProps: Required<FooterProps> = {
    brand: {
        name: "Catherine Lajudie-Rocquin",
        description:
            "Magnétiseuse passionnée par l'équilibre énergétique et le bien-être.",
    },
    contact: {
        title: "Contact",
        email: "contact@catherinelajudie.fr",
        phone: "+33 6 12 34 56 78",
    },
    social: {
        title: "Suivez-moi",
        links: [
            { name: "Instagram", url: "#" },
            { name: "Facebook", url: "#" },
        ],
    },
    legal: {
        copyright: "© 2024 Catherine Lajudie-Rocquin. Tous droits réservés.",
        mentionsLink: {
            label: "Mentions légales",
            url: "#",
        },
    },
};

export function Footer({
    brand = defaultProps.brand,
    contact = defaultProps.contact,
    social = defaultProps.social,
    legal = defaultProps.legal,
}: FooterProps = defaultProps) {
    return (
        <footer className="footer">
            <div className="footer-columns">
                <div className="footer-brand">
                    <h3>{brand.name}</h3>
                    <p>{brand.description}</p>
                </div>
                <div>
                    <p>{contact.title}</p>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                </div>
                <div>
                    <div>
                        <p>{social.title}</p>
                        <div className="social">
                            {social.links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    aria-label={link.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="legal">
                <p>{legal.copyright}</p>
                <a href={legal.mentionsLink.url}>{legal.mentionsLink.label}</a>
            </div>
        </footer>
    );
}
