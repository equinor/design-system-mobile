# Popover

The `Popover` component displays floating content anchored to another element, styled according to the EDS design system. It is useful for tooltips, floating menus, and contextual overlays.

<img src="/assets/images/Popover.png" width="400" alt="Popover"/>

## Usage

```tsx
import { Popover } from "@equinor/eds-mobile-components";

const anchorRef = useRef<View>(null);

<Popover
  anchorEl={anchorRef}
  open={popoverOpen}
  onClose={() => setPopoverOpen(false)}
  placement="top"
>
  <Text>This is a popover!</Text>
</Popover>;
```

## Props

| Name        | Type                                    | Default | Description                                                        |
| ----------- | --------------------------------------- | ------- | ------------------------------------------------------------------ |
| `anchorEl`  | React.RefObject<View>                   | _(req)_ | Reference to the element the popover should appear around.         |
| `open`      | boolean                                 | _(req)_ | Whether the popover is open.                                       |
| `onClose`   | () => void                              |         | Callback invoked when the popover is closed (e.g., outside press). |
| `placement` | Placement (`@floating-ui/react-native`) | `"top"` | Position of the popover relative to the anchor.                    |
| ...rest     | ViewProps                               |         | Additional props for the popover content container.                |

## Theming & Styling

- Uses EDS tokens for background, border radius, and elevation.
- Includes an arrow pointing to the anchor element.
- Content is wrapped in a Paper component with `"overlay"` elevation.

## Accessibility

- The popover is rendered in a modal and supports outside press to close.
- All standard accessibility props for `View` are supported.

## Example

```tsx
<Popover
  anchorEl={anchorRef}
  open={popoverOpen}
  onClose={() => setPopoverOpen(false)}
  placement="bottom"
>
  <Text>Popover content</Text>
</Popover>
```

## Related

- [Menu](./Menu.md) – For contextual menus.
- [Paper](./Paper.md) – For the underlying surface.
- [EDS Theming](../README.md#theming)
