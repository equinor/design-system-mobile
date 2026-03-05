import {
    iconButtons,
    statesButtons,
    toggleButtons,
    variantButtons,
} from "@/codeSnippets/buttons";
import { Section } from "@/components/Section";
import { useCodeSnippet } from "@/hooks/useCodeSnippet";
import { Button, Spacer, Typography } from "@equinor/eds-mobile-components";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function ButtonsScreen() {
    const [togglePressed, setTogglePressed] = useState(false);
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
                <View style={styles.buttonGroup}>
                    <Button label="Accent" tone="accent" onPress={() => null} />
                    <Button
                        label="Neutral"
                        tone="neutral"
                        onPress={() => null}
                    />
                    <Button label="Danger" tone="danger" onPress={() => null} />
                    <ViewCode title="Button Variations" code={statesButtons} />
                </View>
            </Section>

            <Spacer />

            <Section title="Variants">
                <View style={styles.buttonGroup}>
                    <Button
                        label="Primary"
                        variant="primary"
                        onPress={() => null}
                    />

                    <Button
                        label="Secondary"
                        variant="secondary"
                        onPress={() => null}
                    />

                    <Button
                        label="Ghost"
                        variant="ghost"
                        onPress={() => null}
                    />
                    <ViewCode title="Button Variants" code={variantButtons} />
                </View>
            </Section>

            <Spacer />

            <Section title="Variations">
                <View style={styles.buttonGroup}>
                    <Button
                        label="Label"
                        tone="accent"
                        variant="primary"
                        onPress={() => null}
                    />
                    <Button
                        label="Label"
                        tone="accent"
                        variant="secondary"
                        onPress={() => null}
                    />
                    <Button
                        label="Label"
                        tone="accent"
                        variant="ghost"
                        onPress={() => null}
                    />
                </View>

                <View style={styles.buttonGroup}>
                    <Button
                        label="Label"
                        tone="neutral"
                        variant="primary"
                        onPress={() => null}
                    />
                    <Button
                        label="Label"
                        tone="neutral"
                        variant="secondary"
                        onPress={() => null}
                    />
                    <Button
                        label="Label"
                        tone="neutral"
                        variant="ghost"
                        onPress={() => null}
                    />
                </View>

                <View style={styles.buttonGroup}>
                    <Button
                        label="Label"
                        tone="danger"
                        variant="primary"
                        onPress={() => null}
                    />
                    <Button
                        label="Label"
                        tone="danger"
                        variant="secondary"
                        onPress={() => null}
                    />
                    <Button
                        label="Label"
                        tone="danger"
                        variant="ghost"
                        onPress={() => null}
                    />
                </View>
            </Section>

            <Spacer />

            <Section title="Icon Buttons">
                <Typography>
                    Add icons to reinforce meaning or create compact, icon-only
                    buttons.
                </Typography>
            </Section>

            <Typography>Icon positions:</Typography>
            <View style={styles.row}>
                <Button label="Leading" leadingIcon="home-outline" />
                <Button label="Trailing" trailingIcon="send-outline" />
            </View>

            <Spacer amount="small" />
            <Typography variant="p">Just Icons</Typography>
            <View style={styles.row}>
                <Button.Icon
                    name="heart"
                    onPress={() => alert("Heart Button pressed")}
                />

                <Button.Icon
                    name="star"
                    variant="outlined"
                    onPress={() => alert("Star Button pressed")}
                />

                <Button.Icon
                    name="close"
                    variant="ghost"
                    onPress={() => alert("Close Button pressed")}
                />

                <Button.Icon
                    name="check"
                    disabled
                    onPress={() => alert("Disabled Check Button pressed")}
                />
            </View>
            <ViewCode title="Icon Buttons" code={iconButtons} />

            <View style={styles.section}>
                <Typography variant="h6">Toggle Button Group</Typography>

                <Button.Toggle activeIndex={togglePressed ? 1 : 0}>
                    <Button
                        label="Option 1"
                        onPress={() => setTogglePressed(false)}
                    />
                    <Button
                        label="Option 2"
                        onPress={() => setTogglePressed(true)}
                    />
                </Button.Toggle>
                <ViewCode title="Toggle Button Group" code={toggleButtons} />
            </View>
            <CodeSnippetDialog />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    section: {
        padding: 10,
        gap: 16,
    },
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
