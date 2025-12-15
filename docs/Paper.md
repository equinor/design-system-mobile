# Paper

The `Paper` component provides a surface with elevation and background styling, following the EDS design system. It is used to create visual separation and depth in your UI.

<img src="/assets/images/Paper.png" width="400" alt="Paper"/>

## Usage

```tsx
import { Paper } from "@equinor/eds-mobile";

<Paper elevation="temporaryNav">
  <Text>Content goes here</Text>
</Paper>;
```

## Props

| Name        | Type      | Default  | Description                                               |
| ----------- | --------- | -------- | --------------------------------------------------------- |
| `elevation` | Elevation | `"none"` | The elevation level, which affects shadow and background. |
| ...rest     | ViewProps |          | All other standard React Native `View` props.             |

### Elevation

The `elevation` prop controls the shadow and background color. Available values are defined by the EDS design system, such as:

- `"none"`
- `"temporaryNav"`
- `"modal"`
- `"card"`
- (See your project's EDS tokens for the full list.)

## Theming & Styling

- Uses EDS tokens for background color and shadow based on the `elevation` prop.
- Accepts all standard `View` styling and props.

## Accessibility

- The `Paper` component is a simple container and supports all accessibility props from `View`.

## Example

```tsx
<Paper elevation="card" style={{ margin: 16 }}>
  <Text>Card content</Text>
</Paper>
```

## Related

- [EDS Theming](../README.md#theming)
- [View (React Native)](https://reactnative.dev/docs/view)
