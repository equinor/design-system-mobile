import React from "react";
import { View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";

export const MenuDivider = () => {
    const styles = useStyles(themeStyles);
    return <View style={styles.divider} />;
};

const themeStyles = EDSStyleSheet.create(token => ({
    divider: {
        height: token.spacing.sizing.stroke.thin,
        backgroundColor: token.colors.border.neutral.subtle,
    },
}));
