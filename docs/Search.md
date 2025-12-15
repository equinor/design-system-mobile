# Search

The `Search` component provides a styled, animated search input field for React Native, following the EDS design system. It supports clear and cancel actions, word suggestions, focus animation, and integrates with the EDS Input and Icon components.

<img src="/assets/images/Search.png" width="400" alt="Search"/>

## Usage

```tsx
import { Search } from "@equinor/eds-mobile";

<Search
  placeholder="Search"
  value={searchText}
  onChange={setSearchText}
  cancellable
  onCancelPress={() => setSearchText("")}
/>;
```

## Props

| Name            | Type                            | Default | Description                                 |
| --------------- | ------------------------------- | ------- | ------------------------------------------- |
| `placeholder`   | string                          |         | Placeholder text for the search input.      |
| `value`         | string                          |         | The current value of the search input.      |
| `onChange`      | (text: string) => void          |         | Callback when the text changes.             |
| `cancellable`   | boolean                         |         | If true, shows a cancel button.             |
| `onCancelPress` | () => void                      |         | Callback when the cancel button is pressed. |
| `disabled`      | boolean                         |         | If true, disables the input.                |
| ...rest         | InputProps (except `multiline`) |         | All other standard Input props.             |

## Features

- Animated focus and cancel button transitions.
- Built-in clear button (shows when text is present).
- EDS theming for colors, spacing, and icons.
- Uses a magnify icon on the left and a clear (close) icon on the right.
- Keyboard and accessibility friendly.

## Theming & Styling

- Uses EDS tokens for spacing, colors, and animation.
- Integrates with the EDS Input and Icon components.

## Accessibility

- All standard accessibility props for `Input` and `Button` are supported.
- Clear and cancel buttons are accessible.

## Example

```tsx
<Search
  placeholder="Find items"
  value={query}
  onChange={setQuery}
  cancellable
  onCancelPress={() => setQuery("")}
/>
```

## Related

- [Input](./Input.md) – Underlying input component.
- [Icon](./Icon.md) – For search and clear icons.
- [EDS Theming](../README.md#theming)
