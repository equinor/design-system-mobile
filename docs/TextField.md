# TextField

The `TextField` component is a labeled input field for React Native, styled according to the EDS design system. It supports helper text, units, icons, and validation states, and is built on top of the EDS `Input` component.

<img src="/assets/images/TextField.png" width="400" alt="TextField"/>

## Usage

```tsx
import { TextField } from "@equinor/eds-mobile";

<TextField
  label="Username"
  placeholder="Enter your username"
  helperText="Required"
  inputIcon="account"
  variant="danger"
/>;
```

## Props

| Name         | Type                                                  | Default | Description                                         |
| ------------ | ----------------------------------------------------- | ------- | --------------------------------------------------- |
| `label`      | string                                                |         | Label text above the input field.                   |
| `meta`       | string                                                |         | Secondary label text (e.g., for status or info).    |
| `unit`       | string                                                |         | Unit label displayed inside the input on the right. |
| `helperText` | string                                                |         | Helper or error text below the input.               |
| `inputIcon`  | IconName                                              |         | Icon displayed inside the input on the right.       |
| `helperIcon` | IconName                                              |         | Icon displayed to the left of the helper text.      |
| ...rest      | InputProps (except `leftAdornment`, `rightAdornment`) |         | All other standard `Input` props.                   |

## Features

- Labeled input field with optional meta and unit.
- Helper text and icons for additional context or validation.
- EDS theming for colors, spacing, and validation states.
- Built on top of the EDS `Input` component.

## Theming & Styling

- Uses EDS tokens for spacing, colors, and typography.
- Validation states (`danger`, `warning`, `success`) are supported via the `variant` prop.

## Accessibility

- All standard accessibility props for `Input` and `Label` are supported.
- Helper text and icons are accessible.

## Example

```tsx
<TextField
  label="Email"
  placeholder="Enter your email"
  helperText="We'll never share your email."
  inputIcon="email"
  unit="@company.com"
/>
```

## Related

- [Input](./Input.md) – Underlying input component.
- [Icon](./Icon.md) – For input and helper icons.
- [Label](./Label.md) – For labeling and meta text.
- [EDS Theming](../README.md#theming)
