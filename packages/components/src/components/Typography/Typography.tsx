import React from "react";
import { Text, TextProps, TextStyle } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { Color, EDSStyleSheet, resolveColor } from "../../styling";
import {
    TypographyPreset,
    TypographyPresetStyle,
    resolvePreset,
} from "../../styling/tokens/typographyToken";

export type TypographyProps = {
    /**
     * Typography variant, specifies which style to use.
     * @default "body.md"
     */
    variant?: TypographyPreset;
    /**
     * Enable bold text.
     */
    bold?: boolean;
    /**
     * Enable italic text.
     */
    italic?: boolean;
    /**
     * @deprecated Use `style={{ color: ... }}` with new color tokens instead.
     */
    color?: Color;
    ref?: React.Ref<Text>;
} & TextProps;

export type TextChildren = {
    children:
        | string
        | number
        | null
        | undefined
        | React.JSX.Element
        | (string | string[] | number | null | undefined | React.JSX.Element)[];
};

const resolveFontName = (
    presetStyle: TypographyPresetStyle,
    bold?: boolean,
    italic?: boolean
): string => {
    let fontName = presetStyle.fontFamily;

    if (fontName.startsWith("Equinor")) {
        if (bold) {
            fontName = "Equinor-Bold";
        }
        if (italic) {
            fontName += "Italic";
        }
    }

    return fontName;
};

const themeStyles = EDSStyleSheet.create(
    (
        theme,
        props: Pick<TypographyProps, "variant" | "bold" | "italic" | "color">
    ) => {
        const {
            variant: presetKey = "body.md",
            bold,
            italic,
            color,
        } = props;

        const presetStyle = resolvePreset(
            theme.newTypography,
            presetKey
        );

        const textStyle: TextStyle = {
            color: color
                ? resolveColor(color, theme)
                : theme.newColors.text.neutral.strong,
            fontSize: presetStyle.fontSize,
            lineHeight: presetStyle.lineHeight,
            letterSpacing: presetStyle.letterSpacing,
            fontFamily: resolveFontName(presetStyle, bold, italic),
            ...(bold && !presetStyle.fontFamily.startsWith("Equinor")
                ? { fontWeight: "700" }
                : {}),
            ...(italic && !presetStyle.fontFamily.startsWith("Equinor")
                ? { fontStyle: "italic" as const }
                : {}),
        };

        return {
            text: textStyle,
        };
    }
);

export const Typography = ({
    variant = "body.md",
    bold,
    italic,
    color,
    children,
    ref,
    ...rest
}: TypographyProps & TextChildren) => {
    const styles = useStyles(themeStyles, {
        variant,
        bold,
        italic,
        color,
    });

    return (
        <Text {...rest} ref={ref} style={[styles.text, rest.style]}>
            {children}
        </Text>
    );
};
