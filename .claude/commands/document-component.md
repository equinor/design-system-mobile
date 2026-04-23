# Document Component

Write a developer-facing MDX doc for a component in `@equinor/eds-mobile-components`. The MDX ships inside the npm package (via the `files` entry in `package.json`) and is rendered by the EDS Storybook wrapper through `PlatformTabs`. Follow each step in order.

## Scope

**In scope** (this command): developer reference — how to import, props, code examples, accessibility behavior, related components.

**Out of scope** (belongs in the EDS Docusaurus site): design guidance, "when to use / when not to use", do/don't pairs, visual anatomy diagrams, cross-platform design rationale.

If the user asks for design content, redirect them to Docusaurus.

## Step 1: Gather Component Info

1. Read the component source in `packages/components/src/components/**/<Name>.tsx`
2. Extract the exported `Props` type — note every prop, its type, default, and whether it's required
3. Note any extended RN types (e.g. `& ViewProps`, `& PressableProps`) — these become a "Also accepts…" link, not a listed prop
4. Read `accessibilityRole`, `accessibilityState`, and any other a11y props set inside the component
5. Check sibling components in the same folder (e.g. `SelectionControls/` has Switch, Checkbox, Radio) — these become **Related components**

## Step 2: Draft Sections (in this order)

### Features

4–6 short capability bullets. One sentence each. Cover:

- Core behavior (e.g. "Controlled on/off toggle with animated thumb.")
- Notable variants (e.g. "Optional label; labelless variant renders as a circular touch target.")
- Important states (disabled, error, loading — whichever apply)
- Theming behavior (keep this line simple — e.g. "Adapts to light/dark themes and comfortable/spacious density via the EDS token system.")
- Accessibility capability (e.g. "Reports `switch` role and checked/disabled state to assistive tech.")

Avoid marketing fluff. Avoid copying wording from other libraries verbatim.

### Usage

A single minimal example that gets a dev to "first working Switch" fastest. Include the import line here — do **not** add a separate Installation or Import section. Example:

```tsx
import { Switch } from '@equinor/eds-mobile-components'

const [active, setActive] = useState(false)

<Switch label="Notifications" active={active} onChange={setActive} />
```

### Examples

3–5 variations that a dev is likely to reach for. Each example gets an H3 and a short intro sentence if behavior differs from the default. Typical variations: with vs without label, different sizes, disabled, error state, compound usage (e.g. Checkbox inside CheckboxGroup).

### Props

Markdown table: `Prop | Type | Default | Description`. Rules:

- Escape `>` in generic types as `&gt;` inside the table (MDX parsing)
- Em-dash (`—`) for no default
- One line per prop, terse descriptions
- End the section with: `Also accepts all React Native [`ViewProps`](https://reactnative.dev/docs/view#props).` (or `PressableProps`, `TextProps`, etc. as appropriate)

### Accessibility

Bulleted list of what the component does automatically and what the consumer must supply. Cover:

- The `accessibilityRole` it sets
- Which states it reports (`checked`, `disabled`, `selected`, `expanded`, etc.)
- Consumer obligations (e.g. "Always provide a `label` or `accessibilityLabel`")

### Related components

Short bullet list linking to sibling components with one-line rationales. Example:

- `Checkbox` — for selecting one or more items from a set.
- `Radio` — for selecting a single option from a mutually exclusive set.

## Step 3: Write the File

Save as `packages/components/docs/<Name>.mdx`. Do not create a `.md` file — the doc is MDX.

## Step 4: Verify Shipping

Confirm `packages/components/package.json` `files` array includes `"docs"`. If not, add it.

## Step 5: Quality Checks

- Run `pnpm build:components` — the build should not change (MDX is not bundled, it's shipped as a file asset)
- Spot-check the rendered output if the user has the EDS Storybook wrapper running locally
- Verify every prop in the Props table exists in the component's exported type; verify every example compiles mentally against the actual API

## Step 6: User Review

Present the MDX content inline for review before committing. Flag any judgment calls made in Features bullets or Example selection — the user usually has opinions on tone.

## Step 7: Commit

After approval:

1. Stage `packages/components/docs/<Name>.mdx` and any `package.json` change
2. Commit as `docs(<component>): add mobile MDX doc` — do NOT add "Co-Authored-By: Claude"
3. Do not push unless asked

## Reference

- Template to mirror: `packages/components/docs/Switch.mdx`
- Doc strategy context: design docs live in Docusaurus; developer docs live here and are surfaced via `PlatformTabs` in the EDS Storybook wrapper.
