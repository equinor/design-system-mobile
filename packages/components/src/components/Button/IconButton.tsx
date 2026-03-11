import React, { FC } from "react";
import { Pressable, View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { useToken } from "../../hooks/useToken";
import { EDSStyleSheet } from "../../styling";
import { ColorToken } from "../../styling/tokens/colorToken";
import { Icon, IconName } from "../Icon";
import { CircularProgress } from "../ProgressIndicator";
import { ButtonBackground } from "./ButtonBackground";
import {
    BaseButtonProps,
    ButtonSize,
    ButtonTone,
    ButtonVariant,
} from "./types";

export type IconButtonProps = BaseButtonProps & {
    /**
     * Name of the icon.
     */
    name: IconName;
    /**
     * Boolean value indicating whether the button should be fully circular.
     * When false (default), the button is square with rounded corners.
     */
    round?: boolean;
};

type TextEmphasis = keyof ColorToken["text"][keyof ColorToken["text"]];
const TEXT_VARIANT_MAP = {
    primary: "strongOnEmphasis",
    secondary: "subtle",
    ghost: "subtle",
} as const satisfies Record<ButtonVariant, TextEmphasis>;

export const IconButton: FC<IconButtonProps> = ({
    name,
    tone = "accent",
    size = "default",
    variant = "primary",
    round = false,
    busy = false,
    disabled = false,
    onPress = () => null,
    ref,
}) => {
    const token = useToken();
    const styles = useStyles(tokenStyles, { variant, tone, size, round });

    const iconSize = {
        small: token.newSpacing.sizing.icon.sm,
        default: token.newSpacing.sizing.icon.md,
        large: token.newSpacing.sizing.icon.lg,
    }[size];

    return (
        <Pressable
            ref={ref}
            disabled={disabled}
            onPress={onPress}
            style={styles.container}
        >
            {(pressedEvent) => (
                <ButtonBackground
                    isPressed={pressedEvent.pressed}
                    tone={tone}
                    variant={variant}
                    disabled={disabled ?? false}
                >
                    <View style={styles.iconContainer}>
                        {busy ? (
                            <CircularProgress
                                color={
                                    variant === "primary" && !disabled
                                        ? "neutral"
                                        : "primary"
                                }
                                size={iconSize}
                            />
                        ) : (
                            <Icon
                                name={name}
                                size={iconSize}
                                style={styles.icon}
                            />
                        )}
                    </View>
                </ButtonBackground>
            )}
        </Pressable>
    );
};

IconButton.displayName = "Button.Icon";

type IconButtonStyleProps = {
    variant: ButtonVariant;
    tone: ButtonTone;
    size: ButtonSize;
    round: boolean;
};

const tokenStyles = EDSStyleSheet.create(
    (token, { variant, tone, size, round }: IconButtonStyleProps) => {
        const inset = {
            small: token.newSpacing.spacing.inset.xs,
            default: token.newSpacing.spacing.inset.sm,
            large: token.newSpacing.spacing.inset.md,
        }[size];

        const borderRadius = round
            ? token.newSpacing.spacing.borderRadius.pill
            : token.newSpacing.spacing.borderRadius.rounded;

        return {
            container: {
                borderRadius,
                overflow: "hidden",
                borderColor: token.newColors.border[tone].strong,
                borderWidth:
                    variant === "secondary"
                        ? token.newSpacing.sizing.stroke.thin
                        : 0,
            },
            iconContainer: {
                paddingVertical: inset.verticalSquared,
                paddingHorizontal: inset.horizontal,
                justifyContent: "center",
                alignItems: "center",
            },
            icon: {
                color: token.newColors.text[tone][TEXT_VARIANT_MAP[variant]],
            },
        };
    }
);
