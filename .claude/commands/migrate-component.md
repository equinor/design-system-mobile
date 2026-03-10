# Migrate Component to New Design

Migrate a component to match the EDS Figma design using new tokens. Follow each step in order.

## Step 1: Figma Design Lookup

1. Ask the user to select the component in Figma (or provide a node ID)
2. Use `mcp__figma__get_design_context` to get the component structure, props, and generated code
3. Use `mcp__figma__get_variable_defs` to get the design token variables used
4. Use `mcp__figma__get_screenshot` to get a visual reference
5. Use `mcp__figma__get_metadata` to understand the variant structure (states, sizes, etc.)

## Step 2: Analyze Figma Design

Extract from the Figma data:
- **Dimensions**: width, height, padding, gap, border radius for all elements
- **Colors**: map each Figma CSS variable (e.g. `--eds-color-bg-fill-muted-default`) to a `theme.newColors.*` token path
- **Spacing**: map each Figma spacing variable (e.g. `--eds-selectable-space-horizontal`) to a `theme.newSpacing.*` token path
- **Typography**: font size, weight, line height, letter spacing (hardcode these until typography tokens are available)
- **States**: default, hover/pressed, disabled, focus — note visual differences between each
- **Variants**: what props control which visual changes

Present a summary table to the user before proceeding.

## Step 3: Determine Mobile Scale Factor

The Figma design is created for web. Components need to be scaled up for mobile touch targets.

- Compare Figma dimensions against the current mobile implementation
- Propose a scale factor (e.g. 1.5x, 2x) and show the resulting dimensions
- **Do not assume 2x** — each component may need a different factor based on its touch target requirements
- Get user approval on the scale factor before implementing
- Apple recommends minimum 44×44pt touch targets

## Step 4: Map Tokens

Map all Figma variables to code tokens. Check the memory file `component-migration.md` for known mappings first.

Rules:
- **Never hardcode** spacing or color values — always use `theme.newSpacing.*` or `theme.newColors.*`
- **Typography** (fontSize, fontWeight, lineHeight) stays hardcoded until typography tokens arrive
- If a Figma variable doesn't have a matching token in the proxy, find the closest semantic equivalent
- Verify token paths compile with `tsc --noEmit` before proceeding
- Save any new mappings discovered to the memory file

## Step 5: Implement

1. Rewrite the component to match Figma structure
2. Use `Pressable` instead of `PressableHighlight` — use Figma hover background as pressed state on mobile (no hover on mobile)
3. Use `EDSStyleSheet.create` with conditional props for state-dependent styling
4. Add accessibility props (`accessibilityRole`, `accessibilityState`)
5. Keep animations but adjust to new dimensions
6. Ensure the component works both with and without optional props (e.g. label)

## Step 6: Update Supporting Files

1. **Documentation** (`docs/ComponentName.md`) — update props table, examples, remove stale references
2. **Storybook** (`apps/storybook/app/(tabs)/components/`) — update showcase screen with new variants
3. **Code snippets** (`apps/storybook/codeSnippets/`) — update if props changed
4. **Wrapper components** (e.g. Cell variants) — verify they still work with the redesigned component

## Step 7: Quality Checks

Run all checks and fix any issues:
```bash
cd packages/components && npx tsc --noEmit  # TypeScript
pnpm lint:components                         # Lint
pnpm build:components                        # Build
```

## Step 8: User Testing

Ask the user to:
- Test in storybook on device (iOS/Android)
- Verify all states: default, pressed, disabled
- Verify dark mode
- Verify any wrapper components (e.g. Cell variants)
- Confirm the scale factor feels right on device
- Code review the changes

## Step 9: Create PR

After user approval:
1. Stage only relevant files (exclude unrelated changes)
2. Commit with conventional commit format: `feat(component)!: redesign ComponentName to match Figma design` — do NOT add "Co-Authored-By: Claude" to commits
3. Push to remote
4. Update PR title and description with:
   - Summary of changes
   - Design details (Figma dimensions, scale factor, token mappings)
   - Breaking changes table
   - Test plan checklist
