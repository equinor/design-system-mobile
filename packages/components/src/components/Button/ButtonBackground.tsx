import React, { FC, PropsWithChildren, useEffect, useMemo } from "react";
import Animated, {
    cancelAnimation,
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
import { useToken } from "../../hooks/useToken";
import { ButtonVariant } from "./types";
import { VARIANT_MAP } from "./utils";

type ButtonBackgroundProps = {
    isPressed: boolean;
    tone: "accent" | "neutral" | "danger";
    variant: ButtonVariant;
    disabled: boolean;
};

export const ButtonBackground: FC<PropsWithChildren<ButtonBackgroundProps>> = ({
    isPressed,
    tone,
    variant,
    disabled,
    children,
}) => {
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

    const backgroundColors = useMemo(() => {
        const mappedVariant = VARIANT_MAP[variant];
        let defaultColor = token.newColors.bg[tone][mappedVariant]
            .default as string;
        const pressedColor = token.newColors.bg[tone][mappedVariant].active;
        if (disabled) {
            defaultColor = token.newColors.bg.disabled;
        }

        return {
            default: `${defaultColor}${variant === "ghost" || variant === "secondary" ? "00" : ""}`,
            pressed: pressedColor,
        };
    }, [token, disabled, tone, variant]);

    const animatedStyle = useAnimatedStyle(() => ({
        backgroundColor: interpolateColor(
            animationValue.value,
            [0, 1],
            [backgroundColors.default, backgroundColors.pressed],
            "LAB"
        ),
    }));

    return <Animated.View style={animatedStyle}>{children}</Animated.View>;
};
