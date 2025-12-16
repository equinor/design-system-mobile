# Input

The `Input` component is a styled text input field for React Native, supporting EDS theming, validation states, adornments, and both single-line and multi-line input.

<img src="/assets/images/Input.png" width="400" alt="Input"/>

## Usage

```tsx
import { Input } from "@equinor/eds-mobile-components";

<Input
  placeholder="Enter text"
  onChange={(text) => setValue(text)}
  leftAdornments={<Icon name="magnify" />}
  rightAdornments={<Icon name="close" />}
  variant="danger"
/>;
```

## Props

| Name              | Type                                                           | Default | Description                                            |
| ----------------- | -------------------------------------------------------------- | ------- | ------------------------------------------------------ |
| `onChange`        | (contents: string) => void                                     |         | Callback invoked when the text changes.                |
| `multiline`       | boolean                                                        | `false` | If true, allows multiple lines of input.               |
| `placeholder`     | string                                                         |         | Placeholder text when the input is empty.              |
| `leftAdornments`  | ReactNode                                                      |         | Component(s) rendered to the left of the input field.  |
| `rightAdornments` | ReactNode                                                      |         | Component(s) rendered to the right of the input field. |
| `variant`         | "danger" \| "warning" \| "success"                             |         | Validation state for the input (affects border color). |
| `readOnly`        | boolean                                                        | `false` | If true, disables editing.                             |
| ...rest           | TextInputProps (except `onChange`, `onChangeText`, `readOnly`) |         | All other standard React Native `TextInput` props.     |

## Theming & Styling

- Uses EDS tokens for colors, spacing, and typography.
- Border color and style adapt to focus, validation state, and read-only mode.
- Placeholder color uses EDS tertiary text color.
- Adornments can be used to add icons or other elements inside the input.

## Accessibility

- All standard `TextInput` accessibility props are supported.
- Adornments should be accessible if they are interactive.

## Example

```tsx
<Input
  placeholder="Email"
  leftAdornments={<Icon name="email" />}
  variant="success"
  autoCapitalize="none"
/>
```

## Related

- [TextField](./TextField.md) – For labeled input fields with validation and helper text.
- [EDS Theming](../README.md#theming)
