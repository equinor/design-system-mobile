# Label

The `Label` component is a simple text display used for showing primary and secondary information, such as field labels and meta descriptions. It is commonly used in form fields and UI elements to provide context or additional details.

## Props

| Name  | Type   | Description                                 |
| ----- | ------ | ------------------------------------------- |
| label | string | The primary text to display in the label.   |
| meta  | string | The secondary text to display in the label. |

Additionally, all props from `TypographyProps` are supported, allowing you to customize text appearance.

## Usage

```tsx
import { Label } from "@equinor/eds-mobile/components";

<Label label="Username" meta="Required" />;
```

## Example in TextField

The `Label` component is used within the `TextField` component to display the field label and meta information:

```tsx
<TextField label="Email" meta="Optional" />
```

## Features

- Supports primary and secondary text
- Inherits typography styling
- Used in form fields and other UI elements

## Accessibility

- Ensure labels are descriptive and provide context for input fields

## Related Components

- [TextField](./TextField.md)
- [Typography](./Typography.md)
