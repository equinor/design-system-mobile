import React, { Ref, useEffect, useState } from "react";
import {
    Keyboard,
    LayoutChangeEvent,
    Pressable,
    TextInput,
    View,
} from "react-native";
import Animated, {
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

import { Button } from "../Button";
import { useStyles } from "../../hooks/useStyles";
import { useToken } from "../../hooks/useToken";
import { EDSStyleSheet } from "../../styling";
import { Icon } from "../Icon";
import { Input, InputProps } from "../Input";

export type SearchProps = Omit<
    InputProps,
    "multiline" | "startAdornment" | "endAdornment" | "hideErrorIcon"
> & {
    /**
     * When true, a Cancel button slides in from the right when the input is focused.
     */
    cancellable?: boolean;
    /**
     * Called when the Cancel button is pressed.
     */
    onCancelPress?: () => void;
    ref?: Ref<TextInput>;
};

export const Search = ({
    cancellable,
    value,
    defaultValue,
    disabled = false,
    readOnly = false,
    invalid = false,
    onCancelPress,
    onChange,
    onFocus,
    onBlur,
    ref,
    ...rest
}: SearchProps) => {
    const [text, setText] = useState(String(value ?? defaultValue ?? ""));
    const [isInputFocused, setIsInputFocused] = useState(false);

    const token = useToken();
    const styles = useStyles(themeStyles, { disabled, isInputFocused });

    const animationValue = useSharedValue(0);
    const cancelButtonWidth = useSharedValue(0);

    const paddingHorizontal = token.spacing.spacing.inset.sm.horizontal;
    const iconGap = token.spacing.spacing.icon.sm.gapHorizontal;
    const iconSize = token.spacing.sizing.icon.sm;

    // Subtract paddingHorizontal: Input's contentContainer already provides that gap on the right.
    const clearButtonPaddingRight = iconGap + iconSize - paddingHorizontal;

    const showClearButton = !!text && !disabled && !readOnly;

    useEffect(() => {
        if (value !== undefined) setText(String(value));
    }, [value]);

    useEffect(() => {
        if (!cancellable) return;
        animationValue.value = withTiming(isInputFocused ? 1 : 0, {
            duration: token.timing.animation.slow,
        });
    }, [isInputFocused, cancellable, animationValue, token.timing.animation.slow]);

    const cancelButtonStyle = useAnimatedStyle(() => ({
        opacity: animationValue.value,
        transform: [
            {
                translateX: interpolate(
                    animationValue.value,
                    [0, 1],
                    [cancelButtonWidth.value, 0]
                ),
            },
        ],
    }));

    const inputStyle = useAnimatedStyle(() => ({
        marginRight: interpolate(
            animationValue.value,
            [0, 1],
            [0, cancelButtonWidth.value + paddingHorizontal]
        ),
    }));

    const handleCancel = () => {
        setText("");
        onChange?.("");
        onCancelPress?.();
        Keyboard.dismiss();
    };

    const handleClearText = () => {
        setText("");
        onChange?.("");
    };

    const handleChangeText = (newText: string) => {
        setText(newText);
        onChange?.(newText);
    };

    return (
        <View style={styles.container} pointerEvents="box-none">
            <Animated.View style={inputStyle} pointerEvents="box-none">
                <Input
                    {...rest}
                    ref={ref}
                    value={text}
                    disabled={disabled}
                    readOnly={readOnly}
                    invalid={invalid}
                    hideErrorIcon
                    multiline={readOnly}
                    scrollEnabled={readOnly ? false : undefined}
                    onChange={handleChangeText}
                    onFocus={(e) => {
                        setIsInputFocused(true);
                        onFocus?.(e);
                    }}
                    onBlur={(e) => {
                        setIsInputFocused(false);
                        onBlur?.(e);
                    }}
                    startAdornment={
                        <>
                            {invalid && !disabled && (
                                <Icon
                                    name="alert-circle"
                                    size={iconSize}
                                    color={styles.errorIcon.color}
                                    accessible={false}
                                    importantForAccessibility="no"
                                />
                            )}
                            <Icon
                                name="magnify"
                                size={iconSize}
                                color={styles.searchIcon.color}
                                accessible={false}
                                importantForAccessibility="no"
                            />
                        </>
                    }
                    style={showClearButton ? { paddingRight: clearButtonPaddingRight } : undefined}
                />
                {showClearButton && (
                    <Pressable
                        style={styles.clearButton}
                        onPress={handleClearText}
                        accessibilityRole="button"
                        accessibilityLabel="Clear search"
                    >
                        <Icon
                            name="close"
                            size={iconSize}
                            color={styles.clearIcon.color}
                            accessible={false}
                            importantForAccessibility="no"
                        />
                    </Pressable>
                )}
            </Animated.View>
            {cancellable && (
                <Animated.View
                    style={[cancelButtonStyle, styles.buttonWrapper]}
                    onLayout={({ nativeEvent }: LayoutChangeEvent) => {
                        cancelButtonWidth.value = nativeEvent.layout.width;
                    }}
                >
                    <Button
                        variant="ghost"
                        size="small"
                        label="Cancel"
                        onPress={handleCancel}
                    />
                </Animated.View>
            )}
        </View>
    );
};

type SearchStyleProps = Pick<SearchProps, "disabled"> & {
    isInputFocused: boolean;
};

const themeStyles = EDSStyleSheet.create(
    (token, { disabled, isInputFocused }: SearchStyleProps) => ({
        container: {
            flex: 1,
        },
        searchIcon: {
            color: disabled
                ? token.colors.text.disabled
                : token.colors.text.neutral.subtle,
        },
        errorIcon: {
            color: token.colors.text.danger.subtle,
        },
        clearButton: {
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            justifyContent: "center",
            paddingHorizontal: token.spacing.spacing.icon.sm.gapHorizontal,
        },
        clearIcon: {
            color: token.colors.text.accent.subtle,
        },
        buttonWrapper: {
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            justifyContent: "center",
            pointerEvents: isInputFocused ? "auto" : "none",
        },
    })
);
