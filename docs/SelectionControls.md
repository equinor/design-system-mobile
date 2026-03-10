# SelectionControls

The `SelectionControls` package provides interactive selection components for React Native, styled according to the EDS design system. It includes `Switch`, `Switch.Small`, and `Radio` components for toggling and single-choice selection.

<img src="/assets/images/SelectionControls.png" width="400" alt="SelectionControls"/>

## Components

### Switch

A toggle switch for binary on/off states.

```tsx
import { Switch } from "@equinor/eds-mobile-components";

<Switch
    active={isActive}
    onChange={setIsActive}
    color="primary"
    disabled={false}
/>;
```

#### Props

| Name       | Type                                 | Default     | Description                          |
| ---------- | ------------------------------------ | ----------- | ------------------------------------ |
| `active`   | boolean                              | `false`     | Whether the switch is on.            |
| `onChange` | (isActive: boolean) => void          |             | Callback when the switch is toggled. |
| `color`    | "primary" \| "secondary" \| "danger" | `"primary"` | Color theme of the switch.           |
| `disabled` | boolean                              | `false`     | If true, disables the switch.        |
| ...rest    | ViewProps                            |             | Additional props for the container.  |

### Switch.Small

A compact version of the switch, suitable for dense UIs.

```tsx
import { Switch } from "@equinor/eds-mobile-components";

<Switch.Small active={isActive} onChange={setIsActive} disabled={false} />;
```

#### Props

| Name       | Type                        | Default | Description                          |
| ---------- | --------------------------- | ------- | ------------------------------------ |
| `active`   | boolean                     | `false` | Whether the switch is on.            |
| `onChange` | (isActive: boolean) => void |         | Callback when the switch is toggled. |
| `disabled` | boolean                     | `false` | If true, disables the switch.        |
| ...rest    | ViewProps                   |         | Additional props for the container.  |

### Radio

A radio button for single-choice selection. Matches the EDS Figma design with accent color tokens.

```tsx
import { Radio } from "@equinor/eds-mobile-components";

<Radio
    checked={isChecked}
    onPress={setChecked}
    label="Option A"
    disabled={false}
/>;
```

#### Props

| Name       | Type                       | Default | Description                         |
| ---------- | -------------------------- | ------- | ----------------------------------- |
| `checked`  | boolean                    | `false` | Whether the radio is selected.      |
| `onPress`  | (checked: boolean) => void |         | Callback when the radio is pressed. |
| `label`    | string                     |         | Optional label next to the radio.   |
| `disabled` | boolean                    | `false` | If true, disables the radio.        |

## Features

- EDS theming for colors, spacing, and animation.
- Accessible with proper accessibility roles and states.
- Animated transitions for toggles.
- Disabled states.
- Light and dark mode support via design tokens.

## Theming & Styling

- Uses new EDS design tokens (`newColors`, `newSpacing`) for color and spacing.
- Radio uses custom drawn circles matching the Figma design.

## Accessibility

- All standard accessibility props for `Pressable` and `View` are supported.
- Visual and programmatic indication of state.

## Example

```tsx
<Switch active={enabled} onChange={setEnabled} />
<Switch.Small active={smallEnabled} onChange={setSmallEnabled} />
<Radio checked={selected} onPress={setSelected} label="Option" />
```

## Related

- [Paper](./Paper.md) – For the underlying surface.
- [EDS Theming](../README.md#theming)
