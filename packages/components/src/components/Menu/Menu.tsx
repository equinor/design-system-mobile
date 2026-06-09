import type { Placement } from "@floating-ui/react-native";
import { flip, offset, shift, useFloating } from "@floating-ui/react-native";
import React, { createContext } from "react";
import { View, ViewProps } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { useToken } from "../../hooks/useToken";
import { EDSStyleSheet } from "../../styling";
import { PopInContainer } from "../_internal/PopInContainer";
import { RootModal } from "../_internal/RootModal";

export type MenuProps = {
    anchorEl: React.MutableRefObject<View | null>;
    open: boolean;
    onClose: () => void;
    placement?: Placement;
};

export type MenuContextType = {
    close: () => void;
};

const MENU_MIN_WIDTH = 160;

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
    const { refs, floatingStyles } = useFloating({
        sameScrollView: false,
        elements: {
            reference: anchorEl.current,
        },
        middleware: [
            offset(token.spacing.spacing.vertical.sm),
            flip(),
            shift({ padding: token.spacing.spacing.vertical.sm }),
        ],
        placement,
    });

    const styles = useStyles(themeStyles);

    return (
        open && (
            <RootModal onBackdropPress={onClose}>
                <View ref={refs.setFloating} style={floatingStyles}>
                    <PopInContainer>
                        <View style={styles.borderContainer}>
                            <View style={[styles.clipContainer, rest.style]}>
                                <MenuContext.Provider value={{ close: onClose }}>
                                    {children}
                                </MenuContext.Provider>
                            </View>
                        </View>
                    </PopInContainer>
                </View>
            </RootModal>
        )
    );
};

const themeStyles = EDSStyleSheet.create(token => ({
    borderContainer: {
        borderRadius: token.spacing.spacing.borderRadius.rounded,
        borderWidth: token.spacing.sizing.stroke.thin,
        borderColor: token.colors.border.neutral.subtle,
        backgroundColor: token.colors.bg.floating,
        overflow: "hidden",
        minWidth: MENU_MIN_WIDTH,
    },
    clipContainer: {
        borderRadius: token.spacing.spacing.borderRadius.rounded,
        overflow: "hidden",
    },
}));
