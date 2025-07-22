# Tabs

The `Tabs` component provides a horizontal navigation bar for switching between different views or content sections. It is styled according to the EDS design system and supports icons, disabled states, and scrollable or fixed layouts.

<img src="/assets/images/Tabs.png" width="400" alt="Tabs"/>

## Usage

```tsx
import { Tabs } from "@equinor/mad-components";

<Tabs initialActiveIndex={0}>
  <Tabs.Tab title="Home" iconName="home">
    <HomeScreen />
  </Tabs.Tab>
  <Tabs.Tab title="Profile" iconName="account">
    <ProfileScreen />
  </Tabs.Tab>
  <Tabs.Tab title="Settings" disabled>
    <SettingsScreen />
  </Tabs.Tab>
</Tabs>;
```

## Props

### Tabs Props

| Name                 | Type     | Default | Description                                                                |
| -------------------- | -------- | ------- | -------------------------------------------------------------------------- |
| `scrollable`         | boolean  | false   | If true, tabs are scrollable. If false, tabs are flexed to fit the screen. |
| `initialActiveIndex` | number   | 0       | Index of the initially active tab.                                         |
| `children`           | Tabs.Tab |         | Tab components as children.                                                |

### Tab Props

| Name       | Type      | Default | Description                                        |
| ---------- | --------- | ------- | -------------------------------------------------- |
| `title`    | string    | _(req)_ | The label for the tab.                             |
| `iconName` | IconName  |         | Optional icon to display to the left of the title. |
| `disabled` | boolean   | false   | If true, disables the tab.                         |
| `children` | ReactNode |         | Content to render when the tab is active.          |

## Features

- Horizontal navigation bar for switching between content.
- Supports icons and disabled tabs.
- Scrollable or fixed tab layouts.
- EDS theming for colors, spacing, and typography.
- Keyboard and accessibility friendly.

## Theming & Styling

- Uses EDS tokens for spacing, colors, and typography.
- Integrates with Icon, Typography, and PressableHighlight components.

## Accessibility

- All standard accessibility props for `Pressable` and `View` are supported.
- Active and disabled states are visually and programmatically indicated.

## Example

```tsx
<Tabs scrollable initialActiveIndex={1}>
  <Tabs.Tab title="Tab 1">Content 1</Tabs.Tab>
  <Tabs.Tab title="Tab 2" iconName="star">
    Content 2
  </Tabs.Tab>
  <Tabs.Tab title="Tab 3" disabled>
    Content 3
  </Tabs.Tab>
</Tabs>
```

## Related

- [Icon](./Icon.md) – For tab icons.
- [Typography](./Typography.md) – For tab labels.
- [EDS Theming](../README.md#theming)
