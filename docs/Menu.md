# Menu

The `Menu` component provides a floating contextual menu for React Native, styled according to the EDS design system. It supports custom placement, keyboard and touch interaction, and menu items with icons, active/disabled states, and more.

<img src="/assets/images/Menu.png" width="400" alt="Menu"/>

## Usage

```tsx
import { Menu } from "@equinor/eds-mobile";

const anchorRef = useRef<View>(null);

<Menu
  anchorEl={anchorRef}
  open={menuOpen}
  onClose={() => setMenuOpen(false)}
  placement="bottom"
>
  <Menu.Item title="Edit" iconName="pencil" onPress={handleEdit} />
  <Menu.Item
    title="Delete"
    iconName="delete"
    variant="danger"
    onPress={handleDelete}
  />
</Menu>;
```

## Menu Props

| Name        | Type                                    | Default    | Description                                             |
| ----------- | --------------------------------------- | ---------- | ------------------------------------------------------- |
| `anchorEl`  | React.MutableRefObject<View \| null>    | _(req)_    | Reference to the element the menu should appear around. |
| `open`      | boolean                                 | _(req)_    | Whether the menu is open.                               |
| `onClose`   | () => void                              | _(req)_    | Callback invoked when the menu is closed.               |
| `placement` | Placement (`@floating-ui/react-native`) | `"bottom"` | Position of the menu relative to the anchor.            |
| ...rest     | ViewProps                               |            | Additional props for the menu container.                |

## Menu.Item Props

| Name               | Type       | Default | Description                                        |
| ------------------ | ---------- | ------- | -------------------------------------------------- |
| `title`            | string     | _(req)_ | The text label for the menu item.                  |
| `active`           | boolean    | `false` | If true, highlights the item as active.            |
| `disabled`         | boolean    | `false` | If true, disables the item.                        |
| `onPress`          | () => void |         | Callback when the item is pressed.                 |
| `closeMenuOnClick` | boolean    | `true`  | If true, closes the menu when the item is pressed. |
| `iconName`         | IconName   |         | Name of the icon to display next to the item.      |

## Theming & Styling

- Uses EDS tokens for colors, spacing, and border radius.
- Menu and items are styled for active, disabled, and default states.
- Supports icons via the `iconName` prop on `Menu.Item`.

## Accessibility

- Menu and items are accessible and support keyboard and screen reader navigation.
- Disabled items are not focusable or clickable.

## Example

```tsx
<Menu anchorEl={anchorRef} open={menuOpen} onClose={() => setMenuOpen(false)}>
  <Menu.Item title="Profile" iconName="account" onPress={goToProfile} />
  <Menu.Item title="Logout" iconName="logout" onPress={logout} />
</Menu>
```

## Related

- [Popover](./Popover.md) – For more generic floating content.
- [Icon](./Icon.md) – For icon names used in menu items.
- [EDS Theming](../README.md#theming)
