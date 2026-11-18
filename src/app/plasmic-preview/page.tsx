import { Suspense } from "react";
import { PlasmicComponent } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "@/plasmic-init";
import { ClientPlasmicRootProvider } from "@/plasmic-init-client";

export default function PlasmicPreviewPage() {
    return (
        <Suspense fallback={<p>Loading Plasmic...</p>}>
            <Preview />
        </Suspense>
    );
}

async function Preview() {
    const componentData =
        await PLASMIC.maybeFetchComponentData("/plasmic-preview");

    if (!componentData || componentData.entryCompMetas.length === 0) {
        return <p>No Plasmic page found.</p>;
    }

    const pageMeta = componentData.entryCompMetas[0];

    return (
        <ClientPlasmicRootProvider
            prefetchedData={componentData}
            pageRoute={pageMeta.path}
            pageParams={pageMeta.params}
        >
            <PlasmicComponent component={pageMeta.displayName} />
        </ClientPlasmicRootProvider>
    );
}
