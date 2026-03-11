import { toneButtons, variantButtons } from "@/codeSnippets/buttons";
import { Section } from "@/components/Section";
import { useCodeSnippet } from "@/hooks/useCodeSnippet";
import { Button, Spacer, Typography } from "@equinor/eds-mobile-components";
import { ScrollView, StyleSheet, View } from "react-native";

export default function ButtonsScreen() {
    const { ViewCode, CodeSnippetDialog } = useCodeSnippet();

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Section>
                <Typography>
                    Buttons let users take action with a single tap — submitting
                    forms, triggering events, or navigating through your app.
                </Typography>
            </Section>

            <Spacer />

            <Section title="Tones">
                <Typography>
                    Buttons come in three tones. These can be used to indicate
                    importance.
                </Typography>
                <View style={styles.buttonGroup}>
                    <Button label="Accent" tone="accent" />
                    <Button label="Neutral" tone="neutral" />
                    <Button label="Danger" tone="danger" />
                </View>
                <ViewCode title="Tones" code={toneButtons} />
            </Section>

            <Spacer />

            <Section title="Variants">
                <Typography>
                    Buttons come in three different variants:
                </Typography>
                <View style={styles.buttonGroup}>
                    <Button label="Primary" variant="primary" />
                    <Button label="Secondary" variant="secondary" />
                    <Button label="Ghost" variant="ghost" />
                </View>
                <ViewCode title="Variants" code={variantButtons} />
            </Section>

            <Spacer />

            <Section title="Variations">
                <Typography>
                    Combining tones and variants creates a range of button
                    styles to choose from.
                </Typography>
                <View style={styles.buttonGroup}>
                    <Button label="Label" tone="accent" variant="primary" />
                    <Button label="Label" tone="accent" variant="secondary" />
                    <Button label="Label" tone="accent" variant="ghost" />
                </View>

                <View style={styles.buttonGroup}>
                    <Button label="Label" tone="neutral" variant="primary" />
                    <Button label="Label" tone="neutral" variant="secondary" />
                    <Button label="Label" tone="neutral" variant="ghost" />
                </View>

                <View style={styles.buttonGroup}>
                    <Button label="Label" tone="danger" variant="primary" />
                    <Button label="Label" tone="danger" variant="secondary" />
                    <Button label="Label" tone="danger" variant="ghost" />
                </View>
            </Section>

            <Spacer />

            <Section title="With icons">
                <Typography>
                    You can add icons to buttons to provide additional context
                    and visual interest.
                </Typography>
                <View style={styles.row}>
                    <Button label="Leading" leadingIcon="home-outline" />
                    <Button label="Trailing" trailingIcon="send-outline" />
                    <Button
                        label="Both"
                        leadingIcon="pan-left"
                        trailingIcon="pan-right"
                    />
                </View>
            </Section>

            <Spacer />

            <Section title="Icon buttons">
                <Typography>
                    Icon buttons are a compact variant of the button component,
                    containing only an icon. They are used for actions where
                    space is limited, or where the action can be easily
                    represented by an icon.
                </Typography>
                <View style={styles.row}>
                    <Button.Icon name="heart" />
                    <Button.Icon name="star" variant="secondary" />
                    <Button.Icon name="close" variant="ghost" />
                    <Button.Icon name="check" disabled />
                </View>

                <View style={styles.row}>
                    <Button.Icon name="heart" round />
                    <Button.Icon name="star" round variant="secondary" />
                    <Button.Icon name="close" round variant="ghost" />
                </View>
            </Section>

            <Spacer />

            <Section title="States">
                <Typography>Buttons can be disabled or busy</Typography>
                <View style={styles.row}>
                    <Button label="Disabled" disabled />
                    <Button label="Busy" busy />
                    <Button.Icon name="cancel" disabled />
                    <Button.Icon name="shuffle" busy />
                </View>
            </Section>

            <Spacer />

            <CodeSnippetDialog />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    buttonGroup: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    row: {
        flexDirection: "row",
        gap: 12,
        flexWrap: "wrap",
    },
});
