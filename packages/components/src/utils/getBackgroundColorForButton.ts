import { MasterToken } from "src/styling/tokens";

type Variant = "primary" | "secondary" | "ghost";
type ButtonTone = "accent" | "neutral" | "danger";

// TODO: Update to use new color tokens for tone when available
const toneToInteractive = (token: MasterToken, tone: ButtonTone): string => {
    if (tone === "accent") return token.colors.interactive.primary;
    if (tone === "neutral") return token.colors.interactive.secondary;
    return token.colors.interactive.danger;
};

/**
 * Get background color for button.
 * @param token resolved token
 * @param variant button variant
 * @param tone button tone
 * @param disabled whether the button is disabled or not
 * @returns a color value, or 'transparent'
 */
export const getBackgroundColorForButton = (
    token: MasterToken,
    variant: Variant,
    tone: ButtonTone,
    disabled: boolean
) => {
    if (variant !== "primary") return "transparent";
    if (disabled) return token.colors.interactive.disabled;
    return toneToInteractive(token, tone);
};
