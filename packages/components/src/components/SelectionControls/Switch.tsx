import React, { forwardRef, useEffect, useRef, useState } from "react";
import {
    Animated,
    Easing,
    Pressable,
    Text,
    View,
    ViewProps,
} from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { useToken } from "../../hooks/useToken";
import { EDSStyleSheet } from "../../styling";

export type SwitchProps = {
    onChange?: (isActive: boolean) => void;
    active?: boolean;
    disabled?: boolean;
    label?: string;
};

// Figma base dimensions (2x scale from web design)
const TRACK_WIDTH = 36;
const TRACK_HEIGHT = 14;
const KNOB_SIZE = 20;
const KNOB_TRAVEL = TRACK_WIDTH - KNOB_SIZE;

export const Switch = forwardRef<View, SwitchProps & ViewProps>(
    (
        {
            onChange = () => null,
            active = false,
            disabled = false,
            label,
            ...rest
        },
        ref,
    ) => {
        const [pressed, setPressed] = useState(false);
        const styles = useStyles(themeStyles, {
            disabled,
            isActive: active,
            pressed,
            hasLabel: !!label,
        });

        const token = useToken();

        const progressValue = useRef(
            new Animated.Value(active ? 1 : 0),
        ).current;

        useEffect(() => {
            Animated.timing(progressValue, {
                toValue: active ? 1 : 0,
                duration: token.timing.animation.slow,
                useNativeDriver: true,
                easing: Easing.inOut(Easing.ease),
            }).start();
        }, [active]);

        const knobDisplacement = progressValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, KNOB_TRAVEL],
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
                                transform: [
                                    { translateX: knobDisplacement },
                                ],
                            },
                        ]}
                    />
                </View>
                {label && <Text style={styles.label}>{label}</Text>}
            </Pressable>
        );
    },
);

Switch.displayName = "Switch";

type SwitchStyleSheetProps = {
    isActive: boolean;
    disabled: boolean;
    pressed: boolean;
    hasLabel: boolean;
};

const themeStyles = EDSStyleSheet.create(
    (theme, props: SwitchStyleSheetProps) => {
        const { disabled, isActive, pressed, hasLabel } = props;

        const activeTrackColor = theme.newColors.bg.accent.fillMuted.default;
        const activeKnobColor =
            theme.newColors.bg.accent.fillEmphasis.default;
        const inactiveTrackColor =
            theme.newColors.bg.neutral.fillMuted.default;
        const inactiveKnobColor =
            theme.newColors.bg.neutral.fillEmphasis.default;
        const disabledTrackColor =
            theme.newColors.bg.neutral.fillMuted.default;
        const disabledKnobColor = theme.colors.text.disabled;

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
            hasLabel && !disabled && pressed
                ? isActive
                    ? theme.newColors.bg.accent.fillMuted.hover
                    : theme.newColors.bg.neutral.fillMuted.hover
                : "transparent";

        return {
            container: {
                flexDirection: "row" as const,
                alignItems: "center" as const,
                paddingHorizontal: hasLabel
                    ? theme.newSpacing.spacingProportions.squished.lg
                          .horizontal
                    : undefined,
                paddingVertical: hasLabel
                    ? theme.newSpacing.spacingProportions.squished.lg
                          .vertical
                    : undefined,
                borderRadius: hasLabel
                    ? theme.geometry.border.elementBorderRadius
                    : 0,
                backgroundColor: pressedBackground,
                opacity: disabled ? 0.5 : 1,
            },
            track: {
                width: TRACK_WIDTH,
                height: TRACK_HEIGHT,
                borderRadius: TRACK_HEIGHT / 2,
                backgroundColor: trackColor,
                justifyContent: "center" as const,
            },
            knob: {
                width: KNOB_SIZE,
                height: KNOB_SIZE,
                borderRadius: KNOB_SIZE / 2,
                backgroundColor: knobColor,
                position: "absolute" as const,
            },
            label: {
                marginLeft:
                    theme.newSpacing.spacing.icon.lg.gapHorizontal,
                fontSize: 14,
                fontWeight: "500" as const,
                lineHeight: 20,
                color: disabled
                    ? theme.colors.text.disabled
                    : theme.newColors.text.neutral.strong,
            },
        };
    },
);
