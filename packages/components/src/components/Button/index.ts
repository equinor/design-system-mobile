import { Button as _Button, ButtonProps } from "./Button";
import { ButtonGroup, ButtonGroupProps } from "./ButtonGroup";
import { IconButton, IconButtonProps } from "./IconButton";
import { ToggleButton, ToggleButtonProps } from "./ToggleButton";

type ExtendedButton = typeof _Button & {
    /**
     * A container for grouping buttons. The child buttons of this container visually clump together.
     */
    Group: typeof ButtonGroup;
    /**
     * A container for grouping toggled buttons. Similar to `Button.Group`, but allows for binary choice.
     */
    Toggle: typeof ToggleButton;
    /**
     * A small icon-only variant of the button.
     */
    Icon: typeof IconButton;
};

const Button = _Button as ExtendedButton;
Button.Group = ButtonGroup;
Button.Toggle = ToggleButton;
Button.Icon = IconButton;

export { Button };
export type {
    ButtonGroupProps, ButtonProps, IconButtonProps, ToggleButtonProps
};

