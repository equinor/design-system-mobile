import { PropsWithChildren, useContext, useEffect, useMemo } from "react";
import { PortalContext, PortalContextType } from "./PortalContext";

export type PortalProps = {
    /**
     * The name of the portal. The name will be registered and available for all components to route to.
     */
    name: "root" | Omit<string, "root">;
};

/**
 * Finds the nearest context that has a host with the given name.
 * Searches from the current context up through parent contexts.
 */
const findContextWithHost = (
    context: PortalContextType,
    hostName: string
): PortalContextType | null => {
    // Check if current context has the host
    if (context.hosts.find((host) => host.name === hostName)) {
        return context;
    }
    // If not, check parent context
    if (context.parent) {
        return findContextWithHost(context.parent, hostName);
    }
    // No context found with this host
    return null;
};

export const Portal = ({ name, children }: PropsWithChildren<PortalProps>) => {
    const context = useContext(PortalContext);
    const nameAsString = name as string;

    // Find the nearest context that has (or will have) this host
    const targetContext = useMemo(() => {
        const found = findContextWithHost(context, nameAsString);
        // If no context has this host yet, use the current context
        // (the host might be registered later)
        return found || context;
    }, [context, nameAsString]);

    useEffect(() => {
        targetContext.registerHost(nameAsString);
        targetContext.bindNode(nameAsString, children);
    }, [children, nameAsString, targetContext]);

    useEffect(() => {
        return () => {
            targetContext.bindNode(nameAsString, null);
        };
    }, [nameAsString, targetContext]);

    return null;
};
