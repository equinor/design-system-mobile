import { Section } from "@/components/Section";
import { Surface } from "@/components/Surface";
import { Link, Typography } from "@equinor/eds-mobile-components";
import { Alert, Linking, ScrollView } from "react-native";

const GITHUB_URL = "https://github.com/equinor/design-system-mobile";
const DOCS_URL = "https://eds.equinor.com/docs/Next/components/navigation/link";

export default function LinkScreen() {
    const handlePress = () => Alert.alert("Link pressed");

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Section>
                <Typography>
                    Link is a pressable text element for navigation and
                    external URLs. It supports standalone use as a CTA or
                    inline use embedded inside a sentence.
                </Typography>
            </Section>

            <Section title="Default" />
            <Surface>
                <Link onPress={handlePress}>Open documentation</Link>
            </Surface>

            <Section title="External Link">
                <Typography>
                    Use the external prop to indicate the link opens outside
                    the app.
                </Typography>
            </Section>
            <Surface>
                <Link
                    onPress={() => Linking.openURL(GITHUB_URL).catch(() => {})}
                    external
                >
                    View on GitHub
                </Link>
            </Surface>

            <Section title="Sizes">
                <Typography>
                    Size matches the Typography UI scale. Use this to align a
                    link with surrounding text.
                </Typography>
            </Section>
            <Surface>
                <Link onPress={handlePress} size="xs">Extra small</Link>
                <Link onPress={handlePress} size="sm">Small</Link>
                <Link onPress={handlePress} size="md">Medium (default)</Link>
                <Link onPress={handlePress} size="lg">Large</Link>
                <Link onPress={handlePress} size="xl">Extra large</Link>
            </Surface>

            <Section title="Disabled" />
            <Surface>
                <Link onPress={handlePress} disabled>
                    Disabled link
                </Link>
            </Surface>

            <Section title="Inline usage">
                <Typography>
                    Use variant=&quot;inline&quot; to embed a link inside a sentence.
                    It renders as a Text element so it sits naturally alongside
                    other text.
                </Typography>
            </Section>
            <Surface>
                <Typography>
                    Read the{" "}
                    <Link
                        variant="inline"
                        size="lg"
                        onPress={() => Linking.openURL(DOCS_URL).catch(() => {})}
                    >
                        full documentation
                    </Link>
                    {" "}for more details.
                </Typography>
            </Surface>
        </ScrollView>
    );
}
