import React, { forwardRef } from "react";
import { View, ViewProps } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { Icon, IconName } from "../Icon";
import { PressableHighlight } from "../PressableHighlight";
import { CircularProgress } from "../ProgressIndicator";
import { BaseButtonProps } from "./types";

export type IconButtonProps = BaseButtonProps & {
    /**
     * Name of the icon.
     */
    name: IconName;
    /**
     * Boolean value indicating whether or not the button should be round.
     */
    round?: boolean;
};

export const IconButton = forwardRef<View, IconButtonProps & ViewProps>(
    (
        {
            name,
            iconSize = 22,
            color = "primary",
            variant = "contained",
            busy = false,
            disabled = false,
            onPress = () => null,
            ...rest
        },
        ref
    ) => {
        const styles = useStyles(themeStyles, {
            color,
            variant,
            disabled,
            iconSize,
        });

        return (
            <View ref={ref} style={[styles.colorContainer, rest.style]}>
                <PressableHighlight
                    id={rest.id}
                    disabled={disabled}
                    onPress={onPress}
                    style={styles.pressableContainer}
                >
                    {busy ? (
                        <CircularProgress
                            color={
                                disabled || variant !== "contained"
                                    ? "primary"
                                    : "neutral"
                            }
                            size={iconSize}
                        />
                    ) : (
                        <Icon
                            name={name}
                            size={iconSize}
                            color={styles.textStyle.color}
                        />
                    )}
                </PressableHighlight>
            </View>
        );
    }
);

IconButton.displayName = "Button.Icon";

type IconButtonStyleSheetProps = {
    color: "primary" | "secondary" | "danger";
    variant: "contained" | "outlined" | "ghost";
    disabled: boolean;
    iconSize: number;
};

const themeStyles = EDSStyleSheet.create(
    (theme, props: IconButtonStyleSheetProps) => {
        const { color, disabled, variant, iconSize } = props;
        const pressableContainerSize = iconSize * 1.8;

        const backgroundColor =
            variant !== "contained"
                ? "transparent"
                : disabled
                  ? theme.colors.interactive.disabled
                  : theme.colors.interactive[color];
        let textColor =
            variant === "contained"
                ? theme.colors.text.primaryInverted
                : theme.colors.interactive[color];
        textColor = disabled ? theme.colors.text.disabled : textColor;

        return {
            colorContainer: {
                backgroundColor,
                borderRadius: theme.geometry.dimension.button.minHeight / 2,
                borderColor: disabled
                    ? theme.colors.text.disabled
                    : theme.colors.interactive[color],
                borderWidth:
                    variant === "outlined"
                        ? theme.geometry.border.borderWidth
                        : undefined,
                overflow: "hidden",
            },
            pressableContainer: {
                justifyContent: "center",
                alignItems: "center",
                width: pressableContainerSize,
                height: pressableContainerSize,
            },
            textStyle: {
                color: textColor,
            },
        };
    }
);
