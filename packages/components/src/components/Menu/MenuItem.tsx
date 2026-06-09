import React, { useContext } from "react";
import { Pressable, View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { Typography } from "../Typography";
import { MenuContext } from "./Menu";

export type MenuItemProps = {
    label: string;
    disabled?: boolean;
    onPress?: () => void;
    closeMenuOnClick?: boolean;
    leading?: React.ReactNode;
    trailing?: React.ReactNode;
};

export const MenuItem = ({
    label,
    disabled = false,
    onPress = () => null,
    closeMenuOnClick = true,
    leading,
    trailing,
}: MenuItemProps) => {
    const menuContext = useContext(MenuContext);
    const styles = useStyles(themeStyles, { disabled });

    const onPressItem = () => {
        if (!disabled) {
            if (closeMenuOnClick) menuContext.close();
            onPress();
        }
    };

    return (
        <Pressable
            onPress={onPressItem}
            style={({ pressed }) => [
                styles.container,
                pressed && !disabled && styles.containerPressed,
            ]}
            accessibilityRole="menuitem"
            accessibilityState={{ disabled }}
        >
            <View style={styles.contentRow}>
                {leading != null && (
                    <View style={styles.leading}>{leading}</View>
                )}
                <Typography style={styles.label} size="md">
                    {label}
                </Typography>
                {trailing != null && (
                    <View style={styles.trailing}>{trailing}</View>
                )}
            </View>
        </Pressable>
    );
};

const themeStyles = EDSStyleSheet.create(
    (token, props: { disabled: boolean }) => ({
        container: {
            backgroundColor: token.colors.bg.floating,
            height: token.spacing.sizing.selectable.xl,
            justifyContent: "center",
            paddingHorizontal: token.spacing.spacing.inset.lg.horizontal,
        },
        containerPressed: {
            backgroundColor: token.colors.bg.neutral.fillMuted.default,
        },
        contentRow: {
            flexDirection: "row",
            alignItems: "center",
            gap: token.spacing.spacing.icon.md.gapHorizontal,
        },
        leading: {
            alignItems: "center",
            justifyContent: "center",
        },
        label: {
            flex: 1,
            color: props.disabled
                ? token.colors.text.disabled
                : token.colors.text.neutral.strong,
        },
        trailing: {
            marginLeft: "auto",
        },
    })
);
