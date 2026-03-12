import React from "react";
import { Pressable, Text } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { Icon } from "../Icon/Icon";

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
     * Label displayed next to the radio button. When omitted, an
     * `accessibilityLabel` must be provided for screen readers.
     */
    label?: string;
    /**
     * Accessible name for screen readers. Required when `label` is not provided.
     */
    accessibilityLabel?: string;
};

export const Radio = ({
    onPress,
    checked = false,
    disabled = false,
    label,
    accessibilityLabel,
}: RadioProps) => {
    const hasLabel = label != null;
    const styles = useStyles(themeStyles, { checked, disabled, hasLabel });

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
            accessibilityLabel={accessibilityLabel ?? label}
        >
            <Icon
                name={checked ? "radiobox-marked" : "radiobox-blank"}
                size={styles.icon.size}
                color={styles.icon.color}
            />
            {label != null && <Text style={styles.label}>{label}</Text>}
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
        const touchTargetSize = theme.newSpacing.sizing.selectable.lg;

        return {
            container: {
                flexDirection: "row",
                alignItems: "center",
                gap: theme.newSpacing.spacing.icon.lg.gapHorizontal,
                ...(props.hasLabel
                    ? {
                          paddingHorizontal:
                              theme.newSpacing.spacingProportions.squished.lg
                                  .horizontal,
                          paddingVertical:
                              theme.newSpacing.spacingProportions.squished.lg
                                  .vertical,
                          borderRadius:
                              theme.newSpacing.spacing.borderRadius.rounded,
                      }
                    : {
                          width: touchTargetSize,
                          height: touchTargetSize,
                          justifyContent: "center",
                          borderRadius: touchTargetSize / 2,
                      }),
            },
            containerPressed: {
                backgroundColor: theme.newColors.bg.accent.fillMuted.hover,
            },
            icon: {
                size: radioSize,
                color: props.disabled
                    ? theme.newColors.text.disabled
                    : theme.newColors.bg.accent.fillEmphasis.default,
            },
            label: {
                fontSize: 14,
                fontWeight: "500",
                lineHeight: 20,
                letterSpacing: 0,
                color: props.disabled
                    ? theme.newColors.text.disabled
                    : theme.newColors.text.neutral.strong,
            },
    };
    }
);
