import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { useToken } from "../../hooks/useToken";
import { EDSStyleSheet } from "../../styling";
import { Icon } from "../Icon";
import { Typography } from "../Typography";
import { LinkProps, LinkSize } from "./Link.types";

type LinkStyleProps = {
    size: LinkSize;
    pressed: boolean;
    disabled: boolean;
};

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
    const inlineStyles = useStyles(inlineThemeStyles, { size, pressed, disabled });
    const inlineIconStyles = useStyles(inlineIconThemeStyles, { size });
    const token = useToken();
    const sizeToken = token.typography.ui.fontFamilySize[size];

    const color = disabled
        ? token.colors.text.disabled
        : pressed
        ? token.colors.text.neutral.strong
        : token.colors.text.link;

    if (variant === "inline") {
        return (
            <Typography
                size={size}
                onPress={disabled ? undefined : onPress}
                onPressIn={() => !disabled && setPressed(true)}
                onPressOut={() => setPressed(false)}
                accessibilityRole="link"
                accessibilityState={{ disabled }}
                style={inlineStyles.link}
            >
                {children}
                {external && (
                    <Text style={inlineIconStyles.iconWrapper}>
                        <Icon
                            name="open-in-new"
                            size={sizeToken.iconSize}
                            color={color}
                        />
                    </Text>
                )}
            </Typography>
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
            <View style={standaloneStyles.row}>
                <Typography size={size} style={standaloneStyles.typography}>
                    {children}
                </Typography>
                {external && (
                    <Icon
                        name="open-in-new"
                        size={sizeToken.iconSize}
                        color={color}
                    />
                )}
            </View>
        </Pressable>
    );
};

Link.displayName = "Link";

const standaloneThemeStyles = EDSStyleSheet.create(
    (token, { size, pressed, disabled }: LinkStyleProps) => {
        const sizeToken = token.typography.ui.fontFamilySize[size];
        const color = disabled
            ? token.colors.text.disabled
            : pressed
            ? token.colors.text.neutral.strong
            : token.colors.text.link;

        return {
            pressable: {
                alignSelf: "flex-start",
            },
            row: {
                flexDirection: "row",
                alignItems: "center",
                paddingBottom: token.spacing.spacing.vertical.threeXs,
                borderBottomWidth: token.spacing.sizing.stroke.thin,
                gap: sizeToken.gapHorizontal,
                borderBottomColor: color,
            },
            typography: {
                color,
            },
        };
    }
);

const inlineThemeStyles = EDSStyleSheet.create(
    (token, { pressed, disabled }: LinkStyleProps) => {
        const color = disabled
            ? token.colors.text.disabled
            : pressed
            ? token.colors.text.neutral.strong
            : token.colors.text.link;

        return {
            link: {
                color,
                textDecorationLine: "underline",
                textDecorationColor: color,
            },
        };
    }
);

const inlineIconThemeStyles = EDSStyleSheet.create(
    (token, { size }: { size: LinkSize }) => ({
        iconWrapper: {
            marginLeft: token.typography.ui.fontFamilySize[size].gapHorizontal,
        },
    })
);
