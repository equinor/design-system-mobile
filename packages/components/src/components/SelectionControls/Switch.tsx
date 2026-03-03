import React, { forwardRef, useEffect, useRef } from "react";
import { Animated, Easing, View, ViewProps } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { useToken } from "../../hooks/useToken";
import { EDSStyleSheet } from "../../styling";
import { Paper } from "../Paper";
import { PressableHighlight } from "../PressableHighlight";
export type SwitchProps = {
    onChange?: (isActive: boolean) => void;
    active?: boolean;
    disabled?: boolean;
};

const KNOB_SIZE = 20;
const WIDTH = 60;
const HEIGHT = 60;

export const Switch = forwardRef<View, SwitchProps & ViewProps>(
    (
        {
            onChange = () => null,
            active = false,
            disabled = false,
            ...rest
        },
        ref
    ) => {
        const styles = useStyles(themeStyles, {
            disabled,
            isActive: active,
        });

        const token = useToken();

        const progressValue = useRef(
            new Animated.Value(active ? 1 : 0)
        ).current;

        const activeKnobAnimation = Animated.timing(progressValue, {
            toValue: 1,
            duration: token.timing.animation.slow,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease),
        });

        const inactiveKnobAnimation = Animated.timing(progressValue, {
            toValue: 0,
            duration: token.timing.animation.slow,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease),
        });

        const displacement = progressValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, WIDTH - KNOB_SIZE * 1.7],
            extrapolate: "clamp",
        });

        const backgroundScale = progressValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: "clamp",
        });

        const backgroundDisplacement = progressValue.interpolate({
            inputRange: [0, 1],
            outputRange: [-(WIDTH - KNOB_SIZE) / 2, 0],
            extrapolate: "clamp",
        });

        useEffect(() => {
            if (active) {
                activeKnobAnimation.start();
            } else {
                inactiveKnobAnimation.start();
            }
        }, [active]);

        const handlePress = () => {
            const newState = !active;
            onChange(newState);
        };

        return (
            <PressableHighlight
                disabled={disabled}
                onPress={handlePress}
                style={styles.pressableContainer}
            >
                <View ref={ref} style={[styles.toggleContainer, rest.style]}>
                    <View style={styles.statusBackground}></View>

                    <Animated.View
                        style={[
                            styles.animatedBackground,
                            {
                                transform: [
                                    {
                                        translateX: backgroundDisplacement,
                                    },
                                    { scaleX: backgroundScale },
                                ],
                            },
                        ]}
                    ></Animated.View>

                    <Animated.View
                        style={{
                            position: "absolute",
                            transform: [{ translateX: displacement }],
                        }}
                    >
                        <Paper elevation="raised" style={styles.knob} />
                    </Animated.View>
                </View>
            </PressableHighlight>
        );
    }
);

Switch.displayName = "Switch";

type ToggleStyleSheetProps = {
    isActive: boolean;
    disabled: boolean;
};

const themeStyles = EDSStyleSheet.create(
    (theme, props: ToggleStyleSheetProps) => {
        const { disabled, isActive } = props;

        const activeTrackColor = theme.newColors.bg.accent.fillMuted.default;
        const activeKnobColor = theme.newColors.bg.accent.fillEmphasis.default;
        const inactiveTrackColor = theme.newColors.bg.neutral.fillMuted.default;
        const inactiveKnobColor =
            theme.newColors.bg.neutral.fillEmphasis.default;
        const disabledKnobColor = theme.colors.text.disabled;
        const backgroundHeight = KNOB_SIZE * 0.5;

        const backgroundColor = disabled
            ? inactiveTrackColor
            : isActive
              ? activeTrackColor
              : inactiveTrackColor;

        return {
            toggleContainer: {
                flexDirection: "row",
                alignItems: "center",
            },
            pressableContainer: {
                height: HEIGHT,
                width: WIDTH,
                padding: 7,
                borderRadius: WIDTH / 2,
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
            },
            statusBackground: {
                flex: 1,
                height: backgroundHeight,
                borderRadius: KNOB_SIZE,
                backgroundColor,
            },
            knob: {
                width: KNOB_SIZE,
                height: KNOB_SIZE,
                borderRadius: KNOB_SIZE / 2,
                backgroundColor: disabled
                    ? disabledKnobColor
                    : isActive
                      ? activeKnobColor
                      : inactiveKnobColor,
            },
            animatedBackground: {
                position: "absolute",
                height: backgroundHeight,
                borderRadius: KNOB_SIZE,
                backgroundColor:
                    disabled || !isActive
                        ? theme.newColors.bg.neutral.fillMuted.hover
                        : theme.newColors.bg.accent.fillMuted.hover,
                width: WIDTH - KNOB_SIZE,
            },
        };
    }
);
