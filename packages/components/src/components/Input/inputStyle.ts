import { EDSStyleSheet } from "../../styling";
import { InputProps } from "./Input";

type InputStyleProps = Pick<InputProps, "readOnly" | "variant" | "disabled"> & {
    isSelected: boolean;
};

export const inputTokenStyles = EDSStyleSheet.create(
    (token, props: InputStyleProps) => {
        const { isSelected, variant, readOnly, disabled } = props;
        const isInactive = readOnly === true || disabled === true;

        // Background color
        const backgroundColor =
            variant === "danger"
                ? token.newColors.bg.danger.canvas
                : token.newColors.bg.input;

        // Border
        const borderWidth = isInactive ? 0 : 1;
        const borderColor = (() => {
            if (isInactive) return "transparent";
            if (variant === "danger") {
                return isSelected
                    ? token.newColors.border.danger.strong
                    : token.newColors.border.danger.subtle;
            }
            return isSelected
                ? token.newColors.border.neutral.strong
                : token.newColors.border.neutral.subtle;
        })();

        // Text colors
        const textColor = disabled
            ? token.newColors.text.disabled
            : token.newColors.text.neutral.strong;

        const placeholderColor = disabled
            ? token.newColors.text.disabled
            : token.newColors.text.neutral.subtle;

        const adornmentTextColor = disabled
            ? token.newColors.text.disabled
            : token.newColors.text.neutral.subtle;

        return {
            contentContainer: {
                backgroundColor,
                flexDirection: "row",
                alignItems: "center",
                borderWidth,
                borderColor,
                paddingHorizontal:
                    token.newSpacing.spacing.inset.sm.horizontal,
                paddingVertical:
                    token.newSpacing.spacing.inset.lg.verticalSquished,
                gap: token.newSpacing.spacing.icon.sm.gapHorizontal,
            },
            textInput: {
                flex: 1,
                color: textColor,
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 20,
                padding: 0,
            },
            placeholder: {
                color: placeholderColor,
            },
            adornmentText: {
                color: adornmentTextColor,
                fontSize: 10.5,
                fontWeight: "400",
                lineHeight: 16,
                textTransform: "uppercase",
            },
        };
    }
);
