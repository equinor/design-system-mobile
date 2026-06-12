import React, { useState } from "react";
import { Pressable, View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { Icon } from "../Icon";
import { Typography } from "../Typography";

export type MenuSubItemProps = {
    label: string;
    disabled?: boolean;
    children: React.ReactNode;
};

export const MenuSubItem = ({
    label,
    disabled = false,
    children,
}: MenuSubItemProps) => {
    const [open, setOpen] = useState(false);
    const styles = useStyles(themeStyles, { disabled });

    return (
        <View>
            <Pressable
                onPress={() => !disabled && setOpen(o => !o)}
                style={({ pressed }) => [
                    styles.container,
                    pressed && !disabled && styles.containerPressed,
                ]}
                accessibilityRole="menuitem"
                accessibilityState={{ disabled, expanded: open }}
            >
                <View style={styles.contentRow}>
                    <Typography style={styles.label} size="md">
                        {label}
                    </Typography>
                    <Icon
                        name={open ? "chevron-down" : "chevron-right"}
                        style={styles.chevronIcon}
                    />
                </View>
            </Pressable>
            {open && (
                <View style={styles.subItems}>{children}</View>
            )}
        </View>
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
        label: {
            flex: 1,
            color: props.disabled
                ? token.colors.text.disabled
                : token.colors.text.neutral.strong,
        },
        chevronIcon: {
            fontSize: token.spacing.sizing.icon.lg,
            color: props.disabled
                ? token.colors.text.disabled
                : token.colors.text.neutral.subtle,
        },
        subItems: {
            paddingLeft: token.spacing.spacing.inset.lg.horizontal,
        },
    })
);
