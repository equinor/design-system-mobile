# PressableHighlight

The `PressableHighlight` component is a wrapper for pressable surfaces in React Native, providing a consistent highlight/fade animation on press, and handling disabled states in a way that prevents event capture.

## Usage

```tsx
import { PressableHighlight } from "@equinor/eds-mobile";

<PressableHighlight onPress={() => alert("Pressed!")}>
  <Text>Tap me</Text>
</PressableHighlight>;
```

## Props

| Name       | Type                 | Default | Description                                                            |
| ---------- | -------------------- | ------- | ---------------------------------------------------------------------- |
| `disabled` | boolean              | `false` | If true, disables the pressable and prevents all press events.         |
| `style`    | StyleProp<ViewStyle> |         | Custom style for the pressable container.                              |
| ...rest    | PressableProps       |         | All other standard React Native `Pressable` props (except `children`). |

## Features

- Provides a fade/highlight animation on press using EDS animation tokens.
- Prevents event capture when disabled (using a custom `DisabledPressable`).
- Accepts all standard `Pressable` props and children.
- Overlay animation is rendered above the content for visual feedback.

## Theming & Styling

- Uses EDS animation tokens for fade timing.
- Accepts custom styles via the `style` prop.

## Accessibility

- All standard accessibility props for `Pressable` and `View` are supported.
- Disabled state is visually and programmatically indicated.

## Example

```tsx
<PressableHighlight
  onPress={() => doSomething()}
  disabled={isDisabled}
  style={{ borderRadius: 8, backgroundColor: "#eee" }}
>
  <Text>Press me</Text>
</PressableHighlight>
```

## Related

- [EDS Theming](../README.md#theming)
- [Pressable (React Native)](https://reactnative.dev/docs/pressable)
