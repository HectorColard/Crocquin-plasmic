import { PLASMIC } from "@/plasmic-init";
import { Footer } from "@/components/layout/Footer";

PLASMIC.registerComponent(Footer, {
    name: "Footer",
    displayName: "Pied de page",
    importPath: "@/components/layout/Footer.tsx",
    description:
        "Pied de page avec identité, contact, réseaux sociaux et mentions légales.",
    props: {
        brand: {
            type: "object",
            displayName: "Identité",
            fields: {
                name: {
                    type: "string",
                    displayName: "Nom",
                },
                description: {
                    type: "string",
                    displayName: "Description",
                    control: "large",
                },
            },
        },
        contact: {
            type: "object",
            displayName: "Contact",
            fields: {
                title: {
                    type: "string",
                    displayName: "Titre",
                },
                email: {
                    type: "string",
                    displayName: "Adresse e-mail",
                },
                phone: {
                    type: "string",
                    displayName: "Téléphone",
                },
            },
        },
        social: {
            type: "object",
            displayName: "Réseaux sociaux",
            fields: {
                title: {
                    type: "string",
                    displayName: "Titre",
                },
                links: {
                    type: "array",
                    displayName: "Liens sociaux",
                    itemType: {
                        type: "object",
                        fields: {
                            name: {
                                type: "string",
                                displayName: "Nom du réseau",
                            },
                            url: {
                                type: "href",
                                displayName: "URL du profil",
                            },
                        },
                    },
                },
            },
        },
        legal: {
            type: "object",
            displayName: "Mentions légales",
            fields: {
                copyright: {
                    type: "string",
                    displayName: "Copyright",
                },
                mentionsLink: {
                    type: "object",
                    displayName: "Lien des mentions légales",
                    fields: {
                        label: {
                            type: "string",
                            displayName: "Libellé",
                        },
                        url: {
                            type: "href",
                            displayName: "URL",
                        },
                    },
                },
            },
        },
    },
});
