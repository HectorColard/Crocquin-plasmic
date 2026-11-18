
import { PLASMIC } from "@/plasmic-init";
import { Pricing } from "@/components/sections/Pricing";

PLASMIC.registerComponent(Pricing, {
  name: "Pricing",
  displayName: "Tarifs",
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
          control: "large",
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
            control: "large",
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
