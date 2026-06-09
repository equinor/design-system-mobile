import React from "react";
import { View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { Typography } from "../Typography";

export type MenuSectionProps = {
    title: string;
    children: React.ReactNode;
};

export const MenuSection = ({ title, children }: MenuSectionProps) => {
    const styles = useStyles(themeStyles);

    return (
        <View>
            <View style={styles.header}>
                <Typography style={styles.title} size="xs">
                    {title}
                </Typography>
            </View>
            {children}
        </View>
    );
};

const themeStyles = EDSStyleSheet.create(token => ({
    header: {
        backgroundColor: token.colors.bg.neutral.surface,
        borderTopWidth: token.spacing.sizing.stroke.thin,
        borderTopColor: token.colors.border.neutral.subtle,
        paddingHorizontal: token.spacing.spacing.inset.lg.horizontal,
        paddingTop: token.spacing.spacing.vertical.md,
        paddingBottom: token.spacing.spacing.vertical.threeXs,
        justifyContent: "center",
        minHeight: token.spacing.sizing.selectable.md,
    },
    title: {
        color: token.colors.text.neutral.subtle,
    },
}));
