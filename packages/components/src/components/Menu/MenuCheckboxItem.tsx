import React, { useContext } from "react";
import { Pressable, View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { Icon } from "../Icon";
import { Typography } from "../Typography";
import { MenuContext } from "./Menu";

export type MenuCheckboxItemProps = {
    label: string;
    checked: boolean;
    disabled?: boolean;
    onPress?: () => void;
    closeMenuOnClick?: boolean;
};

export const MenuCheckboxItem = ({
    label,
    checked,
    disabled = false,
    onPress = () => null,
    closeMenuOnClick = false,
}: MenuCheckboxItemProps) => {
    const menuContext = useContext(MenuContext);
    const styles = useStyles(themeStyles, { disabled, checked });

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
            accessibilityState={{ disabled, checked }}
        >
            <View style={styles.contentRow}>
                <View style={styles.leading}>
                    <Icon
                        name={
                            checked ? "checkbox-marked" : "checkbox-blank-outline"
                        }
                        style={styles.checkboxIcon}
                    />
                </View>
                <Typography style={styles.label} size="md">
                    {label}
                </Typography>
            </View>
        </Pressable>
    );
};

const themeStyles = EDSStyleSheet.create(
    (token, props: { disabled: boolean; checked: boolean }) => ({
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
        checkboxIcon: {
            fontSize: token.spacing.sizing.icon.lg,
            color: props.disabled
                ? token.colors.text.disabled
                : token.colors.text.neutral.strong,
        },
        label: {
            flex: 1,
            color: props.disabled
                ? token.colors.text.disabled
                : token.colors.text.neutral.strong,
        },
    })
);
