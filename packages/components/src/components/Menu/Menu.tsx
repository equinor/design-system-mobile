import type { Placement } from "@floating-ui/react-native";
import { flip, offset, shift, useFloating } from "@floating-ui/react-native";
import React, { createContext } from "react";
import { View, ViewProps } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { useToken } from "../../hooks/useToken";
import { EDSStyleSheet } from "../../styling";
import { PopInContainer } from "../_internal/PopInContainer";
import { RootModal } from "../_internal/RootModal";
import { Paper } from "../Paper";

export type MenuProps = {
    /**
     * A reference to the element that the menu should appear around.
     */
    anchorEl: React.MutableRefObject<View | null>;
    /**
     * A boolean value indicating whether or not the menu should be open.
     */
    open: boolean;
    /**
     * A callback method invoked when a user closes the menu.
     */
    onClose: () => void;
    /**
     * The positioning of the menu around the anchor element.
     */
    placement?: Placement;
};

export type MenuContextType = {
    /**
     * A callback method invokable from any part of the menu. Calling this should close the menu.
     */
    close: () => void;
};

export const MenuContext = createContext<MenuContextType>({
    close: () => null,
});

export const Menu = ({
    anchorEl,
    open,
    onClose,
    placement = "bottom",
    children,
    ...rest
}: React.PropsWithChildren<MenuProps & ViewProps>) => {
    const token = useToken();
    const styles = useStyles(themeStyles);
    const { refs, floatingStyles } = useFloating({
        sameScrollView: false,
        elements: {
            reference: anchorEl.current,
        },
        middleware: [offset(token.spacing.spacing.vertical.sm), flip(), shift({ padding: token.spacing.spacing.vertical.sm })],
        placement,
    });
    return (
        open && (
            <RootModal onBackdropPress={onClose}>
                <View ref={refs.setFloating} style={floatingStyles}>
                    <PopInContainer>
                        <Paper
                            style={styles.paperStyle}
                            elevation="temporaryNav"
                        >
                            {/* Border layer: individual corner radii + border, no overflow clip */}
                            <View
                                {...rest}
                                style={[styles.borderContainer, rest.style]}
                            >
                                {/* Clip layer: uniform radius + overflow hidden — works reliably on iOS */}
                                <View style={styles.clipContainer}>
                                    <MenuContext.Provider
                                        value={{
                                            close: onClose,
                                        }}
                                    >
                                        {children}
                                    </MenuContext.Provider>
                                </View>
                            </View>
                        </Paper>
                    </PopInContainer>
                </View>
            </RootModal>
        )
    );
};

const themeStyles = EDSStyleSheet.create((theme) => ({
    paperStyle: {
        borderRadius: theme.spacing.spacing.borderRadius.rounded,
    },
    borderContainer: {
        borderRadius: theme.spacing.spacing.borderRadius.rounded,
        borderWidth: theme.spacing.sizing.stroke.thin,
        borderColor: theme.colors.border.neutral.subtle,
        backgroundColor: theme.colors.bg.floating,
    },
    clipContainer: {
        borderRadius: theme.spacing.spacing.borderRadius.rounded,
        overflow: "hidden",
    },
}));
