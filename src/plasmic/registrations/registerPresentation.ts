import { Presentation } from "@/components/sections/Presentation";
import { PLASMIC } from "@/plasmic-init";

PLASMIC.registerComponent(Presentation, {
  name: "Presentation",
  displayName: "Présentation",
  description: "Section présentant le magnétisme et le parcours de Catherine.",
  props: {
    title: {
      type: "string",
      displayName: "Titre de la section",
    },
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
                    control: "large",
                  },
                },
              },
            },
            introduction: {
              type: "string",
              displayName: "Introduction",
              control: "large",
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
                    control: "large",
                  },
                },
              },
            },
            disclaimer: {
              type: "string",
              displayName: "Avertissement médical",
              control: "large",
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
                    control: "large",
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
