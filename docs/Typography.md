# Typography

The `Typography` component is the core text rendering element in the design system. It wraps React Native's `Text` and applies Equinor Design System (EDS) theming for font family, size, color, and style. This ensures consistent text appearance across all UI components.

## Props

| Name    | Type      | Description                                                          |
| ------- | --------- | -------------------------------------------------------------------- |
| group   | string    | Typography group (e.g., `basic`, `interactive`, `cell`, etc.).       |
| variant | string    | Typography variant within the group (e.g., `h1`, `label`, `button`). |
| color   | string    | Text color, supports EDS color tokens and custom colors.             |
| bold    | boolean   | Renders text in bold.                                                |
| italic  | boolean   | Renders text in italic.                                              |
| ref     | ref       | Reference to the native Text element.                                |
| ...rest | TextProps | All standard React Native `TextProps` are supported.                 |

## Usage

```tsx
import { Typography } from "@equinor/eds-mobile/components";

<Typography group="basic" variant="h1" color="primary" bold>
  Heading Text
</Typography>;
```

## Features

- EDS theming for font, size, color, and style
- Supports multiple typography groups and variants
- Bold and italic styling
- All standard React Native `TextProps`

## Where Typography is Used

The `Typography` component is used throughout the design system, including:

- `Label` (for field labels and meta text)
- `TextField` (for units and helper text)
- Cell components (`ButtonCell`, `SwitchCell`, `NavigationCell`, `CellGroup`, `CellSwipeItem`)
- Accordion components
- Chip components
- Button components
- Any component requiring styled text

## Accessibility

- Inherits accessibility features from React Native's `Text`
- Ensure text is readable and provides sufficient contrast

## Related Components

- [Label](./Label.md)
- [TextField](./TextField.md)
- [Button](./Button.md)
- [Cell](./Cell.md)
