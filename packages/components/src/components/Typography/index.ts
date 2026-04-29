import {
    TypographyHeading,
    type TypographyHeadingProps,
} from "./TypographyHeader";
import { TypographyUI, type TypographyUIProps } from "./TypographyUI";

type ExtendedTypography = typeof TypographyUI & {
    /**
     * Header typography variant, used for titles and headings.
     */
    Header: typeof TypographyHeading;
};

const Typography = TypographyUI as ExtendedTypography;
Typography.Header = TypographyHeading;

export { Typography };
export type {
    TypographyHeadingProps as TypographyHeaderProps,
    TypographyUIProps,
};
