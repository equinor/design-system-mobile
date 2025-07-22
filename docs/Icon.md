# Icon

The `Icon` component provides access to the [MaterialCommunityIcons](https://icons.expo.fyi/Index?searchType=MaterialCommunityIcons) icon set for use in your React Native application, styled according to the EDS design system. IN the future, EDS hopes to create its own icons.

## Usage

```tsx
import { Icon } from "@equinor/mad-components";

<Icon name="home" size={24} color="primary" />;
```

## Props

| Name    | Type   | Default                              | Description                                                                 |
| ------- | ------ | ------------------------------------ | --------------------------------------------------------------------------- |
| `name`  | string | _(required)_                         | The name of the icon (must be a valid MaterialCommunityIcons glyph name).   |
| `size`  | number | `token.geometry.dimension.icon.size` | The size of the icon in pixels. Uses EDS token size by default.             |
| `color` | Color  | `"textPrimary"`                      | The color of the icon. Accepts EDS color tokens or custom colors.           |
| ...rest | any    |                                      | Any additional props supported by `MaterialCommunityIcons` and `TextProps`. |

## Theming

- The icon size and color are automatically themed using EDS tokens via the `useToken` hook.
- The `color` prop can be any EDS color token or a custom color string.

## Accessibility

- The `Icon` component passes all additional props to the underlying `MaterialCommunityIcons` component, including accessibility props from `TextProps`.

## Example

```tsx
<Icon
  name="account"
  size={32}
  color="secondary"
  accessibilityLabel="User account"
/>
```

## Related

- [MaterialCommunityIcons glyph map](https://icons.expo.fyi/Index?searchType=MaterialCommunityIcons)
- [EDS Theming](../README.md#theming)
