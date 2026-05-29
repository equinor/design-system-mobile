import React, { forwardRef } from "react";
import { TextInput, View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { Input, InputProps } from "../Input";
import { Typography } from "../Typography";

export type TextFieldProps = {
    /**
     * The label displayed above the input.
     */
    label?: string;
    /**
     * A description shown below the label, above the input. Use for additional context.
     */
    description?: string;
    /**
     * A message shown below the input. Shown in error colour when invalid is true.
     */
    helperMessage?: string;
} & InputProps;

export const TextField = forwardRef<TextInput, TextFieldProps>(
    (
        { label, description, helperMessage, invalid, disabled, ...rest },
        ref
    ) => {
        const styles = useStyles(themeStyles, { invalid, disabled });

        return (
            <View style={styles.container}>
                {label && (
                    <View style={styles.labelSection}>
                        <Typography size="md" style={styles.label}>
                            {label}
                        </Typography>
                        {description && (
                            <Typography size="sm" style={styles.description}>
                                {description}
                            </Typography>
                        )}
                    </View>
                )}
                <Input
                    ref={ref}
                    invalid={invalid}
                    disabled={disabled}
                    {...rest}
                />
                {helperMessage && (
                    <Typography size="sm" style={styles.helperMessage}>
                        {helperMessage}
                    </Typography>
                )}
            </View>
        );
    }
);

TextField.displayName = "TextField";

type TextFieldStyleProps = Pick<TextFieldProps, "invalid" | "disabled">;

const themeStyles = EDSStyleSheet.create(
    (token, { invalid, disabled }: TextFieldStyleProps) => ({
        container: {
            gap: token.spacing.spacing.vertical.twoXs,
        },
        labelSection: {
            gap: token.spacing.spacing.vertical.xs,
        },
        label: {
            color: invalid
                ? token.colors.text.danger.subtle
                : token.colors.text.neutral.strong,
        },
        description: {
            color: token.colors.text.neutral.subtle,
        },
        helperMessage: {
            color: disabled
                ? token.colors.text.disabled
                : invalid
                ? token.colors.text.danger.subtle
                : token.colors.text.neutral.subtle,
        },
    })
);
