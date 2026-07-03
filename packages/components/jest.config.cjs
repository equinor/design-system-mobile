"use strict";

// jest-expo's own default transformIgnorePatterns doesn't allow-list
// @equinor/eds-tokens, which ships raw, untranspiled TypeScript. We extend
// jest-expo's actual pattern (rather than hardcoding a guess) so this stays
// in sync if jest-expo ever changes its own default.
const jestExpoPreset = require("jest-expo/jest-preset");

module.exports = {
    preset: "jest-expo",
    setupFiles: ["react-native-gesture-handler/jestSetup"],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    // Reanimated 4.x delegates native threading to the separate
    // `react-native-worklets` package, which has no public "mock" subpath
    // export. This points directly at its built ESM mock module — verified
    // against the installed version; may need updating if react-native-worklets
    // changes its internal lib/ layout.
    moduleNameMapper: {
        "^react-native-worklets$": "react-native-worklets/lib/module/mock",
    },
    transformIgnorePatterns: (() => {
        const basePattern = jestExpoPreset.transformIgnorePatterns[0];
        const extendedPattern = basePattern.replace(
            /\)\)$/,
            "|@equinor/eds-tokens))"
        );
        if (extendedPattern === basePattern) {
            throw new Error(
                "jest-expo's default transformIgnorePatterns format changed " +
                    "(no longer ends in '))'). Update the @equinor/eds-tokens " +
                    "patch in jest.config.cjs to match the new format."
            );
        }
        return [extendedPattern, ...jestExpoPreset.transformIgnorePatterns.slice(1)];
    })(),
    testPathIgnorePatterns: [
        "<rootDir>/node_modules/",
        "<rootDir>/dist/",
        // Unmigrated Slice 2–4 components — excluded from tsc (tsconfig.json)
        // and type-checked lint (eslint.config.js) during the migration
        // window. Remove each entry as its component migrates; keep all
        // three lists in sync.
        "<rootDir>/src/components/Accordion/",
        "<rootDir>/src/components/Autocomplete/",
        "<rootDir>/src/components/Cell/",
        "<rootDir>/src/components/Chip/",
        "<rootDir>/src/components/Environment/",
        "<rootDir>/src/components/Menu/",
        "<rootDir>/src/components/OfflineBanner/",
        "<rootDir>/src/components/Popover/",
        "<rootDir>/src/components/Progress/",
        "<rootDir>/src/components/ProgressIndicator/",
        "<rootDir>/src/components/Select/",
        "<rootDir>/src/components/Spacer/",
        "<rootDir>/src/components/Tabs/",
        // Migrated components with no test file yet (issue #214). Remove each
        // entry as soon as its ComponentName.test.tsx lands — this list is a
        // checklist, not a migration-status list like the one above.
        "<rootDir>/src/components/Badge/",
        "<rootDir>/src/components/Button/",
        "<rootDir>/src/components/Dialog/",
        "<rootDir>/src/components/Divider/",
        "<rootDir>/src/components/EDSProvider/",
        "<rootDir>/src/components/ErrorBoundary/",
        "<rootDir>/src/components/Icon/",
        "<rootDir>/src/components/Input/",
        "<rootDir>/src/components/Label/",
        "<rootDir>/src/components/Link/",
        "<rootDir>/src/components/Paper/",
        "<rootDir>/src/components/Portal/",
        "<rootDir>/src/components/PressableHighlight/",
        "<rootDir>/src/components/Scrim/",
        "<rootDir>/src/components/Search/",
        "<rootDir>/src/components/SelectionControls/",
        "<rootDir>/src/components/TextArea/",
        "<rootDir>/src/components/TextField/",
        "<rootDir>/src/components/Typography/",
        "<rootDir>/src/components/_internal/",
    ],
};
