import React, { FC, useContext } from "react";
import { Pressable, View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { ColorToken } from "../../styling/tokens/colorToken";
import { Icon, IconName } from "../Icon";
import { Typography } from "../Typography";
import { ButtonBackground } from "./ButtonBackground";
import { ButtonGroupContext } from "./ButtonGroup";
import { ToggleButtonContext } from "./ToggleButton";
import { BaseButtonProps, ButtonTone, ButtonVariant } from "./types";

export type ButtonProps = BaseButtonProps & {
    /**
     * Label text of the button.
     */
    label: string;
    /**
     * Name of the leading icon to display alongside the button label.
     */
    leadingIcon?: IconName;
    /**
     * Name of the trailing icon to display alongside the button label.
     */
    trailingIcon?: IconName;
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
    const styles = useStyles(tokenStyles, { variant, tone });

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
                    disabled={disabled}
                >
                    <View style={styles.squareButtonContainer}>
                        {leadingIcon && (
                            <View>
                                <Icon name={leadingIcon} style={styles.text} />
                            </View>
                        )}
                        <Typography
                            group="interactive"
                            variant="button"
                            style={styles.text}
                        >
                            {label}
                        </Typography>
                        {trailingIcon && (
                            <View>
                                <Icon name={trailingIcon} style={styles.text} />
                            </View>
                        )}
                    </View>
                </ButtonBackground>
            )}
        </Pressable>
    );
};

type ByttonStylesProps = {
    tone: ButtonTone;
    variant: ButtonVariant;
};

type TextEmphasis = keyof ColorToken["text"][keyof ColorToken["text"]];
const TEXT_VARIANT_MAP = {
    primary: "strongOnEmphasis",
    secondary: "subtle",
    ghost: "subtle",
} as const satisfies Record<ButtonVariant, TextEmphasis>;

const tokenStyles = EDSStyleSheet.create(
    (token, { variant, tone }: ByttonStylesProps) => {
        const borderColor = token.newColors.border[tone].strong;

        return {
            container: {
                borderRadius: token.newSpacing.spacing.borderRadius.rounded,
                overflow: "hidden",
                borderColor,
                borderWidth:
                    variant === "secondary"
                        ? token.newSpacing.sizing.stroke.thin
                        : 0,
            },
            squareButtonContainer: {
                borderRadius: token.newSpacing.spacing.borderRadius.rounded,
                paddingVertical: token.newSpacing.selectableSpace.md.vertical,
                paddingHorizontal:
                    token.newSpacing.selectableSpace.md.horizontal,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
            },
            text: {
                color: token.newColors.text[tone][TEXT_VARIANT_MAP[variant]],
            },
        };
    }
);
