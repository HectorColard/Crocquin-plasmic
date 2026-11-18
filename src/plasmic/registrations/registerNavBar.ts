import { Navbar } from "@/components/layout/Navbar";
import { PLASMIC } from "@/plasmic-init";

PLASMIC.registerComponent(Navbar, {
    name: "Navbar",
    displayName: "Navbar",
    importPath: "@/components/layout/Navbar.tsx",
    props: {},
});
