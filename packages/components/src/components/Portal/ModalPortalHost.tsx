import React, { PropsWithChildren } from "react";
import { View, ViewProps } from "react-native";
import { PortalProvider } from "./PortalContext";
import { PortalHost } from "./PortalHost";

/**
 * ModalPortalHost provides a new portal context scope for use within native modals.
 *
 * **Problem:** When using components like Popover, Menu, or Dialog inside a React Native
 * modal (such as navigation modals), the portal content fails to render because portals
 * cannot render outside the modal's boundary.
 *
 * **Solution:** Wrap your modal content with ModalPortalHost to create a new portal
 * context that portals can render into within the modal.
 *
 * @example
 * ```tsx
 * import { Modal } from 'react-native';
 * import { ModalPortalHost, Menu } from '@equinor/eds-mobile-components';
 *
 * const MyModalScreen = () => {
 *   return (
 *     <Modal>
 *       <ModalPortalHost>
 *         <YourContent />
 *         <Menu anchorEl={ref} open={open} onClose={handleClose}>
 *           {// Menu items will render correctly inside the modal}
 *         </Menu>
 *       </ModalPortalHost>
 *     </Modal>
 *   );
 * };
 * ```
 */
export const ModalPortalHost = ({
    children,
    ...rest
}: PropsWithChildren<ViewProps>) => {
    return (
        <PortalProvider>
            <PortalHost name="root" style={{ flex: 1 }} {...rest}>
                <PortalHost name="scrim" style={{ flex: 1 }}>
                    {children}
                </PortalHost>
            </PortalHost>
        </PortalProvider>
    );
};
