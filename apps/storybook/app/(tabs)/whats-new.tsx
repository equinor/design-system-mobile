import {
    Accordion,
    EDSStyleSheet,
    Typography,
    useStyles,
} from "@equinor/eds-mobile-components";
import { ScrollView, View } from "react-native";

export default function WhatsNewScreen() {
    const styles = useStyles(themeStyles);

    return (
        <ScrollView
            style={styles.container}
            contentInsetAdjustmentBehavior="automatic"
        >
            <View style={styles.header}>
                <Typography variant="h4">What&apos;s New</Typography>
                <Typography variant="p">
                    Breaking changes, new features, and migration notes.
                </Typography>
            </View>

            <Accordion>
                <Accordion.Item
                    title="v2.3.0-beta.0 — March 2025"
                    defaultOpen
                >
                    <View style={styles.content}>
                        <Typography variant="h6">New EDS Tokens</Typography>
                        <Typography variant="p">
                            Updated @equinor/eds-tokens to 2.3.0-beta.0 with
                            new color and spacing tokens.
                        </Typography>

                        <Typography variant="h6" style={styles.subheading}>
                            Breaking Changes
                        </Typography>
                        <Typography variant="p">
                            {"\u2022"} New spacing tokens replace legacy spacing
                            values{"\n"}
                            {"\u2022"} New color tokens follow updated EDS
                            naming conventions{"\n"}
                            {"\u2022"} Components using old tokens should
                            migrate to newColors and newSpacing
                        </Typography>

                        <Typography variant="h6" style={styles.subheading}>
                            Migration
                        </Typography>
                        <Typography variant="p">
                            Replace theme.colors.* with theme.newColors.* and
                            theme.spacing.* with theme.newSpacing.* in your
                            components. See the component library CLAUDE.md for
                            detailed token mappings.
                        </Typography>
                    </View>
                </Accordion.Item>

                <Accordion.Item title="Switch Migration — March 2025">
                    <View style={styles.content}>
                        <Typography variant="h6">
                            Switch Component Overhaul
                        </Typography>
                        <Typography variant="p">
                            Migrated the Switch component to new design tokens
                            and removed the SmallSwitch variant.
                        </Typography>

                        <Typography variant="h6" style={styles.subheading}>
                            Breaking Changes
                        </Typography>
                        <Typography variant="p">
                            {"\u2022"} SmallSwitch has been removed — use Switch
                            instead{"\n"}
                            {"\u2022"} Switch now uses newColors and newSpacing
                            tokens{"\n"}
                            {"\u2022"} Visual appearance updated to match latest
                            EDS guidelines
                        </Typography>

                        <Typography variant="h6" style={styles.subheading}>
                            Migration
                        </Typography>
                        <Typography variant="p">
                            Replace all SmallSwitch usages with Switch. The
                            standard Switch component now covers both use cases.
                            Update any custom styling that referenced old token
                            values.
                        </Typography>
                    </View>
                </Accordion.Item>
            </Accordion>
        </ScrollView>
    );
}

const themeStyles = EDSStyleSheet.create((token) => ({
    container: {
        flex: 1,
        backgroundColor: token.newColors.bg.neutral.surface,
    },
    header: {
        padding: 24,
        gap: 8,
    },
    content: {
        padding: 16,
        gap: 8,
    },
    subheading: {
        marginTop: 8,
    },
}));
