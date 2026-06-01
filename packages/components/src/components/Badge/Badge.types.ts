export type BadgeTone =
    | "neutral"
    | "accent"
    | "success"
    | "info"
    | "warning"
    | "danger";

export type BadgeEmphasis = "low" | "medium";

export type BadgeStyle = "solid" | "outlined";

import { ViewProps } from "react-native";

export type BadgeProps = {
    /** The label text or number displayed inside the badge. */
    children: string | number;
    /** Semantic color tone. */
    tone?: BadgeTone;
    /** Visual weight of the badge. */
    emphasis?: BadgeEmphasis;
    /** Solid fill or outlined border. */
    style?: BadgeStyle;
} & ViewProps;


