import React from "react";
import { StyleProp, StyleSheet, TextStyle } from "react-native";
import type { ReactTestInstance } from "react-test-renderer";
import { render, screen } from "test-utils";
import { Typography } from "./index";
import {
    TypographyLineHeight,
    TypographyTracking,
    TypographyWeight,
} from "./types";

const flattenStyle = (element: ReactTestInstance) =>
    StyleSheet.flatten(element.props.style as StyleProp<TextStyle>);

describe("Typography", () => {
    it("renders the given text", () => {
        render(<Typography>Hello world</Typography>);
        expect(screen.getByText("Hello world")).toBeTruthy();
    });

    it("forwards text props such as numberOfLines", () => {
        render(<Typography numberOfLines={2}>Hello world</Typography>);
        expect(screen.getByText("Hello world")).toHaveProp(
            "numberOfLines",
            2
        );
    });

    const weights: TypographyWeight[] = ["bolder", "lighter", "normal"];
    it.each(weights)("renders without error for weight %s", (weight) => {
        render(<Typography weight={weight}>Hello world</Typography>);
        expect(screen.getByText("Hello world")).toBeTruthy();
    });

    it("applies a different fontWeight for a different weight", () => {
        render(<Typography weight="lighter">Hello world</Typography>);
        const lighter = flattenStyle(
            screen.getByText("Hello world")
        )?.fontWeight;

        render(<Typography weight="bolder">Hello world</Typography>);
        const bolder = flattenStyle(
            screen.getByText("Hello world")
        )?.fontWeight;

        expect(bolder).not.toEqual(lighter);
    });

    const trackings: TypographyTracking[] = ["normal", "tight", "wide"];
    it.each(trackings)("renders without error for tracking %s", (tracking) => {
        render(<Typography tracking={tracking}>Hello world</Typography>);
        expect(screen.getByText("Hello world")).toBeTruthy();
    });

    it("applies a different letterSpacing for a different tracking", () => {
        render(<Typography tracking="normal">Hello world</Typography>);
        const normal = flattenStyle(
            screen.getByText("Hello world")
        )?.letterSpacing;

        render(<Typography tracking="tight">Hello world</Typography>);
        const tight = flattenStyle(
            screen.getByText("Hello world")
        )?.letterSpacing;

        expect(tight).not.toEqual(normal);
    });

    const lineHeights: TypographyLineHeight[] = ["default", "squished"];
    it.each(lineHeights)(
        "renders without error for lineHeight %s",
        (lineHeight) => {
            render(
                <Typography lineHeight={lineHeight}>Hello world</Typography>
            );
            expect(screen.getByText("Hello world")).toBeTruthy();
        }
    );

    it("applies a different lineHeight for a different lineHeight value", () => {
        render(<Typography lineHeight="default">Hello world</Typography>);
        const defaultLineHeight = flattenStyle(
            screen.getByText("Hello world")
        )?.lineHeight;

        render(<Typography lineHeight="squished">Hello world</Typography>);
        const squishedLineHeight = flattenStyle(
            screen.getByText("Hello world")
        )?.lineHeight;

        expect(squishedLineHeight).not.toEqual(defaultLineHeight);
    });
});

describe("Typography.Header", () => {
    it("renders the given text", () => {
        render(<Typography.Header>Page title</Typography.Header>);
        expect(screen.getByText("Page title")).toBeTruthy();
    });

    it("forwards text props such as numberOfLines", () => {
        render(
            <Typography.Header numberOfLines={1}>
                Page title
            </Typography.Header>
        );
        expect(screen.getByText("Page title")).toHaveProp(
            "numberOfLines",
            1
        );
    });
});
