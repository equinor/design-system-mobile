import React from "react";
import { fireEvent, render, screen } from "test-utils";
import { Button } from "./index";

describe("Button", () => {
    it("renders the label", () => {
        render(<Button label="Save" />);
        expect(screen.getByText("Save")).toBeTruthy();
    });

    it("calls onPress when pressed", () => {
        const onPress = jest.fn();
        render(<Button label="Save" onPress={onPress} />);
        fireEvent.press(screen.getByRole("button"));
        expect(onPress).toHaveBeenCalledTimes(1);
    });

    it("does not call onPress when disabled", () => {
        const onPress = jest.fn();
        render(<Button label="Save" onPress={onPress} disabled />);
        fireEvent.press(screen.getByRole("button"));
        expect(onPress).not.toHaveBeenCalled();
    });

    it("exposes disabled state to assistive technology", () => {
        render(<Button label="Save" disabled />);
        expect(screen.getByRole("button")).toBeDisabled();
    });

    it("renders a leading and trailing icon when provided", () => {
        render(
            <Button
                label="Save"
                leadingIcon="content-save"
                trailingIcon="chevron-right"
            />
        );
        expect(
            screen.UNSAFE_getByProps({ name: "content-save" })
        ).toBeTruthy();
        expect(
            screen.UNSAFE_getByProps({ name: "chevron-right" })
        ).toBeTruthy();
    });
});

describe("Button.Icon", () => {
    it("renders the given icon", () => {
        render(<Button.Icon name="close" accessibilityLabel="Close" />);
        expect(screen.UNSAFE_getByProps({ name: "close" })).toBeTruthy();
    });

    it("calls onPress when pressed", () => {
        const onPress = jest.fn();
        render(
            <Button.Icon
                name="close"
                accessibilityLabel="Close"
                onPress={onPress}
            />
        );
        fireEvent.press(screen.getByRole("button"));
        expect(onPress).toHaveBeenCalledTimes(1);
    });

    it("does not call onPress when disabled", () => {
        const onPress = jest.fn();
        render(
            <Button.Icon
                name="close"
                accessibilityLabel="Close"
                onPress={onPress}
                disabled
            />
        );
        fireEvent.press(screen.getByRole("button"));
        expect(onPress).not.toHaveBeenCalled();
    });
});
