import type {
    Color,
    EDSColor,
    EDSTextColor,
    HexColorValue,
    RGBAColorValue,
    RGBColorValue,
} from "./types";

export const isHexColorValue = (obj: string): obj is HexColorValue =>
    obj.startsWith("#");
export const isRGBAColorValue = (obj: string): obj is RGBAColorValue =>
    obj.startsWith("rgba(");
export const isRGBColorValue = (obj: string): obj is RGBColorValue =>
    obj.startsWith("rgb(");
export const isEDSColor = (obj: string): obj is EDSColor =>
    ["primary", "secondary", "warning", "danger", "success"].some(
        (col) => col === obj
    );
export const isTextColor = (obj: string): obj is EDSTextColor =>
    [
        "textPrimary",
        "textSecondary",
        "textTertiary",
        "textInverted",
        "textDisabled",
    ].some((col) => col === obj);

// Stub retained for unmigrated Icon component — will be removed when Icon is migrated in Slice 4
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function resolveColor(color: Color, _theme: any): Color {
    return color;
}
