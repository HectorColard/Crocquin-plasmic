import { PLASMIC } from "@/plasmic-init";
import { Contact } from "@/components/sections/Contact";

PLASMIC.registerComponent(Contact, {
    name: "Contact",
    displayName: "Contact",
    description: "Section de contact avec formulaire et coordonnées.",
    importPath: "@/components/sections/Contact.tsx",
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
        email: {
            type: "string",
            displayName: "Email",
        },
        phone: {
            type: "string",
            displayName: "Téléphone",
        },
    },
});
