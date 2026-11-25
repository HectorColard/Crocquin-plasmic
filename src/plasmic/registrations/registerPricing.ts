import { PLASMIC } from "@/plasmic-init";
import { Pricing } from "@/components/sections/Pricing";

PLASMIC.registerComponent(Pricing, {
    name: "Pricing",
    displayName: "Tarifs",
    importPath: "@/components/sections/Pricing.tsx",
    description: "Présente les tarifs des différentes séances.",
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
                },
            },
        },
        prices: {
            type: "array",
            displayName: "Tarifs",
            itemType: {
                type: "object",
                fields: {
                    title: {
                        type: "string",
                        displayName: "Nom de la prestation",
                    },
                    description: {
                        type: "string",
                        displayName: "Description",
                    },
                    price: {
                        type: "string",
                        displayName: "Prix",
                    },
                },
            },
        },
    },
});
