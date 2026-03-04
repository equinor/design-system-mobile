import { EDSStyleSheet } from "../../styling";
import { MasterToken } from "../../styling/tokens";
import { ButtonTone, ButtonVariant } from "./types";

const VARIANT_MAP = {
    ghost: "fillMuted",
    secondary: "fillMuted",
    primary: "fillEmphasis",
} as const satisfies Record<ButtonVariant, string>;

export const getBackgroundColorForButton = (
    token: MasterToken,
    disabled: boolean,
    tone: ButtonTone,
    variant: ButtonVariant
) => {
    const mappedVariant = VARIANT_MAP[variant];

    return {
        default: `${token.newColors.bg[tone][mappedVariant].default}${variant === "ghost" || variant === "secondary" ? "00" : ""}`,
        pressed: token.newColors.bg[tone][mappedVariant].active,
    };
};

export const buttonContentStyles = EDSStyleSheet.create((token) => ({
    container: {
        borderRadius: token.newSpacing.spacing.borderRadius.rounded,
        paddingVertical: token.newSpacing.selectableSpace.sm.vertical,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
}));
