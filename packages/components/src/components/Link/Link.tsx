import React, { useState } from "react";
import { Pressable, Text, TextStyle, View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { useToken } from "../../hooks/useToken";
import { EDSStyleSheet } from "../../styling";
import { Icon } from "../Icon";
import { Typography } from "../Typography";
import { LinkProps, LinkSize } from "./Link.types";

export const Link = ({
    children,
    onPress,
    variant = "standalone",
    size = "md",
    external = false,
    disabled = false,
}: LinkProps) => {
    const [pressed, setPressed] = useState(false);
    const standaloneStyles = useStyles(standaloneThemeStyles, {
        size,
        pressed,
        disabled,
    });
    const inlineStyles = useStyles(inlineThemeStyles, {
        size,
        pressed,
        disabled,
    });
    const token = useToken();
    const sizeToken = token.typography.ui.fontFamilySize[size];

    const color = disabled
        ? token.colors.text.disabled
        : pressed
        ? token.colors.text.neutral.strong
        : token.colors.text.link;

    if (variant === "inline") {
        return (
            <Text
                onPress={disabled ? undefined : onPress}
                onPressIn={() => !disabled && setPressed(true)}
                onPressOut={() => setPressed(false)}
                accessibilityRole="link"
                accessibilityState={{ disabled }}
                style={inlineStyles.link}
            >
                {external && (
                    <Icon
                        name="open-in-new"
                        size={sizeToken.iconSize}
                        color={color}
                    />
                )}{children}
            </Text>
        );
    }

    return (
        <Pressable
            onPress={onPress}
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
            disabled={disabled}
            accessibilityRole="link"
            accessibilityState={{ disabled }}
            style={standaloneStyles.pressable}
        >
            <View
                style={[
                    standaloneStyles.row,
                    {
                        gap: sizeToken.gapHorizontal,
                        borderBottomColor: color,
                    },
                ]}
            >
                {external && (
                    <Icon
                        name="open-in-new"
                        size={sizeToken.iconSize}
                        color={color}
                    />
                )}
                <Typography size={size} style={{ color }}>
                    {children}
                </Typography>
            </View>
        </Pressable>
    );
};

Link.displayName = "Link";

type LinkStyleProps = {
    size: LinkSize;
    pressed: boolean;
    disabled: boolean;
};

const standaloneThemeStyles = EDSStyleSheet.create(
    (token) => ({
        pressable: {
            alignSelf: "flex-start",
        },
        row: {
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: token.spacing.spacing.vertical.threeXs,
            borderBottomWidth: token.spacing.sizing.stroke.thin,
        },
    })
);

const inlineThemeStyles = EDSStyleSheet.create(
    (token, { size, pressed, disabled }: LinkStyleProps) => {
        const sizeToken = token.typography.ui.fontFamilySize[size];
        const color = disabled
            ? token.colors.text.disabled
            : pressed
            ? token.colors.text.neutral.strong
            : token.colors.text.link;

        return {
            link: {
                fontFamily: token.typography.ui.typography.fontFamily,
                fontSize: sizeToken.fontSize,
                fontWeight: String(
                    sizeToken.fontWeight.normal
                ) as TextStyle["fontWeight"],
                lineHeight: sizeToken.lineHeight.default,
                letterSpacing: sizeToken.tracking.normal,
                color,
                textDecorationLine:
                    "underline" as TextStyle["textDecorationLine"],
                textDecorationColor: color,
            },
        };
    }
);
