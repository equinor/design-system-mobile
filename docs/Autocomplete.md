# Autocomplete

The Autocomplete component provides a text input that suggests and filters options as the user types. It helps users quickly find and select from a list of possible values, improving efficiency and user experience in forms and search fields. The component supports both single and multi-select modes.

<img src="/assets/images/Autocomplete.png" width="400" alt="Autocomplete"/>

## Usage

```tsx
import { Autocomplete } from "@your-org/components";

// Single-select
<Autocomplete
    options={["Apple", "Banana", "Cherry"]}
    selectedOption={selected}
    onSelect={setSelected}
    placeholder="Type to search..."
/>;

// Multi-select
<Autocomplete.Multiselect
    options={["Apple", "Banana", "Cherry"]}
    selectedOptions={selectedList}
    onSelect={setSelectedList}
    placeholder="Type to search..."
/>;
```

## Props

### Autocomplete (Single-select)

| Name              | Type                            | Default | Description                                                      |
| ----------------- | ------------------------------- | ------- | ---------------------------------------------------------------- |
| options           | T[]                             | —       | List of options to display.                                      |
| selectedOption    | T \| undefined                  | —       | The currently selected option.                                   |
| onSelect          | (value: T \| undefined) => void | —       | Callback when an option is selected or cleared.                  |
| transformItem     | (item: T) => string             | —       | Function to convert an option to a string for display/filtering. |
| ...TextFieldProps | —                               | —       | All other props from TextField (label, placeholder, etc).        |

### Autocomplete.Multiselect

| Name              | Type                 | Default | Description                                                      |
| ----------------- | -------------------- | ------- | ---------------------------------------------------------------- |
| options           | T[]                  | —       | List of options to display.                                      |
| selectedOptions   | T[]                  | —       | The currently selected options.                                  |
| onSelect          | (value: T[]) => void | —       | Callback when options are selected or cleared.                   |
| transformItem     | (item: T) => string  | —       | Function to convert an option to a string for display/filtering. |
| ...TextFieldProps | —                    | —       | All other props from TextField (label, placeholder, etc).        |

## Examples

### Basic Autocomplete

```tsx
<Autocomplete
    options={["Red", "Green", "Blue"]}
    selectedOption={selected}
    onSelect={setSelected}
    placeholder="Choose a color"
/>
```

### Autocomplete with Custom Option Rendering

```tsx
<Autocomplete
    options={[
        { label: "Apple", value: "apple" },
        { label: "Banana", value: "banana" },
    ]}
    transformItem={(option) => option.label}
    selectedOption={selected}
    onSelect={setSelected}
/>
```

### Multiselect Autocomplete

```tsx
<Autocomplete.Multiselect
    options={["Apple", "Banana", "Cherry"]}
    selectedOptions={selectedList}
    onSelect={setSelectedList}
    placeholder="Type to search..."
/>
```

## Accessibility

- Supports keyboard navigation for selecting options.
- Provides clear labels and ARIA attributes for assistive technologies.
- Ensure options are easy to read and select.

## Related Components

- [Input](../Input/Input.md)
- [TextField](../TextField/TextField.md)
- [Select](../Select/Select.md)

## Additional Notes

- Use Autocomplete for long or dynamic lists where typing to filter is helpful.
- Avoid using Autocomplete for very short or static lists—use Select instead.
