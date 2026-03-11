import React, { useEffect, useRef, useState } from "react";
import {
    Animated,
    Easing,
    Pressable,
    Text,
    View,
    ViewProps,
} from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { animationDuration } from "../../utils/animation";

export type SwitchProps = {
    onChange?: (isActive: boolean) => void;
    active?: boolean;
    disabled?: boolean;
    label?: string;
    ref?: React.Ref<View>;
} & ViewProps;

export const Switch = ({
    onChange = () => null,
    active = false,
    disabled = false,
    label,
    ref,
    ...rest
}: SwitchProps) => {
    const [pressed, setPressed] = useState(false);
    const styles = useStyles(themeStyles, {
        disabled,
        isActive: active,
        pressed,
        hasLabel: !!label,
    });

    const progressValue = useRef(new Animated.Value(active ? 1 : 0)).current;

    useEffect(() => {
        Animated.timing(progressValue, {
            toValue: active ? 1 : 0,
            duration: animationDuration,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease),
        }).start();
    }, [active]);

    const knobTravel = styles.track.width - styles.knob.width;
    const knobDisplacement = progressValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, knobTravel],
        extrapolate: "clamp",
    });

    const handlePress = () => {
        onChange(!active);
    };

    return (
        <Pressable
            ref={ref}
            disabled={disabled}
            onPress={handlePress}
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
            style={[styles.container, rest.style]}
            accessibilityRole="switch"
            accessibilityState={{ checked: active, disabled }}
        >
            <View style={styles.track}>
                <Animated.View
                    style={[
                        styles.knob,
                        {
                            transform: [{ translateX: knobDisplacement }],
                        },
                    ]}
                />
            </View>
            {label && <Text style={styles.label}>{label}</Text>}
        </Pressable>
    );
};

type SwitchStyleSheetProps = {
    isActive: boolean;
    disabled: boolean;
    pressed: boolean;
    hasLabel: boolean;
};

const themeStyles = EDSStyleSheet.create(
    (theme, props: SwitchStyleSheetProps) => {
        const { disabled, isActive, pressed, hasLabel } = props;

        // Dimensions derived from selectable icon size (Figma uses percentages within 20px icon)
        const iconSize = theme.newSpacing.sizing.selectable.sm;
        const trackWidth = iconSize * 0.9167; // 91.67% of icon size
        const trackHeight = iconSize * 0.3333; // 33.33% of icon size
        const knobSize = iconSize * 0.5; // 50% of icon size

        const activeTrackColor = theme.newColors.bg.accent.fillMuted.default;
        const activeKnobColor = theme.newColors.bg.accent.fillEmphasis.default;
        const inactiveTrackColor = theme.newColors.bg.neutral.fillMuted.default;
        const inactiveKnobColor =
            theme.newColors.bg.neutral.fillEmphasis.default;
        const disabledTrackColor = theme.newColors.bg.neutral.fillMuted.default;
        const disabledKnobColor = theme.newColors.text.disabled;

        const trackColor = disabled
            ? disabledTrackColor
            : isActive
              ? activeTrackColor
              : inactiveTrackColor;

        const knobColor = disabled
            ? disabledKnobColor
            : isActive
              ? activeKnobColor
              : inactiveKnobColor;

        const pressedBackground =
            !disabled && pressed
                ? theme.newColors.bg.accent.fillMuted.hover
                : "transparent";

        const paddingH =
            theme.newSpacing.spacingProportions.squished.lg.horizontal;
        const paddingV =
            theme.newSpacing.spacingProportions.squished.lg.vertical;

        // For labelless switch, use a perfect circle highlight
        const hitAreaSize = trackWidth + paddingH * 2;

        return {
            container: {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: hasLabel ? undefined : "center",
                gap: theme.newSpacing.spacing.icon.lg.gapHorizontal,
                ...(hasLabel
                    ? {
                          paddingHorizontal: paddingH,
                          paddingVertical: paddingV,
                          borderRadius:
                              theme.newSpacing.spacing.borderRadius.rounded,
                      }
                    : {
                          width: hitAreaSize,
                          height: hitAreaSize,
                          borderRadius: hitAreaSize / 2,
                      }),
                backgroundColor: pressedBackground,
                opacity: disabled ? 0.5 : 1,
            },
            track: {
                width: trackWidth,
                height: trackHeight,
                borderRadius: trackHeight / 2,
                backgroundColor: trackColor,
                justifyContent: "center",
            },
            knob: {
                width: knobSize,
                height: knobSize,
                borderRadius: knobSize / 2,
                backgroundColor: knobColor,
                position: "absolute",
            },
            label: {
                fontSize: 14,
                fontWeight: "500",
                lineHeight: 20,
                color: disabled
                    ? theme.newColors.text.disabled
                    : theme.newColors.text.neutral.strong,
            },
        };
    }
);
