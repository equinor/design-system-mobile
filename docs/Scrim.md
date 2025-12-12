# Scrim

The `Scrim` component provides a semi-transparent overlay that is used to obscure the background and focus the user's attention on foreground content, such as dialogs or modals. It is styled according to the EDS design system and is used internally by the `Dialog` component.

## Usage

```tsx
import { Scrim } from "@equinor/design-system-mobile-components";

<Scrim isOpen={isOpen} onPress={handleClose}>
  {/* Foreground content, e.g., a dialog */}
</Scrim>;
```

## Props

| Name       | Type       | Default | Description                                                         |
| ---------- | ---------- | ------- | ------------------------------------------------------------------- |
| `isOpen`   | boolean    |         | Whether the scrim is visible.                                       |
| `onPress`  | () => void |         | Callback when the scrim surface is pressed (e.g., to close dialog). |
| `children` | ReactNode  |         | Content to render above the scrim (centered).                       |

## Features

- Provides a dimmed background overlay.
- Handles safe area insets and centers children.
- Animates appearance/disappearance using EDS animation tokens.
- **Used by the `Dialog` component** to obscure the background and capture outside presses.

## Theming & Styling

- Uses EDS tokens for background color and spacing.
- Fills the entire screen and centers its children.

## Accessibility

- All standard accessibility props for `Pressable` and `SafeAreaView` are supported.
- Ensures that background content is not interactable when open.

## Example

```tsx
<Scrim isOpen={showDialog} onPress={() => setShowDialog(false)}>
  <Dialog>Dialog content</Dialog>
</Scrim>
```

## Related

- [Dialog](./Dialog.md) – Uses Scrim to provide a modal overlay.
- [Portal](./Portal.md) – For rendering overlays above the app.
- [EDS Theming](../README.md#theming)
