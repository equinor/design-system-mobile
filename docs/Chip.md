# Chip

The Chip component is a compact, interactive element used to display information, make selections, filter content, or trigger actions. Chips can show a label, optional icon, and a delete button, and support different visual variants.

<img src="/assets/images/Chip.png" width="400" alt="Chip"/>

## Usage

```tsx
import { Chip } from "@your-org/components";

<Chip title="Label" />;

// With icon
<Chip title="Info" iconName="info" />;

// Active variant
<Chip title="Active" variant="active" />;

// Error variant
<Chip title="Error" variant="error" />;

// Deletable chip
<Chip title="Removable" onDelete={() => alert("Deleted!")} />;

// Pressable chip
<Chip title="Press me" onPress={() => alert("Pressed!")} />;
```

## Props

| Name     | Type                             | Default   | Description                                           |
| -------- | -------------------------------- | --------- | ----------------------------------------------------- |
| title    | string                           | —         | Text to render in the chip.                           |
| variant  | "default" \| "error" \| "active" | "default" | Visual style of the chip.                             |
| disabled | boolean                          | false     | If true, disables the chip.                           |
| onPress  | () => void                       | —         | Callback when the chip is pressed.                    |
| onDelete | () => void                       | —         | Callback when the delete button is pressed.           |
| iconName | IconName                         | —         | Optional icon to render on the left side of the chip. |

## Variants

- **default:** Standard chip for displaying information or tags.
- **active:** Highlights the chip as selected or active.
- **error:** Indicates an error or invalid state.

## Accessibility

- Chips are accessible by default and support keyboard and screen reader navigation.
- Use clear, descriptive titles for accessibility.

## Related Components

- [Icon](../Icon/Icon.md)

## Additional Notes

- Use chips for tags, filters, selections, or compact actions.
- Combine with icons and delete actions for richer interactions.
