# Design System Mobile

Welcome to the Design System Mobile project! This monorepo contains a set of reusable components and utilities for building consistent mobile user interfaces.

## Project Structure

- **/apps**: Contains application projects (e.g., documentation site, web app).
- **/packages/components**: Core component library with reusable UI components, hooks, and styling utilities.
- **/scripts**: Utility scripts for project maintenance.

## Packages

### components

Reusable React Native components, hooks, and utilities for mobile UI development.

- Located in `packages/components`
- Includes: Accordion, Autocomplete, Button, Dialog, Icon, Input, Menu, Tabs, Typography, and more.

For detailed component documentation, see the files in this `/docs` folder or the README in each package.

This is a library of EDS components for React Native. Using this library should feel similar as for
[EDS for React](https://www.npmjs.com/package/@equinor/eds-core-react).

## 🧑‍🏫 How to use

### Installation

---

#### **_NOTE:_**

THIS LIBRARY IS NOT YET AVAILABLE FOR USE.

The component library requires the following libraries to properly function:

- [`react-native-svg`](https://github.com/software-mansion/react-native-svg#installation)
- [`react-native-reanimated`](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation)
- [`react-native-gesture-handler`](https://docs.swmansion.com/react-native-gesture-handler/docs/installation/)

Please make sure to follow these installation instructions before using this package.

### Getting started

Before using the components in your app, make sure to load the fonts and assets required by the
library somewhere in your root component. It is also recommended that you wrap your app in the
`EDSProvider`. This will give you access to dynamically switching between `tablet` and `phone` mode
as well as `dark` and `light` mode support:

```tsx
export default function App() {
  const [hasLoadedEds, edsLoadError] = useEDS();
  if (!hasLoadedEds) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <EDSProvider colorScheme="light" density="phone">
          <Navigation colorScheme="light" />
          <StatusBar />
        </EDSProvider>
      </SafeAreaProvider>
    );
  }
}
```

### 🖼️ Theming

Creating stylesheets that use EDS values is made to be easy and performant. Start by creating a
`EDSStyleSheet`, almost just like for a normal React Native StyleSheet:

```tsx
const themeStyles = EDSStyleSheet.create((theme) => ({
  container: {
    backgroundColor: theme.colors.container.background,
    borderRadius: theme.geometry.border.containerBorderRadius,
  },
}));
```

Notice that we pass `theme` into our style sheet. This is a resolved token based on the current
configuration of the app. This means that the value for `theme.colors.container` can change between
light/dark mode without you having to worry about anything 😎

We resolve our stylesheet in our components using the provided `useStyles` hook:

```tsx
const MyComponent = () => {
  const styles = useStyles(themeStyles);
  return <View style={styles.container} />;
};
```

Ideally, all styling, be it conditional or not should happen outside of our components to reduce
clutter. The `EDSStyleSheet.create` callback method accepts a second optional argument which allows
you to pass any additional props into the style sheet:

```tsx
// Notice that we type our second argument!
const themeStylesWithProps = EDSStyleSheet.create(
  (theme, props: { color?: string }) => {
    const backgroundColor = color ?? theme.colors.container.background;

    return {
      container: {
        backgroundColor,
      },
    };
  }
);
```

We are then required by our `useStyle` hook to pass these props in with the `EDSStyleSheet`:

```tsx
const MyOtherComponent = () => {
  // Normally you'd pass some of your component props into this hook.
  const styles = useStyles(themeStylesWithProps, { color: "red" });
  return <View style={styles.container} />;
};
```

## Contributing

- Please read the [CODE_OF_CONDUCT.md](../packages/components/CODE_OF_CONDUCT.md) before contributing.
- Open issues or pull requests for bugs, features, or improvements.

## License

This project is licensed under the [MIT License](../LICENSE).

---
