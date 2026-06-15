import React, { forwardRef, useEffect, useRef, useState } from "react";
import { AccessibilityInfo, TextInput, TextInputProps, View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { Icon } from "../Icon";
import { Typography } from "../Typography";

// TODO: Replace with a sizing token once available — tracked in PR #131 / design alignment backlog
const TEXTAREA_MIN_HEIGHT = 54;

export type TextAreaProps = {
    label?: string;
    indicator?: string;
    description?: string;
    helperMessage?: string;
    invalid?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    /**
     * Shows a character count below the TextArea.
     * Displays "n / maxLength" when maxLength is set, otherwise just "n".
     */
    showCharacterCount?: boolean;
} & Omit<TextInputProps, "multiline" | "editable" | "readOnly" | "scrollEnabled">;

export const TextArea = forwardRef<TextInput, TextAreaProps>(
    (
        {
            label,
            indicator,
            description,
            helperMessage,
            invalid = false,
            disabled = false,
            readOnly = false,
            showCharacterCount = false,
            maxLength,
            value,
            defaultValue,
            onChangeText,
            onFocus,
            onBlur,
            style: userStyle,
            accessibilityState: userAccessibilityState,
            accessibilityLabel,
            accessibilityHint,
            ...rest
        },
        ref
    ) => {
        const [isFocused, setIsFocused] = useState(false);
        const [charCount, setCharCount] = useState(
            () => String(value ?? defaultValue ?? "").length
        );

        useEffect(() => {
            if (value !== undefined) {
                setCharCount(String(value).length);
            }
        }, [value]);

        const announcedThresholdRef = useRef<number | null>(null);

        useEffect(() => {
            if (!showCharacterCount || maxLength === undefined) return;

            const threshold =
                charCount >= maxLength
                    ? maxLength
                    : charCount >= maxLength * 0.8
                    ? maxLength * 0.8
                    : null;

            if (threshold !== null && threshold !== announcedThresholdRef.current) {
                announcedThresholdRef.current = threshold;
                AccessibilityInfo.announceForAccessibility(
                    `${charCount} of ${maxLength} characters`
                );
            }
        }, [charCount, maxLength, showCharacterCount]);

        const styles = useStyles(themeStyles, {
            isFocused,
            invalid,
            disabled,
            readOnly,
        });

        const handleChangeText = (text: string) => {
            setCharCount(text.length);
            onChangeText?.(text);
        };

        const showHelperRow = !!helperMessage || showCharacterCount;

        const charCountLabel =
            maxLength !== undefined
                ? `${charCount} / ${maxLength}`
                : `${charCount}`;

        return (
            <View style={styles.container}>
                {label && (
                    <View style={styles.labelSection}>
                        <View style={styles.labelRow}>
                            <Typography size="md" style={styles.label}>
                                {label}
                            </Typography>
                            {indicator && (
                                <Typography size="md" style={styles.indicator}>
                                    {indicator}
                                </Typography>
                            )}
                        </View>
                        {description && (
                            <Typography size="sm" style={styles.description}>
                                {description}
                            </Typography>
                        )}
                    </View>
                )}
                <View style={styles.inputContainer}>
                    <View
                        style={styles.resizeHandle}
                        accessible={false}
                        importantForAccessibility="no-hide-descendants"
                    >
                        <Icon name="resize-bottom-right" size={14} color={styles.resizeHandle.color} />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            ref={ref}
                            multiline
                            scrollEnabled={false}
                            editable={!disabled}
                            readOnly={readOnly}
                            maxLength={maxLength}
                            value={value}
                            defaultValue={defaultValue}
                            onChangeText={handleChangeText}
                            onFocus={(e) => {
                                setIsFocused(true);
                                onFocus?.(e);
                            }}
                            onBlur={(e) => {
                                setIsFocused(false);
                                onBlur?.(e);
                            }}
                            textAlignVertical="top"
                            placeholderTextColor={styles.placeholder.color}
                            accessibilityLabel={accessibilityLabel ?? label}
                            accessibilityHint={
                                accessibilityHint ??
                                ([description, helperMessage]
                                    .filter(Boolean)
                                    .join(". ") || undefined)
                            }
                            accessibilityState={{ disabled, ...userAccessibilityState }}
                            style={[styles.textInput, userStyle]}
                            {...rest}
                        />
                    </View>
                </View>
                {showHelperRow && (
                    <View style={styles.helperRow}>
                        {helperMessage && (
                            <Typography
                                size="sm"
                                style={styles.helperMessage}
                            >
                                {helperMessage}
                            </Typography>
                        )}
                        {showCharacterCount && (
                            <Typography
                                size="sm"
                                style={styles.charCount}
                                accessibilityLiveRegion={
                                    maxLength !== undefined &&
                                    charCount >= maxLength * 0.8
                                        ? "polite"
                                        : "none"
                                }
                            >
                                {charCountLabel}
                            </Typography>
                        )}
                    </View>
                )}
            </View>
        );
    }
);

TextArea.displayName = "TextArea";

type TextAreaStyleProps = Pick<
    TextAreaProps,
    "invalid" | "disabled" | "readOnly"
> & { isFocused: boolean };

const themeStyles = EDSStyleSheet.create(
    (token, { isFocused, invalid, disabled, readOnly }: TextAreaStyleProps) => {
        const backgroundColor = invalid
            ? token.colors.bg.danger.canvas
            : token.colors.bg.input;

        const borderWidth = disabled ? 0 : 1;
        const borderColor = (() => {
            if (disabled) return "transparent";
            if (readOnly) return token.colors.bg.disabled;
            if (invalid) {
                return isFocused
                    ? token.colors.border.danger.strong
                    : token.colors.border.danger.subtle;
            }
            return isFocused
                ? token.colors.border.neutral.strong
                : token.colors.border.neutral.subtle;
        })();

        const textColor = disabled
            ? token.colors.text.disabled
            : readOnly
            ? token.colors.border.neutral.strong
            : token.colors.text.neutral.strong;

        return {
            container: {
                gap: token.spacing.spacing.vertical.threeXs,
            },
            labelSection: {
                gap: token.spacing.spacing.vertical.threeXs,
            },
            labelRow: {
                flexDirection: "row",
                gap: token.spacing.spacing.horizontal.xs,
            },
            label: {
                color: token.colors.text.neutral.strong,
            },
            indicator: {
                color: token.colors.text.neutral.subtle,
            },
            description: {
                color: token.colors.text.neutral.subtle,
            },
            inputContainer: {
                backgroundColor,
                borderWidth,
                borderColor,
                borderRadius: token.spacing.spacing.borderRadius.rounded,
                minHeight: TEXTAREA_MIN_HEIGHT,
                paddingHorizontal: token.spacing.spacing.inset.sm.horizontal,
                paddingVertical:
                    token.spacing.spacing.inset.lg.verticalSquished,
            },
            resizeHandle: {
                position: "absolute",
                bottom: 2,
                right: 2,
                color: token.colors.border.neutral.subtle,
            },
            inputWrapper: {
                pointerEvents: disabled ? "none" : "auto",
            },
            textInput: {
                flex: 1,
                color: textColor,
                fontFamily: token.typography.ui.typography.fontFamily,
                fontSize: token.typography.ui.fontFamilySize.md.fontSize,
                fontWeight:
                    token.typography.ui.fontFamilySize.md.fontWeight.normal,
                lineHeight:
                    token.typography.ui.fontFamilySize.md.lineHeight.default,
                padding: 0,
            },
            placeholder: {
                color: disabled
                    ? token.colors.text.disabled
                    : token.colors.text.neutral.subtle,
            },
            helperRow: {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: token.spacing.spacing.horizontal.xs,
            },
            helperMessage: {
                flex: 1,
                color: disabled
                    ? token.colors.text.disabled
                    : token.colors.text.neutral.subtle,
            },
            charCount: {
                color: token.colors.text.neutral.subtle,
                flexShrink: 0,
                marginLeft: "auto",
            },
        };
    }
);
