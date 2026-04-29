import React from "react";
import { Text } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { TypographyToken } from "../../styling/tokens";
import { createTypographyStyles } from "./styles";
import { TypographyBaseProps } from "./types";

export type TypographyHeadingProps = TypographyBaseProps & {
    /**
     * Header font size variant.
     */
    size?: keyof TypographyToken["header"]["fontFamilySize"];
};

const typographyStyles = createTypographyStyles("header");

export const TypographyHeading: React.FC<TypographyHeadingProps> = ({
    size = "xl",
    weight = "normal",
    tracking = "normal",
    lineHeight = "default",
    ...rest
}) => {
    const styles = useStyles(typographyStyles, {
        size,
        weight,
        tracking,
        lineHeight,
    });
    return <Text {...rest} style={[styles.text, rest.style]}></Text>;
};
