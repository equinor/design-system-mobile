import React, { forwardRef, useContext } from "react";
import { View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { getBackgroundColorForButton } from "../../utils/getBackgroundColorForButton";
import { Icon, IconName } from "../Icon";
import { PressableHighlight } from "../PressableHighlight";
import { Typography } from "../Typography";
import { ButtonGroupContext } from "./ButtonGroup";
import { ToggleButtonContext } from "./ToggleButton";

export type ButtonProps = {
    /**
     * Label text of the button.
     */
    label: string;
    /**
     * Color tone of the button.
     * @default "accent"
     */
    tone?: "accent" | "neutral" | "danger";
    /**
     * Size of the button.
     * @default "default"
     */
    size?: "small" | "default" | "large";
    /**
     * Button variant.
     * @default "primary"
     */
    variant?: "primary" | "secondary" | "ghost";
    /**
     * Name of the leading icon to display alongside the button label.
     */
    leadingIcon?: IconName;
    /**
     * Name of the trailing icon to display alongside the button label.
     */
    trailingIcon?: IconName;
    /**
     * Boolean value indicating whether or not the button is in its disabled state.
     */
    disabled?: boolean;
    /**
     * Callback method invoked when the user presses the button.
     */
    onPress?: () => void;
};

export const Button = forwardRef<View, ButtonProps>(
    (
        {
            label,
            tone = "accent",
            size = "default",
            variant = "primary",
            leadingIcon,
            trailingIcon,
            disabled = false,
            onPress = () => null,
        },
        ref
    ) => {
        const toggleData = useContext(ToggleButtonContext);
        const isToggleButton = !!toggleData;
        const groupData = useContext(ButtonGroupContext);

        const styles = useStyles(tokenStyles, {
            tone,
            variant,
            isToggleButton,
            toggleStatus: isToggleButton ? toggleData.isSelected : false,
            groupData,
            disabled,
            size,
        });

        const ButtonContent = () => (
            <View style={styles.labelContainer}>
                {leadingIcon && (
                    <View style={styles.leadingIcon}>
                        <Icon
                            name={leadingIcon}
                            color={styles.textStyle.color}
                        />
                    </View>
                )}
                <Typography
                    group="interactive"
                    variant="button"
                    style={styles.textStyle}
                >
                    {label}
                </Typography>
                {trailingIcon && (
                    <View style={styles.trailingIcon}>
                        <Icon
                            name={trailingIcon}
                            color={styles.textStyle.color}
                        />
                    </View>
                )}
            </View>
        );

        return (
            <View ref={ref} style={styles.colorContainer}>
                <PressableHighlight
                    disabled={disabled}
                    onPress={onPress}
                    style={styles.pressableContainer}
                >
                    {ButtonContent()}
                </PressableHighlight>
            </View>
        );
    }
);

Button.displayName = "Button";

type ButtonStyleSheetProps = {
    groupData: { isFirstItem: boolean; isLastItem: boolean };
    isToggleButton: boolean;
    toggleStatus: boolean;
    tone: "accent" | "neutral" | "danger";
    variant: "primary" | "secondary" | "ghost";
    disabled: boolean;
    size: "small" | "default" | "large";
};

const tokenStyles = EDSStyleSheet.create(
    (token, props: ButtonStyleSheetProps) => {
        const { tone, isToggleButton, toggleStatus, groupData, disabled } =
            props;
        let { variant } = props;

        variant = isToggleButton
            ? toggleStatus
                ? "primary"
                : "secondary"
            : variant;

        // TODO: Update when new color tokens for tone are available
        const interactiveColor =
            tone === "accent"
                ? token.colors.interactive.primary
                : tone === "neutral"
                  ? token.colors.interactive.secondary
                  : token.colors.interactive.danger;

        const backgroundColor = getBackgroundColorForButton(
            token,
            variant,
            tone,
            disabled
        );

        let textColor =
            variant === "primary"
                ? token.colors.text.primaryInverted
                : interactiveColor;
        textColor = disabled ? token.colors.text.disabled : textColor;

        const leftRadius = !groupData.isFirstItem
            ? 0
            : token.geometry.border.elementBorderRadius;
        const rightRadius = !groupData.isLastItem
            ? 0
            : token.geometry.border.elementBorderRadius;
        const outlinedPaddingReduction =
            variant === "secondary" ? token.geometry.border.borderWidth : 0;

        return {
            colorContainer: {
                backgroundColor,
                borderTopLeftRadius: leftRadius,
                borderBottomLeftRadius: leftRadius,
                borderTopRightRadius: rightRadius,
                borderBottomRightRadius: rightRadius,
                borderColor: disabled
                    ? token.colors.text.disabled
                    : interactiveColor,
                borderWidth:
                    variant === "secondary"
                        ? token.geometry.border.borderWidth
                        : undefined,
                overflow: "hidden",
            },
            pressableContainer: {
                paddingHorizontal:
                    token.newSpacing.spacing.inset.lg.horizontal -
                    outlinedPaddingReduction,
                paddingVertical:
                    token.newSpacing.spacing.inset.lg["vertical-squished"] -
                    outlinedPaddingReduction,
                justifyContent: "center",
            },
            labelContainer: {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: token.newSpacing.spacing.icon.sm["gap-horizontal"],
            },
            trailingIcon: {},
            leadingIcon: {},
            textStyle: {
                color: textColor,
            },
        };
    }
);
