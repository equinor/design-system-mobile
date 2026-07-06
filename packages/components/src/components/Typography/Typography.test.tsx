import React from "react";
import { render, screen } from "test-utils";
import { Typography } from "./index";
import {
    TypographyLineHeight,
    TypographyTracking,
    TypographyWeight,
} from "./types";

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

    const trackings: TypographyTracking[] = ["normal", "tight", "wide"];
    it.each(trackings)("renders without error for tracking %s", (tracking) => {
        render(<Typography tracking={tracking}>Hello world</Typography>);
        expect(screen.getByText("Hello world")).toBeTruthy();
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
