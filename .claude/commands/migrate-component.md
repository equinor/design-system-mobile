# Migrate Component to New Design

Migrate a component to match the EDS Figma design using new tokens. Follow each step in order.

## Step 1: Design & Implementation Lookup

### 1a: Figma Design
1. Ask the user to select the component in Figma (or provide a node ID)
2. Use `mcp__figma__get_design_context` to get the component structure, props, and generated code
3. Use `mcp__figma__get_variable_defs` to get the design token variables used
4. Use `mcp__figma__get_screenshot` to get a visual reference
5. Use `mcp__figma__get_metadata` to understand the variant structure (states, sizes, etc.)

### 1b: EDS Web Storybook (Dev Implementation)
1. Use `WebFetch` to check `https://storybook.eds.equinor.com` — navigate to the **EDS 2.0 beta** section for the component
2. Look for the full API surface: props, subcomponents (e.g. RadioGroup, CheckboxGroup), compound patterns
3. Figma only shows atomic variants (e.g. individual Radio states) — the web storybook reveals grouping components, default behaviors, and the intended developer API
4. Our mobile components should mirror the web implementation's API where it makes sense for React Native

## Step 2: Analyze Design & API

Extract from **Figma**:
- **Dimensions**: width, height, padding, gap, border radius for all elements
- **Colors**: map each Figma CSS variable (e.g. `--eds-color-bg-fill-muted-default`) to a `theme.newColors.*` token path
- **Spacing**: map each Figma spacing variable (e.g. `--eds-selectable-space-horizontal`) to a `theme.newSpacing.*` token path
- **Typography**: map font size, weight, line height, letter spacing to `theme.newTypography.*` token paths
- **States**: default, hover/pressed, disabled, focus — note visual differences between each
- **Variants**: what props control which visual changes

Extract from **EDS Web Storybook**:
- **Component API**: props, their types, and default values
- **Subcomponents**: grouping wrappers (e.g. RadioGroup, CheckboxGroup) that Figma doesn't show
- **Behavior**: selection logic, keyboard/accessibility patterns, controlled vs uncontrolled usage
- **Compound patterns**: how atomic components compose (e.g. Radio inside RadioGroup)

Present a summary table to the user before proceeding.

## Step 3: Determine Mobile Scale Factor

The Figma design is created for web. Components need to be scaled up for mobile touch targets.

- Compare Figma dimensions against the current mobile implementation
- Propose a scale factor (e.g. 1.5x, 2x) and show the resulting dimensions
- **Do not assume 2x** — each component may need a different factor based on its touch target requirements
- Get user approval on the scale factor before implementing
- Apple recommends minimum 44×44pt touch targets

## Step 4: Map Tokens

Map all Figma variables to code tokens. Check `packages/components/CLAUDE.md` for known mappings and patterns first.

Rules:
- **Never hardcode** spacing or color values — always use `theme.newSpacing.*` or `theme.newColors.*`
- **Typography**: use `theme.newTypography.*` for fontSize, fontWeight, lineHeight, letterSpacing
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

## Step 6: Old Token Cleanup

A core goal of migration is integrating the new colour, spacing, and typography foundations into the component library. Every migrated component **must** be free of old tokens when the migration is complete.

1. Search the component file(s) for any remaining references to old tokens:
   - `theme.colors.*` or `token.colors.*` → replace with `token.newColors.*`
   - `theme.spacing.*` or `token.spacing.*` → replace with `token.newSpacing.*`
   - `theme.typography.*` or `token.typography.*` → replace with `token.newTypography.*`
   - Hardcoded color hex values, spacing numbers, or font sizes that have a semantic token equivalent
2. Check the component's storybook screen for old token usage and update those too
3. Verify the component still renders correctly after replacements
4. Run `npx tsc --noEmit` to confirm no type errors from the token changes

## Step 7: Update Supporting Files

1. **Documentation** (`packages/components/docs/ComponentName.mdx`) — run `/document-component` to write or refresh the developer MDX doc. Design guidance (when-to-use, do/don't) still belongs in Docusaurus, not here.
2. **Storybook** (`apps/storybook/app/(tabs)/components/`) — update showcase screen with new variants
3. **Code snippets** (`apps/storybook/codeSnippets/`) — **delete** the component's code snippets (code snippets are being removed from the app)
4. **Wrapper components** (e.g. Cell variants) — verify they still work with the redesigned component
5. **Migration findings** — if you surfaced gaps out of scope for this PR (Figma omissions, missing web parity, a11y gaps, API inconsistencies), append them as checklist items to [#152 — Tracking: Findings from component migration](https://github.com/equinor/design-system-mobile/issues/152). Format: **What** · **Rationale** · **Where it surfaced**.

## Step 8: Quality Checks

Run all checks and fix any issues:
```bash
cd packages/components && npx tsc --noEmit  # TypeScript
pnpm lint:components                         # Lint
pnpm build:components                        # Build
```

## Step 9: User Testing

Ask the user to:
- Test in storybook on device (iOS/Android)
- Verify all states: default, pressed, disabled
- Verify dark mode
- Verify any wrapper components (e.g. Cell variants)
- Confirm the scale factor feels right on device
- Code review the changes

## Step 10: Create PR

After user approval:
1. Stage only relevant files (exclude unrelated changes)
2. Commit with conventional commit format: `feat(component)!: redesign ComponentName to match Figma design` — do NOT add "Co-Authored-By: Claude" to commits
3. Push to remote
4. Update PR title and description with:
   - Summary of changes
   - Design details (Figma dimensions, scale factor, token mappings)
   - Breaking changes table
   - Test plan checklist
