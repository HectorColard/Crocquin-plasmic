import { PLASMIC } from "@/plasmic-init";
import { Method } from "@/components/sections/Method";

PLASMIC.registerComponent(Method, {
    name: "Method",
    displayName: "Méthodes",
    description: "Présente les différentes modalités des séances.",

    props: {
        heading: {
            type: "object",
            displayName: "En-tête",
            fields: {
                title: {
                    type: "string",
                    displayName: "Titre",
                },
                description: {
                    type: "string",
                    displayName: "Description",
                    control: "large",
                },
            },
        },

        services: {
            type: "array",
            displayName: "Prestations",
            itemType: {
                type: "object",
                fields: {
                    title: {
                        type: "string",
                        displayName: "Titre",
                    },
                    description: {
                        type: "string",
                        displayName: "Description",
                        control: "large",
                    },
                    icon: {
                        type: "object",
                        displayName: "Icône",
                        fields: {
                            url: {
                                type: "imageUrl",
                                displayName: "Image de l'icône",
                            },
                            alt: {
                                type: "string",
                                displayName: "Texte alternatif",
                            },
                        },
                    },
                },
            },
        },

        footnotes: {
            type: "array",
            displayName: "Notes et précisions",
            itemType: {
                type: "object",
                fields: {
                    text: {
                        type: "string",
                        displayName: "Texte",
                        control: "large",
                    },
                },
            },
        },
    },
});