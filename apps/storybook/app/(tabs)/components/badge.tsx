import { Section } from "@/components/Section";
import { Surface } from "@/components/Surface";
import {
    Badge,
    EDSStyleSheet,
    Typography,
    useStyles,
} from "@equinor/eds-mobile-components";
import { ScrollView, View } from "react-native";

export default function BadgeScreen() {
    const styles = useStyles(themeStyles);

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Section>
                <Typography>
                    Badge labels content with status, category, or a numeric
                    value. Use it in table cells, list rows, and card headers.
                    It is not interactive and does not support overlay on icons
                    or tab bar items. It comes in two forms: Badge for labeled
                    pills and Badge.Status for compact dot indicators.
                </Typography>
            </Section>

            <Section style={styles.groupHeader}>
                <Typography.Header size="xl" weight="bolder">Badge</Typography.Header>
            </Section>

            <Section title="Usage">
                <Typography>
                    Place a badge on the trailing edge of a row or alongside a
                    label to communicate status or a count at a glance.
                </Typography>
            </Section>
            <Surface>
                <View style={styles.listRow}>
                    <Typography>Work order #1042</Typography>
                    <Badge tone="success">Approved</Badge>
                </View>
                <View style={styles.listRow}>
                    <Typography>Work order #1043</Typography>
                    <Badge tone="warning">Pending</Badge>
                </View>
                <View style={styles.listRow}>
                    <Typography>Work order #1044</Typography>
                    <Badge tone="danger" emphasis="high">Rejected</Badge>
                </View>
                <View style={styles.listRow}>
                    <Typography>Documents</Typography>
                    <Badge tone="accent" emphasis="high">{3}</Badge>
                </View>
            </Surface>

            <Section title="Tones" />
            <Surface>
                <View style={styles.row}>
                    <Badge tone="neutral">Neutral</Badge>
                    <Badge tone="accent">Accent</Badge>
                    <Badge tone="success">Success</Badge>
                    <Badge tone="info">Info</Badge>
                    <Badge tone="warning">Warning</Badge>
                    <Badge tone="danger">Danger</Badge>
                </View>
            </Surface>

            <Section title="Emphasis">
                <Typography>
                    Low uses the canvas background. Medium uses a muted fill.
                    High uses a strong fill with on-emphasis text.
                </Typography>
            </Section>
            <Surface>
                <View style={styles.row}>
                    <Badge tone="accent" emphasis="low">Low</Badge>
                    <Badge tone="accent" emphasis="medium">Medium</Badge>
                    <Badge tone="accent" emphasis="high">High</Badge>
                </View>
            </Surface>

            <Section title="Style">
                <Typography>
                    Solid is the default. Use outlined when a filled badge would
                    compete with other elements on the page.
                </Typography>
            </Section>
            <Surface>
                <View style={styles.row}>
                    <Badge tone="accent" style="solid" emphasis="medium">Solid</Badge>
                    <Badge tone="accent" style="outlined" emphasis="medium">Outlined</Badge>
                </View>
            </Surface>

            <Section style={styles.groupHeader}>
                <Typography.Header size="xl" weight="bolder">Badge.Status</Typography.Header>
            </Section>

            <Section title="Usage">
                <Typography>
                    Use Badge.Status when only a color indicator is needed with
                    no label text.
                </Typography>
            </Section>
            <Surface>
                <View style={styles.row}>
                    <Badge.Status tone="success" />
                    <Typography>Online</Typography>
                </View>
                <View style={styles.row}>
                    <Badge.Status tone="warning" />
                    <Typography>Degraded</Typography>
                </View>
                <View style={styles.row}>
                    <Badge.Status tone="danger" />
                    <Typography>Offline</Typography>
                </View>
            </Surface>

            <Section title="Tones" />
            <Surface>
                <View style={styles.row}>
                    <Badge.Status tone="neutral" />
                    <Badge.Status tone="accent" />
                    <Badge.Status tone="success" />
                    <Badge.Status tone="info" />
                    <Badge.Status tone="warning" />
                    <Badge.Status tone="danger" />
                </View>
            </Surface>

            <Section title="Style">
                <Typography>
                    Solid is the default. Use outlined for a subtler indicator
                    on filled or colored backgrounds.
                </Typography>
            </Section>
            <Surface>
                <View style={styles.row}>
                    <Badge.Status tone="danger" style="solid" />
                    <Badge.Status tone="danger" style="outlined" />
                </View>
            </Surface>
        </ScrollView>
    );
}

const themeStyles = EDSStyleSheet.create((token) => ({
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        gap: token.spacing.spacing.horizontal.sm,
    },
    groupHeader: {
        paddingTop: token.spacing.spacing.vertical.xl,
    },
    listRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
}));
