# Dialog

The Dialog component displays important information or actions in a modal overlay. It is used for confirmations, alerts, forms, and other interactions that require user attention. The Dialog includes subcomponents for headers, custom content, and actions.

<img src="/assets/images/Dialog.png" width="400" alt="Dialog"/>

## Usage

```tsx
import { Dialog } from "@your-org/components";

<Dialog isOpen={isOpen} onScrimPress={onClose}>
    <Dialog.Header>Dialog Title</Dialog.Header>
    <Dialog.CustomContent>
        <Text>Dialog content goes here.</Text>
    </Dialog.CustomContent>
    <Dialog.Actions align="right">
        <Button title="Cancel" onPress={onClose} />
        <Button title="Confirm" onPress={onConfirm} />
    </Dialog.Actions>
</Dialog>;
```

## Props

### Dialog

| Name         | Type       | Default | Description                                                          |
| ------------ | ---------- | ------- | -------------------------------------------------------------------- |
| isOpen       | boolean    | —       | Controls whether the dialog is visible.                              |
| onScrimPress | () => void | —       | Called when the user taps outside the dialog (scrim).                |
| children     | ReactNode  | —       | Dialog content, usually includes Header, CustomContent, and Actions. |
| ...rest      | ViewProps  | —       | Any other props for the underlying Paper component.                  |

### Dialog.Header

| Name     | Type      | Description              |
| -------- | --------- | ------------------------ |
| children | ReactNode | The title of the dialog. |

### Dialog.CustomContent

| Name     | Type      | Description                 |
| -------- | --------- | --------------------------- |
| children | ReactNode | The main content of dialog. |

### Dialog.Actions

| Name     | Type              | Default | Description                             |
| -------- | ----------------- | ------- | --------------------------------------- |
| align    | "left" \| "right" | "left"  | Alignment of the action buttons.        |
| children | ReactNode         | —       | Action buttons (e.g., Cancel, Confirm). |

## Accessibility

- Dialogs trap focus and prevent interaction with the background.
- Use clear, descriptive titles and button labels.

## Related Components

- [Button](../Button.md)
- [Paper](../Paper.md)
- [Scrim](../Scrim.md)

## Additional Notes

- Use Dialogs for critical information, confirmations, or forms.
- Use Dialog.Actions for button alignment and grouping.
