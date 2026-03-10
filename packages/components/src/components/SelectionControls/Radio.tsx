import React from "react";
import { Pressable, Text, View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";

export type RadioProps = {
    /**
     * Callback method invoked when the user presses the radio button.
     */
    onPress?: (checked: boolean) => void;
    /**
     * Whether the radio button is in its disabled state.
     */
    disabled?: boolean;
    /**
     * Whether the radio button should be in its checked state.
     */
    checked?: boolean;
    /**
     * Optional label displayed next to the radio button.
     */
    label?: string;
};

export const Radio = ({
    onPress,
    checked = false,
    disabled = false,
    label,
}: RadioProps) => {
    const styles = useStyles(themeStyles, { checked, disabled, hasLabel: !!label });

    const handlePress = () => {
        if (!disabled) {
            onPress?.(!checked);
        }
    };

    return (
        <Pressable
            onPress={handlePress}
            disabled={!onPress || disabled}
            style={({ pressed }) => [
                styles.container,
                pressed && !disabled && styles.containerPressed,
            ]}
            accessibilityRole="radio"
            accessibilityState={{ checked, disabled }}
        >
            <View style={styles.radioOuter}>
                {checked && <View style={styles.radioInner} />}
            </View>
            {label !== undefined && (
                <Text style={styles.label}>{label}</Text>
            )}
        </Pressable>
    );
};

type RadioStyleProps = {
    checked: boolean;
    disabled: boolean;
    hasLabel: boolean;
};

const themeStyles = EDSStyleSheet.create(
    (theme, props: RadioStyleProps) => {
        const radioSize = theme.newSpacing.sizing.selectable.sm;
        const innerDotSize = radioSize / 2;

        return {
            container: {
                flexDirection: "row",
                alignItems: "center",
                gap: theme.newSpacing.spacing.icon.lg.gapHorizontal,
                paddingHorizontal:
                    theme.newSpacing.spacingProportions.squished.lg.horizontal,
                paddingVertical:
                    theme.newSpacing.spacingProportions.squished.lg.vertical,
                borderRadius: theme.geometry.border.elementBorderRadius,
            },
            containerPressed: {
                backgroundColor: props.hasLabel
                    ? theme.newColors.bg.neutral.fillMuted.hover
                    : "transparent",
            },
            radioOuter: {
                width: radioSize,
                height: radioSize,
                borderRadius: radioSize / 2,
                borderWidth: 2,
                borderColor: props.disabled
                    ? theme.colors.text.disabled
                    : props.checked
                      ? theme.newColors.bg.accent.fillEmphasis.default
                      : theme.newColors.bg.neutral.fillEmphasis.default,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
            },
            radioInner: {
                width: innerDotSize,
                height: innerDotSize,
                borderRadius: innerDotSize / 2,
                backgroundColor: props.disabled
                    ? theme.colors.text.disabled
                    : theme.newColors.bg.accent.fillEmphasis.default,
            },
        label: {
            fontSize: 14,
            fontWeight: "500",
            lineHeight: 20,
            letterSpacing: 0,
            color: props.disabled
                ? theme.colors.text.disabled
                : theme.newColors.text.neutral.strong,
        },
    };
    }
);
