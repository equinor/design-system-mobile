export const toneButtons = `<Button label="Accent" tone="accent" onPress={() => null} />
<Button label="Neutral" tone="neutral" onPress={() => null} />
<Button label="Danger" tone="danger" onPress={() => null} />`;

export const variantButtons = `<Button label="Primary" variant="primary" onPress={() => null} />
<Button label="Secondary" variant="secondary" onPress={() => null} />
<Button label="Ghost" variant="ghost" onPress={() => null} />`;

export const iconButtons = `// Icon positions
<Button label="Leading" leadingIcon="home-outline" />
<Button label="Trailing" trailingIcon="send-outline" />

// Icon-only
<Button.Icon name="heart" onPress={() => alert("Heart pressed")} />
<Button.Icon name="star" variant="secondary" onPress={() => alert("Star pressed")} />
<Button.Icon name="close" variant="ghost" onPress={() => alert("Close pressed")} />
<Button.Icon name="check" disabled />

// Round
<Button.Icon name="heart" round onPress={() => alert("Heart pressed")} />`;

export const toggleButtons = `<Button.Toggle activeIndex={togglePressed ? 1 : 0}>
  <Button label="Option 1" onPress={() => setTogglePressed(false)} />
  <Button label="Option 2" onPress={() => setTogglePressed(true)} />
</Button.Toggle>`;
