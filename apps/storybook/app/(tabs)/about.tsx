import { Icon, Typography, useToken } from "@equinor/eds-mobile-components";
import edsPkg from "@equinor/eds-mobile-components/package.json";
import Constants from "expo-constants";
import { Linking, Pressable, ScrollView, StyleSheet, View } from "react-native";

const appVersion = Constants.expoConfig?.version ?? "—";
const libraryVersion = edsPkg.version;

const LINKS = [
    {
        label: "EDS documentation",
        url: "https://eds.equinor.com/",
    },
    {
        label: "EDS Storybook",
        url: "https://storybook.eds.equinor.com",
    },
    {
        label: "npm package",
        url: "https://www.npmjs.com/package/@equinor/eds-mobile-components",
    },
    {
        label: "GitHub repository",
        url: "https://github.com/equinor/design-system-mobile",
    },
];

export default function AboutScreen() {
    const { colors, spacing } = useToken();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        header: {
            paddingHorizontal: spacing.spacing.horizontal.xl,
            paddingVertical: spacing.spacing.vertical.xl,
            gap: spacing.spacing.vertical.md,
        },
        groupLabel: {
            paddingHorizontal: spacing.spacing.horizontal.xl,
            paddingTop: spacing.spacing.vertical.lg,
            paddingBottom: spacing.spacing.vertical.xs,
        },
        group: {
            marginHorizontal: spacing.spacing.horizontal.xl,
            borderRadius: spacing.spacing.borderRadius.rounded,
            overflow: "hidden",
            backgroundColor: colors.bg.neutral.surface,
        },
        rowInner: {
            paddingHorizontal: spacing.spacing.horizontal.lg,
            paddingVertical: spacing.spacing.vertical.md,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        rowDivider: {
            height: StyleSheet.hairlineWidth,
            backgroundColor: colors.border.neutral.subtle,
            marginLeft: spacing.spacing.horizontal.lg,
        },
        footer: {
            paddingVertical: spacing.spacing.vertical.xl,
            alignItems: "center",
        },
        subtleText: {
            color: colors.text.neutral.subtle,
        },
    });

    return (
        <ScrollView
            style={styles.container}
            contentInsetAdjustmentBehavior="automatic"
        >
            <View style={styles.header}>
                <Typography.Header size="twoXl" weight="bolder">
                    EDS Mobile
                </Typography.Header>
                <Typography.Header size="lg">
                    Equinor Design System for React Native
                </Typography.Header>
                <Typography>
                    EDS Mobile brings the Equinor Design System to native iOS.
                    It gives teams a set of React Native components for building
                    consistent, accessible Equinor applications.
                </Typography>
                <Typography>
                    Explore the Components tab to see what&apos;s available,
                    switch themes using the controls at the top, and tap any
                    component to view its usage.
                </Typography>
            </View>

            <View style={styles.groupLabel}>
                <Typography style={styles.subtleText}>Versions</Typography>
            </View>
            <View style={styles.group}>
                <View style={styles.rowInner}>
                    <Typography>App</Typography>
                    <Typography>{appVersion}</Typography>
                </View>
                <View style={styles.rowDivider} />
                <View style={styles.rowInner}>
                    <Typography>Library</Typography>
                    <Typography>v{libraryVersion}</Typography>
                </View>
            </View>

            <View style={styles.groupLabel}>
                <Typography style={styles.subtleText}>Resources</Typography>
            </View>
            <View style={styles.group}>
                {LINKS.map(({ label, url }, index) => (
                    <View key={url}>
                        {index > 0 && <View style={styles.rowDivider} />}
                        <Pressable
                            style={styles.rowInner}
                            onPress={() => Linking.openURL(url).catch(() => {})}
                        >
                            <Typography>{label}</Typography>
                            <Icon
                                name="chevron-right"
                                size={20}
                                color={colors.text.neutral.subtle}
                            />
                        </Pressable>
                    </View>
                ))}
            </View>

            <View style={styles.footer}>
                <Typography style={styles.subtleText}>
                    @equinor/eds-mobile-components v{libraryVersion}
                </Typography>
            </View>
        </ScrollView>
    );
}
