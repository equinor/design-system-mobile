# Button

The Button component is a versatile interactive element used to trigger actions or submit forms. It supports multiple variants, color themes, icons, loading states, and can be grouped or toggled for advanced UI patterns.

<img src="/assets/images/Button.png" width="400" alt="Button"/>

## Usage

```tsx
import { Button } from "@your-org/components";

<Button title="Click me" onPress={() => alert("Clicked!")} />;

// With icon
<Button title="Save" iconName="save" iconPosition="leading" />;

// Outlined and danger variant
<Button title="Delete" color="danger" variant="outlined" />;

// Full width
<Button title="Continue" fullWidth />;

// Loading state
<Button title="Loading..." loading />;

// Button group
<Button.Group>
  <Button title="Left" />
  <Button title="Middle" />
  <Button title="Right" />
</Button.Group>

// Toggle button group
<Button.Toggle activeIndex={1}>
  <Button title="Option 1" />
  <Button title="Option 2" />
  <Button title="Option 3" />
</Button.Toggle>

// Icon button
<Button.Icon name="edit" onPress={() => alert("Edit")}/>
```

## Props

| Name         | Type                                   | Default     | Description                                            |
| ------------ | -------------------------------------- | ----------- | ------------------------------------------------------ |
| title        | string                                 | —           | Label text of the button.                              |
| color        | "primary" \| "secondary" \| "danger"   | "primary"   | Color theme of the button.                             |
| variant      | "contained" \| "outlined" \| "ghost"   | "contained" | Button style variant.                                  |
| disabled     | boolean                                | false       | Disables the button if true.                           |
| loading      | boolean                                | false       | Shows a loading indicator if true.                     |
| fullWidth    | boolean                                | false       | Makes the button take the full width of its container. |
| iconName     | IconName                               | —           | Name of the icon to display.                           |
| iconPosition | "leading" \| "trailing"                | "leading"   | Position of the icon relative to the label.            |
| onPress      | () => void                             | —           | Callback when the button is pressed.                   |
| onPressIn    | (event: GestureResponderEvent) => void | —           | Callback when the button is pressed in.                |
| onPressOut   | (event: GestureResponderEvent) => void | —           | Callback when the button is released.                  |
| ...rest      | ViewProps                              | —           | Any other props for the underlying View.               |

## Variants

- **Contained:** Solid background, primary action.
- **Outlined:** Transparent background, colored border.
- **Ghost:** Minimal, no border or background.

## Button Group

Use `Button.Group` to visually group buttons together. Use `Button.Toggle` for a group of buttons where only one can be active at a time.

<img src="/assets/images/ButtonGroup.png" width="400" alt="ButtonGroup"/>

## Icon Button

Use `Button.Icon` for icon-only buttons. Accepts all `IconButton` props.

## Accessibility

- Buttons are accessible by default and support keyboard and screen reader navigation.
- Use clear, descriptive titles for accessibility.

## Related Components

- [Icon](../Icon/Icon.md)
- [Button.Group](#button-group)
- [Button.Toggle](#button-group)
- [Button.Icon](#icon-button)

## Additional Notes

- Use the `loading` prop to indicate background activity.
- Use `disabled` to prevent user interaction.
- Combine with Button.Group or Button.Toggle for advanced layouts.
