import { Presentation } from "@/components/sections/Presentation";
import { PLASMIC } from "@/plasmic-init";

PLASMIC.registerComponent(Presentation, {
    name: "Presentation",
    displayName: "Présentation",
    importPath: "@/components/sections/Presentation.tsx",
    description:
        "Section présentant le magnétisme et le parcours de Catherine.",
    props: {
        content: {
            type: "object",
            displayName: "Contenu",
            fields: {
                magnetism: {
                    type: "object",
                    displayName: "Le magnétisme",
                    fields: {
                        title: {
                            type: "string",
                            displayName: "Titre",
                        },
                        paragraphs: {
                            type: "array",
                            displayName: "Paragraphes",
                            itemType: {
                                type: "object",
                                fields: {
                                    text: {
                                        type: "string",
                                        displayName: "Texte",
                                    },
                                    italic: {
                                        type: "boolean",
                                        displayName: "Texte italique",
                                    }
                                },
                            },
                        },
                        points: {
                            type: "array",
                            displayName: "Liste des accompagnements",
                            itemType: {
                                type: "object",
                                fields: {
                                    text: {
                                        type: "string",
                                        displayName: "Texte",
                                    },
                                },
                            },
                        },
                        disclaimer: {
                            type: "string",
                            displayName: "Avertissement médical",
                        },
                        image: {
                            type: "object",
                            displayName: "Image",
                            fields: {
                                src: {
                                    type: "imageUrl",
                                    displayName: "Image",
                                },
                                alt: {
                                    type: "string",
                                    displayName: "Texte alternatif",
                                },
                            },
                        },
                    },
                },
                background: {
                    type: "object",
                    displayName: "Mon parcours",
                    fields: {
                        title: {
                            type: "string",
                            displayName: "Titre",
                        },
                        paragraphs: {
                            type: "array",
                            displayName: "Paragraphes",
                            itemType: {
                                type: "object",
                                fields: {
                                    text: {
                                        type: "string",
                                        displayName: "Texte",
                                    },
                                    muted: {
                                        type: "boolean",
                                        displayName: "Texte atténué",
                                    },
                                },
                            },
                        },
                        image: {
                            type: "object",
                            displayName: "Image",
                            fields: {
                                src: {
                                    type: "imageUrl",
                                    displayName: "Image",
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
        },
    },
});
