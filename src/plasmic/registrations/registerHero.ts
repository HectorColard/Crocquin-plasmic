import { Hero } from "@/components/sections/Hero";
import { PLASMIC } from "@/plasmic-init";

PLASMIC.registerComponent(Hero, {
    name: "Hero",
    displayName: "Hero",
    importPath: "@/components/sections/Hero.tsx",
    props: {
        title: {
            type: "string",
            displayName: "Title",
        },
        subtitle: {
            type: "string",
            displayName: "Subtitle",
        },
        primaryButtonLabel: {
            type: "string",
            displayName: "Primary button",
        },
        secondaryButtonLabel: {
            type: "string",
            displayName: "Secondary button",
        },
    },
});
