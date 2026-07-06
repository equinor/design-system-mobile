import React from "react";
import { render, screen } from "test-utils";
import { Badge } from "./index";
import { BadgeTone } from "./Badge.types";

describe("Badge", () => {
    it("renders string children", () => {
        render(<Badge>New</Badge>);
        expect(screen.getByText("New")).toBeTruthy();
    });

    it("renders numeric children", () => {
        render(<Badge>{3}</Badge>);
        expect(screen.getByText("3")).toBeTruthy();
    });

    it("truncates to a single line", () => {
        render(<Badge>99+</Badge>);
        expect(screen.getByText("99+")).toHaveProp("numberOfLines", 1);
    });

    const tones: BadgeTone[] = [
        "neutral",
        "accent",
        "success",
        "info",
        "warning",
        "danger",
    ];

    it.each(tones)("renders without error for tone %s", (tone) => {
        render(<Badge tone={tone}>Label</Badge>);
        expect(screen.getByText("Label")).toBeTruthy();
    });

    it("renders the outlined variant without error", () => {
        render(<Badge variant="outlined">Label</Badge>);
        expect(screen.getByText("Label")).toBeTruthy();
    });

    it("renders the medium emphasis without error", () => {
        render(<Badge emphasis="medium">Label</Badge>);
        expect(screen.getByText("Label")).toBeTruthy();
    });
});
