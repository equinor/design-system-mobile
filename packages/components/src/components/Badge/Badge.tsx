import React from "react";
import { Text, View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { MasterToken } from "../../styling/tokens";
import {
    BadgeEmphasis,
    BadgeProps,
    BadgeTone,
    BadgeVariant,
} from "./Badge.types";

type BadgeStyleProps = {
    tone: BadgeTone;
    emphasis: BadgeEmphasis;
    variant: BadgeVariant;
};

const resolveBadgeColors = (
    t: MasterToken["colors"],
    tone: BadgeTone,
    emphasis: BadgeEmphasis,
    variant: BadgeVariant
) => {
    if (variant === "outlined") {
        const borderColorMap: Record<BadgeEmphasis, string> = {
            low: t.border[tone].subtle,
            medium: t.border[tone].medium,
        };
        return {
            backgroundColor: t.bg[tone].canvas,
            borderColor: borderColorMap[emphasis],
            textColor: t.text[tone].subtle,
        };
    }
    return {
        backgroundColor: emphasis === "medium"
            ? t.bg[tone].fillMuted.default
            : t.bg[tone].canvas,
        borderColor: "transparent",
        textColor: t.text[tone].subtle,
    };
};

export const Badge = ({
    children,
    tone = "neutral",
    emphasis = "low",
    variant = "solid",
    ...rest
}: BadgeProps) => {
    const styles = useStyles(badgeThemeStyles, { tone, emphasis, variant });

    return (
        <View style={styles.container} {...rest}>
            <Text style={styles.label}>{children}</Text>
        </View>
    );
};

const badgeThemeStyles = EDSStyleSheet.create(
    (token, { tone, emphasis, variant }: BadgeStyleProps) => {
        const { backgroundColor, borderColor, textColor } =
            resolveBadgeColors(token.colors, tone, emphasis, variant);
        const sizeToken = token.typography.ui.fontFamilySize.md;

        return {
            container: {
                alignSelf: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                minWidth: token.spacing.sizing.icon.lg,
                borderRadius: token.spacing.spacing.borderRadius.rounded,
                paddingHorizontal: token.spacing.spacing.horizontal.sm,
                paddingVertical: token.spacing.spacing.vertical.threeXs,
                backgroundColor,
                borderWidth: token.spacing.sizing.stroke.thin,
                borderColor,
            },
            label: {
                fontFamily: token.typography.ui.typography.fontFamily,
                fontSize: sizeToken.fontSize,
                fontWeight: sizeToken.fontWeight.bolder,
                lineHeight: sizeToken.lineHeight.default,
                letterSpacing: sizeToken.tracking.normal,
                color: textColor,
            },
        };
    }
);
