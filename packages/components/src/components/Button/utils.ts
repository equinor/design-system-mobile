import { ColorToken } from "../../styling/tokens/colorToken";
import { ButtonSize, ButtonVariant } from "./types";

type TextEmphasis = keyof ColorToken["text"][keyof ColorToken["text"]];

export const SIZE_MAP = {
    small: "sm",
    default: "md",
    large: "lg",
} as const satisfies Record<ButtonSize, "sm" | "md" | "lg">;

export const TEXT_VARIANT_MAP = {
    primary: "strongOnEmphasis",
    secondary: "subtle",
    ghost: "subtle",
} as const satisfies Record<ButtonVariant, TextEmphasis>;
