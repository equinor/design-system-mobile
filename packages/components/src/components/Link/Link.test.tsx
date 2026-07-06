import React from "react";
import { fireEvent, render, screen } from "test-utils";
import { Link } from "./index";

describe("Link", () => {
    it("renders the label", () => {
        render(<Link>Learn more</Link>);
        expect(screen.getByText("Learn more")).toBeTruthy();
    });

    it("calls onPress when pressed", () => {
        const onPress = jest.fn();
        render(<Link onPress={onPress}>Learn more</Link>);
        fireEvent.press(screen.getByRole("link"));
        expect(onPress).toHaveBeenCalledTimes(1);
    });

    it("exposes a link accessibility role", () => {
        render(<Link>Learn more</Link>);
        expect(screen.getByRole("link")).toBeTruthy();
    });

    it("does not render an external icon by default", () => {
        render(<Link>Learn more</Link>);
        expect(
            screen.UNSAFE_queryByProps({ name: "open-in-new" })
        ).toBeFalsy();
    });

    it("renders an external icon when external is true", () => {
        render(<Link external>Learn more</Link>);
        expect(
            screen.UNSAFE_getByProps({ name: "open-in-new" })
        ).toBeTruthy();
    });

    describe("inline variant", () => {
        it("renders the label", () => {
            render(<Link variant="inline">Learn more</Link>);
            expect(screen.getByText("Learn more")).toBeTruthy();
        });

        it("calls onPress when pressed", () => {
            const onPress = jest.fn();
            render(
                <Link variant="inline" onPress={onPress}>
                    Learn more
                </Link>
            );
            fireEvent.press(screen.getByRole("link"));
            expect(onPress).toHaveBeenCalledTimes(1);
        });

        it("renders an external icon when external is true", () => {
            render(
                <Link variant="inline" external>
                    Learn more
                </Link>
            );
            expect(
                screen.UNSAFE_getByProps({ name: "open-in-new" })
            ).toBeTruthy();
        });
    });
});
