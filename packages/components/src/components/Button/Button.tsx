import React, { FC, Ref, useContext, useEffect } from "react";
import { Pressable, View } from "react-native";
import Animated, {
    cancelAnimation,
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
import { useStyles } from "../../hooks/useStyles";
import { useToken } from "../../hooks/useToken";
import { EDSStyleSheet } from "../../styling";
import { Icon, IconName } from "../Icon";
import { Typography } from "../Typography";
import {
    buttonContentStyles,
    getBackgroundColorForButton,
} from "./Button.style";
import { ButtonGroupContext } from "./ButtonGroup";
import { ToggleButtonContext } from "./ToggleButton";
import { ButtonVariant } from "./types";

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
    ref?: Ref<View>;
};

export const Button: FC<ButtonProps> = ({
    label,
    tone = "accent",
    size = "default",
    variant = "primary",
    leadingIcon,
    trailingIcon,
    disabled = false,
    onPress = () => null,
    ref,
}) => {
    const toggleData = useContext(ToggleButtonContext);
    const isToggleButton = !!toggleData;
    const groupData = useContext(ButtonGroupContext);

    // const styles = useStyles(tokenStyles, {
    //     tone,
    //     variant,
    //     isToggleButton,
    //     toggleStatus: isToggleButton ? toggleData.isSelected : false,
    //     groupData,
    //     disabled,
    //     size,
    // });

    return (
        <Pressable ref={ref} disabled={disabled} onPress={onPress}>
            {(pressedEvent) => (
                <ButtonContent
                    isPressed={pressedEvent.pressed}
                    label={label}
                    leadingIcon={leadingIcon}
                    variant={variant}
                    trailingIcon={trailingIcon}
                    tone={tone}
                />
            )}
        </Pressable>
    );
};

type ButtonContentProps = {
    isPressed: boolean;
    label: string;
    leadingIcon?: IconName;
    trailingIcon?: IconName;
    tone: "accent" | "neutral" | "danger";
    variant: ButtonVariant;
};

const ButtonContent = ({
    isPressed,
    label,
    leadingIcon,
    trailingIcon,
    tone,
    variant,
}: ButtonContentProps) => {
    const animationValue = useSharedValue(0);

    useEffect(() => {
        cancelAnimation(animationValue);
        if (isPressed) {
            animationValue.value = 1;
            return;
        }
        animationValue.value = withTiming(0, { duration: 150 });
    }, [isPressed]);

    const token = useToken();
    const background = getBackgroundColorForButton(token, false, tone, variant);
    const animatedStyle = useAnimatedStyle(() => ({
        backgroundColor: interpolateColor(
            animationValue.value,
            [0, 1],
            [background.default, background.pressed],
            "LAB"
        ),
    }));

    const styles = useStyles(buttonContentStyles, { isPressed });

    return (
        <Animated.View style={[animatedStyle, styles.container]}>
            {leadingIcon && (
                <View style={{}}>
                    <Icon name={leadingIcon} />
                </View>
            )}
            <Typography group="interactive" variant="button">
                {label}
            </Typography>
            {trailingIcon && (
                <View style={{}}>
                    <Icon name={trailingIcon} />
                </View>
            )}
        </Animated.View>
    );
};

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
                    token.newSpacing.spacing.inset.lg.verticalSquished -
                    outlinedPaddingReduction,
                justifyContent: "center",
            },
            labelContainer: {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: token.newSpacing.spacing.icon.sm.gapHorizontal,
            },
            trailingIcon: {},
            leadingIcon: {},
            textStyle: {
                color: textColor,
            },
        };
    }
);
