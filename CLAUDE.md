# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EDS Mobile is a React Native component library implementing the Equinor Design System. This is a monorepo managed by pnpm and Turborepo containing:
- `packages/components` - The core @equinor/eds-mobile-components library
- `apps/storybook` - Expo app for component showcase and development
- `packages/eslint-config-eds-mobile` - Shared ESLint configuration
- `packages/tsconfig` - Shared TypeScript configuration

## Common Commands

### Building and Development
```bash
# Install dependencies (always use pnpm, never npm or yarn)
pnpm install

# Build all packages (must build components before running storybook)
pnpm build

# Build only the component library
pnpm build:components

# Watch mode for component library development
pnpm dev:components

# Run storybook app for iOS (requires prior build)
pnpm dev:storybook

# Run storybook for specific platform
cd apps/storybook
pnpm ios
pnpm android
```

### Code Quality
```bash
# Lint all packages
pnpm lint

# Lint only components
pnpm lint:components

# Format code with Prettier
pnpm format

# Type check
pnpm check-types
```

### Cleanup
```bash
# Clean all build artifacts and dependencies
pnpm clean

# Clean only storybook
pnpm clean:storybook
```

## Monorepo Structure

- **Turborepo** manages the build pipeline with task caching
- `build` task has dependency on `^build` (builds dependencies first)
- Use `--filter` to target specific packages (e.g., `--filter @equinor/eds-mobile-components`)

## Package-Specific Documentation

For detailed architecture and development patterns:
- **Component Library**: See `packages/components/CLAUDE.md` for token system, theming, component patterns, and library-specific development workflow
- **Storybook App**: See `apps/storybook/CLAUDE.md` for Expo Router architecture, adding component screens, code snippet patterns, and platform-specific setup
