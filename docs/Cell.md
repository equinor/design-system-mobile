# Cell

The Cell component is a flexible container used to display content in a list or grouped layout. It supports left and right adornments, swipe actions, pressable behavior, and can be grouped for advanced UI patterns. Cells are commonly used for list items, settings, and navigation menus.

<img src="/assets/images/Cell.png" width="400" alt="Cell"/>

## Usage

```tsx
import { Cell } from "@your-org/components";

<Cell onPress={() => alert("Pressed!")}>Title or content here</Cell>;

// With left and right adornments
<Cell leftAdornment={<Icon name="star" />} rightAdornment={<Icon name="chevron-right" />}>Item</Cell>

// With swipe actions
<Cell
  leftSwipeGroup={[{ title: "Edit", iconName: "edit", onPress: () => alert("Edit") }]}
  rightSwipeGroup={[{ title: "Delete", iconName: "delete", onPress: () => alert("Delete") }]}
>
  Swipe me left or right
</Cell>

// With additional surface
<Cell
  additionalSurface={{ component: <Icon name="info" />, onPress: () => alert("Info") }}
>
  With extra touchable area
</Cell>
```

## Props

| Name              | Type                                   | Default | Description                                   |
| ----------------- | -------------------------------------- | ------- | --------------------------------------------- |
| leftAdornment     | ReactNode                              | —       | Component to display on the left side.        |
| rightAdornment    | ReactNode                              | —       | Component to display on the right side.       |
| leftSwipeGroup    | CellSwipeItemProps[]                   | —       | Items to show when swiping the cell right.    |
| rightSwipeGroup   | CellSwipeItemProps[]                   | —       | Items to show when swiping the cell left.     |
| additionalSurface | { component: ReactNode, onPress?: fn } | —       | Extra touchable area to the left of the cell. |
| onPress           | () => void                             | —       | Callback when the cell is pressed.            |
| ...rest           | ViewProps                              | —       | Any other props for the underlying View.      |

## Swipe Actions

Use `leftSwipeGroup` and `rightSwipeGroup` to add swipeable actions to your cell. Each swipe item can have a title, icon, color, and onPress handler.

<img src="/assets/images/CellSwipe.png" width="400" alt="Cell Swipe"/>

## Grouping

Cells can be grouped using the `CellGroup` component for visual separation and section titles.

```tsx
import { Cell, CellGroup } from "@your-org/components";

<CellGroup title="Settings">
    <Cell>Profile</Cell>
    <Cell>Notifications</Cell>
</CellGroup>;
```

## ButtonCell

A specialized cell for button-like actions, with support for icons, color, and description.

<img src="/assets/images/ButtonCell.png" width="400" alt="Button Cell"/>

```tsx
import { ButtonCell } from "@your-org/components";

<ButtonCell
    title="Delete"
    description="Remove this item"
    iconName="delete"
    color="danger"
    onPress={() => alert("Deleted!")}
/>;
```

### ButtonCell Props

| Name        | Type                                                 | Default   | Description                             |
| ----------- | ---------------------------------------------------- | --------- | --------------------------------------- |
| title       | string                                               | _(req)_   | Title of the button cell.               |
| description | string                                               |           | Description shown under the title.      |
| iconName    | IconName                                             |           | Icon to display on the left.            |
| color       | "primary" \| "danger" \| "warning" \| "textDisabled" | "primary" | Color of the button/icon.               |
| onPress     | () => void                                           |           | Callback when pressed.                  |
| disabled    | boolean                                              | false     | If true, disables the cell.             |
| ...rest     | CellProps                                            |           | All other Cell props except adornments. |

## SwitchCell

A cell with a switch control on the right, for toggling settings.

<img src="/assets/images/SwitchCell.png" width="400" alt="Switch Cell"/>

```tsx
import { SwitchCell } from "@your-org/components";

<SwitchCell
    title="Enable notifications"
    isActive={enabled}
    onChange={setEnabled}
    iconName="bell"
    color="textPrimary"
/>;
```

### SwitchCell Props

| Name        | Type                      | Default | Description                             |
| ----------- | ------------------------- | ------- | --------------------------------------- |
| title       | string                    | _(req)_ | Title of the switch cell.               |
| description | string                    |         | Description shown under the title.      |
| iconName    | IconName                  |         | Icon to display on the left.            |
| color       | string                    |         | Color of the icon.                      |
| isActive    | boolean                   | _(req)_ | Whether the switch is on.               |
| onChange    | (active: boolean) => void | _(req)_ | Callback when the switch is toggled.    |
| switchSize  | "small" \| "normal"       | "small" | Size of the switch.                     |
| disabled    | boolean                   | false   | If true, disables the cell and switch.  |
| ...rest     | CellProps                 |         | All other Cell props except adornments. |

## Accessibility

- Cells are accessible by default and support keyboard and screen reader navigation.
- Use clear, descriptive content for accessibility.

## Related Components

- [Icon](../Icon/Icon.md)
- [CellGroup](../Cell/CellGroup.md)
- [ButtonCell](../Cell/ButtonCell.md)
- [SwitchCell](../Cell/SwitchCell.md)

## Additional Notes

- Use Cells for list items, settings, and navigation menus.
- Combine with swipe actions and adornments for richer interactions.
