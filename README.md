# EDS Mobile — Equinor Design System for React Native

[![npm version](https://img.shields.io/npm/v/@equinor/eds-mobile-components)](https://www.npmjs.com/package/@equinor/eds-mobile-components)
[![license](https://img.shields.io/npm/l/@equinor/eds-mobile-components)](./LICENSE)

A React Native component library implementing the [Equinor Design System](https://eds.equinor.com/). Build consistent mobile experiences that match Equinor's design language.

## Packages

| Package                                                 | Description            |
| ------------------------------------------------------- | ---------------------- |
| [@equinor/eds-mobile-components](./packages/components) | Core component library |

## Apps

| App                           | Description                        |
| ----------------------------- | ---------------------------------- |
| [storybook](./apps/storybook) | Interactive component showcase app |

## Quick Start

### Install the component library

```bash
pnpm add @equinor/eds-mobile-components
```

### Peer dependencies

```bash
pnpm add expo-font react-native-gesture-handler react-native-reanimated react-native-svg
```

Follow the installation guides for each:

- [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/installation/)
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/)
- [react-native-svg](https://github.com/software-mansion/react-native-svg#installation)

### Basic usage

Wrap your app in `EDSProvider` and load fonts with `useEDS`:

```tsx
import { EDSProvider, useEDS } from "@equinor/eds-mobile-components";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
    const [hasLoadedEds, edsLoadError] = useEDS();

    if (!hasLoadedEds) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <EDSProvider colorScheme="light" density="comfortable">
                <YourApp />
            </EDSProvider>
        </SafeAreaProvider>
    );
}
```

## Components

The library includes 25+ components:

| Category       | Components                                                                      |
| -------------- | ------------------------------------------------------------------------------- |
| **Layout**     | Paper, Spacer, Scrim                                                            |
| **Inputs**     | Button, TextField, Input, Search, Select, Autocomplete, SelectionControls, Chip |
| **Feedback**   | Dialog, Progress, ProgressIndicator, OfflineBanner                              |
| **Navigation** | Tabs, Menu, Accordion, Cell                                                     |
| **Display**    | Typography, Icon, Label, Popover, Environment                                   |
| **Utilities**  | EDSProvider, Portal, ErrorBoundary, PressableHighlight                          |

## Theming

Create theme-aware stylesheets with `EDSStyleSheet`:

```tsx
import { EDSStyleSheet, useStyles } from "@equinor/eds-mobile-components";

const themeStyles = EDSStyleSheet.create((theme) => ({
    container: {
        backgroundColor: theme.colors.container.background,
        borderRadius: theme.geometry.border.containerBorderRadius,
    },
}));

const MyComponent = () => {
    const styles = useStyles(themeStyles);
    return <View style={styles.container} />;
};
```

Styles automatically adapt to light/dark mode and comfortable/spacious density.

### Conditional styling with props

```tsx
const themeStyles = EDSStyleSheet.create(
    (theme, props: { highlight?: boolean }) => ({
        container: {
            backgroundColor: props.highlight
                ? theme.colors.interactive.primary
                : theme.colors.container.background,
        },
    })
);

const MyComponent = ({ highlight }: { highlight?: boolean }) => {
    const styles = useStyles(themeStyles, { highlight });
    return <View style={styles.container} />;
};
```

---

## Development

This monorepo uses [pnpm](https://pnpm.io/) and [Turborepo](https://turbo.build/).

### Prerequisites

- [Node.js](https://nodejs.org/) v22 or higher
- [pnpm](https://pnpm.io/) v10 or higher
- For iOS: [Xcode](https://developer.apple.com/xcode/) and CocoaPods
- For Android: [Android Studio](https://developer.android.com/studio)

### Setup

```bash
# Clone the repository
git clone https://github.com/equinor/design-system-mobile.git
cd design-system-mobile

# Install dependencies
pnpm install

# Build the component library
pnpm build
```

### Scripts

| Command               | Description                             |
| --------------------- | --------------------------------------- |
| `pnpm install`        | Install all dependencies                |
| `pnpm build`          | Build all packages                      |
| `pnpm dev:storybook`  | Run the storybook app                   |
| `pnpm dev:components` | Watch mode for component library        |
| `pnpm lint`           | Run ESLint                              |
| `pnpm format`         | Format code with Prettier               |
| `pnpm clean`          | Remove build artifacts and node_modules |

### Project structure

```
design-system-mobile/
├── apps/
│   └── storybook/          # Expo app showcasing components
├── packages/
│   ├── components/         # @equinor/eds-mobile-components
│   ├── eslint-config-eds-mobile/  # Shared ESLint config
│   └── tsconfig/           # Shared TypeScript config
├── docs/                   # Component documentation (MkDocs)
└── scripts/                # Maintenance scripts
```

### Running the storybook app

```bash
# Build components first
pnpm build

# Start the storybook app
pnpm dev:storybook

# For iOS, install pods (first time only)
cd apps/storybook/ios && pod install
```

## Documentation

- [Component documentation](./docs/) — Detailed docs for each component
- [Storybook app](./apps/storybook/) — Interactive examples
- [Equinor Design System](https://eds.equinor.com/) — Design guidelines

## Contributing

We welcome contributions! Please read our [Code of Conduct](./packages/components/CODE_OF_CONDUCT.md) before contributing.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](./LICENSE).
