import React from "react";
import { Text, View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { MasterToken } from "../../styling/tokens";
import {
    BadgeEmphasis,
    BadgeProps,
    BadgeStatusProps,
    BadgeStyle,
    BadgeTone,
} from "./Badge.types";

type BadgeStyleProps = {
    tone: BadgeTone;
    emphasis: BadgeEmphasis;
    style: BadgeStyle;
};

type BadgeStatusStyleProps = {
    tone: BadgeTone;
    style: BadgeStyle;
};

const resolveBadgeColors = (
    t: MasterToken["colors"],
    tone: BadgeTone,
    emphasis: BadgeEmphasis,
    style: BadgeStyle
) => {
    if (style === "outlined") {
        const borderColorMap: Record<BadgeEmphasis, string> = {
            low: t.border[tone].subtle,
            medium: t.border[tone].medium,
            high: t.border[tone].strong,
        };
        return {
            backgroundColor: t.bg[tone].canvas as string,
            borderColor: borderColorMap[emphasis],
            textColor: t.text[tone].subtle as string,
        };
    }
    if (emphasis === "high") {
        return {
            backgroundColor: t.bg[tone].fillEmphasis.default as string,
            borderColor: "transparent",
            textColor: t.text[tone].strongOnEmphasis as string,
        };
    }
    return {
        backgroundColor: (emphasis === "medium"
            ? t.bg[tone].fillMuted.default
            : t.bg[tone].canvas) as string,
        borderColor: "transparent",
        textColor: t.text[tone].subtle as string,
    };
};

export const Badge = ({
    children,
    tone = "neutral",
    emphasis = "low",
    style = "solid",
}: BadgeProps) => {
    const styles = useStyles(badgeThemeStyles, { tone, emphasis, style });

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{children}</Text>
        </View>
    );
};

Badge.displayName = "Badge";

const badgeThemeStyles = EDSStyleSheet.create(
    (token, { tone, emphasis, style }: BadgeStyleProps) => {
        const { backgroundColor, borderColor, textColor } =
            resolveBadgeColors(token.colors, tone, emphasis, style);
        const sizeToken = token.typography.ui.fontFamilySize.md;

        return {
            container: {
                alignSelf: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 20,
                borderRadius: token.spacing.spacing.borderRadius.pill,
                paddingHorizontal: token.spacing.spacing.horizontal.sm,
                paddingVertical: token.spacing.spacing.vertical.threeXs,
                backgroundColor,
                borderWidth: token.spacing.sizing.stroke.thin,
                borderColor,
            },
            label: {
                fontFamily: token.typography.ui.typography.fontFamily,
                fontSize: sizeToken.fontSize,
                fontWeight: sizeToken.fontWeight.normal,
                lineHeight: sizeToken.lineHeight.default,
                letterSpacing: sizeToken.tracking.normal,
                color: textColor,
            },
        };
    }
);

const BadgeStatus = ({
    tone = "neutral",
    style = "solid",
}: BadgeStatusProps) => {
    const styles = useStyles(badgeStatusThemeStyles, { tone, style });
    return <View style={styles.dot} />;
};

BadgeStatus.displayName = "Badge.Status";

Badge.Status = BadgeStatus;

const badgeStatusThemeStyles = EDSStyleSheet.create(
    (token, { tone, style }: BadgeStatusStyleProps) => {
        const t = token.colors;
        const isOutlined = style === "outlined";

        return {
            dot: {
                width: 14,
                height: 14,
                borderRadius: token.spacing.spacing.borderRadius.pill,
                backgroundColor: (isOutlined
                    ? t.bg[tone].canvas
                    : t.bg[tone].fillEmphasis.default) as string,
                borderWidth: token.spacing.sizing.stroke.thin,
                borderColor: isOutlined
                    ? (t.border[tone].strong as string)
                    : "transparent",
            },
        };
    }
);
