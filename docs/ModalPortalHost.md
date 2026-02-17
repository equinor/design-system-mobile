# ModalPortalHost

The `ModalPortalHost` component provides a portal context for use within React Native modals. It enables components like `Popover`, `Menu`, and `Dialog` to render correctly inside native modal screens.

## Problem

When using Portal-based components (Popover, Menu, Dialog, etc.) inside React Native modals (such as navigation modals), the portal content fails to render. This is because portals cannot render outside the modal's rendering tree boundary, and by default, these components try to render into the root portal host which exists outside the modal.

## Solution

`ModalPortalHost` creates a new portal context scope within your modal, providing local "root" and "scrim" portal hosts that Portal-based components can render into.

## Usage

Wrap your modal content with `ModalPortalHost`:

```tsx
import { Modal } from 'react-native';
import { ModalPortalHost, Menu, Popover } from '@equinor/eds-mobile-components';

const MyModalScreen = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const anchorRef = useRef<View>(null);

  return (
    <Modal visible={isVisible}>
      <ModalPortalHost>
        <View style={{ flex: 1 }}>
          <Text>Modal Content</Text>

          <View ref={anchorRef}>
            <Button onPress={() => setMenuOpen(true)}>
              Open Menu
            </Button>
          </View>

          <Menu
            anchorEl={anchorRef}
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
          >
            <Menu.Item onPress={() => console.log('Item 1')}>
              Item 1
            </Menu.Item>
          </Menu>
        </View>
      </ModalPortalHost>
    </Modal>
  );
};
```

## With React Navigation Modals

When using React Navigation with modal presentation, wrap your modal screen content:

```tsx
// In your modal screen component
import { ModalPortalHost } from '@equinor/eds-mobile-components';

const MyModalScreenComponent = () => {
  return (
    <ModalPortalHost>
      <View style={{ flex: 1 }}>
        {/* Your modal screen content */}
        {/* Popover, Menu, Dialog, etc. will work here */}
      </View>
    </ModalPortalHost>
  );
};
```

## Props

| Name     | Type      | Default | Description                                      |
| -------- | --------- | ------- | ------------------------------------------------ |
| ...rest  | ViewProps |         | Standard View props passed to the root container |

## Affected Components

The following components require `ModalPortalHost` when used inside modals:

- `Popover`
- `Menu`
- `Dialog` (including `Dialog.alert()`, `Dialog.confirm()`, etc.)
- `Scrim`
- Any custom component using `Portal` or `RootModal`

## How It Works

`ModalPortalHost` internally:
1. Creates a new `PortalProvider` context
2. Renders both `Portal.Host` for "root" and "scrim"
3. Allows Portal-based components to find and render into the nearest available host

The portal system automatically searches for the nearest matching host in the component tree, so components work seamlessly in both regular screens and modal screens.

## Notes

- Place `ModalPortalHost` as close to the root of your modal as possible
- You don't need `ModalPortalHost` in regular (non-modal) screens - the `EDSProvider` already provides the necessary portal hosts
- The component is fully backward compatible - existing code continues to work without changes
- `ModalPortalHost` adds minimal overhead (just context providers)
