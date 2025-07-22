# Accordion

An Accordion is a component that organizes content into collapsible sections. Each section (AccordionItem) can be expanded or collapsed to show or hide its content, helping users manage large amounts of information in a compact space.

<img src="/assets/images/Accordion.png" width="400" alt="Accordion"/>

## Usage

```tsx
import { AccordionItem } from "@your-org/components";

<AccordionItem title="Section Title">
  <Text>Content goes here</Text>
</AccordionItem>;
```

## Props

| Name            | Type              | Default | Description                                                    |
| --------------- | ----------------- | ------- | -------------------------------------------------------------- |
| title           | string            | —       | Title of the accordion item.                                   |
| chevronPosition | "left" \| "right" | "left"  | Position of the chevron icon.                                  |
| adornment       | ReactNode         | —       | Custom component to display beside the title.                  |
| iconName        | IconName          | —       | Icon to display with the title.                                |
| disabled        | boolean           | false   | If true, disables interaction and styles the item as inactive. |
| defaultOpen     | boolean           | false   | If true, the item is expanded by default.                      |

## Examples

### Basic Accordion

```tsx
<AccordionItem title="Details">
  <Text>This is the content inside the accordion.</Text>
</AccordionItem>
```

### Accordion with Icon and Adornment

```tsx
<AccordionItem
  title="Settings"
  iconName="settings"
  adornment={<Badge label="New" />}
>
  <Text>Settings content here.</Text>
</AccordionItem>
```

## Accessibility

- Accordion headers are focusable and can be activated via keyboard or touch.
- Use clear, descriptive titles for each section.
- Ensure content inside each AccordionItem is accessible and readable.

## Related Components

- [Cell](../Cell/Cell.md)
- [Typography](../Typography/Typography.md)

## Additional Notes

- Accordions are useful for FAQs, settings panels, and any UI where content needs to be shown/hidden dynamically.
- Only one AccordionItem may be open at a time if used within a parent Accordion context.

## Additional Notes

- Any extra information, gotchas, or best practices.
