# Select

The `Select` component provides a dropdown menu for selecting a single value, and `Select.Multi` allows for multiple selections. Both are styled according to the EDS design system and support icons, validation, and custom rendering.

<img src="/assets/images/Select.png" width="400" alt="Select"/>

## Usage

### Single Select

```tsx
import { Select } from "@equinor/eds-mobile-components";

const items = [
  { title: "Option 1", value: "1" },
  { title: "Option 2", value: "2", icon: "star" },
];

<Select
  items={items}
  selectedItem={selected}
  onSelect={setSelected}
  placeholder="Choose an option"
/>;
```

### Multi Select

```tsx
<Select.Multi
  items={items}
  selectedItems={selectedItems}
  onSelect={setSelectedItems}
  placeholder="Choose options"
/>
```

## Props

### Select Props

| Name           | Type                               | Default | Description                                      |
| -------------- | ---------------------------------- | ------- | ------------------------------------------------ |
| `items`        | SelectItem<T>[]                    | _(req)_ | Array of selectable items.                       |
| `selectedItem` | T \| undefined                     |         | The currently selected value.                    |
| `onSelect`     | (value: T \| undefined) => void    | _(req)_ | Callback when an item is selected or deselected. |
| `placeholder`  | string                             |         | Placeholder text when nothing is selected.       |
| `disabled`     | boolean                            |         | If true, disables the select.                    |
| `readOnly`     | boolean                            |         | If true, makes the select read-only.             |
| `variant`      | "danger" \| "warning" \| "success" |         | Validation state.                                |

### Select.Multi Props

| Name            | Type                               | Default | Description                                     |
| --------------- | ---------------------------------- | ------- | ----------------------------------------------- |
| `items`         | SelectItem<T>[]                    | _(req)_ | Array of selectable items.                      |
| `selectedItems` | T[]                                |         | The currently selected values.                  |
| `onSelect`      | (value: T[]) => void               | _(req)_ | Callback when items are selected or deselected. |
| `placeholder`   | string                             |         | Placeholder text when nothing is selected.      |
| `disabled`      | boolean                            |         | If true, disables the select.                   |
| `readOnly`      | boolean                            |         | If true, makes the select read-only.            |
| `variant`       | "danger" \| "warning" \| "success" |         | Validation state.                               |

### SelectItem

| Name    | Type     | Description                                 |
| ------- | -------- | ------------------------------------------- |
| `title` | string   | Display text for the item.                  |
| `value` | T        | Value for the item.                         |
| `icon`  | IconName | Optional icon to display next to the title. |

## Features

- Single and multi-select dropdowns.
- EDS theming for colors, spacing, and icons.
- Supports icons for each item.
- Validation states (`danger`, `warning`, `success`).
- Read-only and disabled modes.
- Keyboard and accessibility friendly.

## Theming & Styling

- Uses EDS tokens for spacing, colors, and icons.
- Integrates with Menu, Icon, and Typography components.

## Accessibility

- All standard accessibility props for `Pressable` and `Menu` are supported.
- Selected and active items are visually and programmatically indicated.

## Example

```tsx
const items = [
  { title: "Apple", value: "apple", icon: "apple" },
  { title: "Banana", value: "banana", icon: "food-apple" },
];

<Select
  items={items}
  selectedItem={selected}
  onSelect={setSelected}
  placeholder="Choose a fruit"
/>;
```

## Related

- [Menu](./Menu.md) – Underlying dropdown menu.
- [Icon](./Icon.md) – For item icons.
- [EDS Theming](../README.md#theming)
