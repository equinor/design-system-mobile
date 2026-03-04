import {
    iconButtons,
    statesButtons,
    toggleButtons,
    variantButtons,
} from "@/codeSnippets/buttons";
import { useCodeSnippet } from "@/hooks/useCodeSnippet";
import { Button, Spacer, Typography } from "@equinor/eds-mobile-components";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function ButtonsScreen() {
    const [togglePressed, setTogglePressed] = useState(false);
    const { ViewCode, CodeSnippetDialog } = useCodeSnippet();

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <View style={styles.section}>
                <Typography variant="p">
                    Buttons let users take action with a single tap — submitting
                    forms, triggering events, or navigating through your app.
                </Typography>
            </View>

            <View style={styles.section}>
                <Typography variant="h6">Tones</Typography>
                <View style={styles.buttonGroup}>
                    <Button
                        label="Accent Button"
                        tone="accent"
                        onPress={() => null}
                    />
                    <Button
                        label="Neutral Button"
                        tone="neutral"
                        onPress={() => null}
                    />
                    <Button
                        label="Danger Button"
                        tone="danger"
                        onPress={() => null}
                    />
                    <Button
                        label="Disabled Button"
                        disabled
                        onPress={() => null}
                    />
                    <ViewCode title="Button Variations" code={statesButtons} />
                </View>
                <Spacer amount="small" />
                <Typography variant="h6">Variants</Typography>
                <View style={styles.buttonGroup}>
                    <Button
                        label="Primary variant"
                        variant="primary"
                        onPress={() => null}
                    />

                    <Button
                        label="Secondary variant"
                        variant="secondary"
                        onPress={() => null}
                    />

                    <Button
                        label="Ghost Button"
                        variant="ghost"
                        onPress={() => null}
                    />
                    <ViewCode title="Button Variants" code={variantButtons} />
                </View>
                <Typography variant="h6">Icon Buttons</Typography>
                <Typography variant="p">
                    Add icons to reinforce meaning or create compact, icon-only
                    buttons.
                </Typography>

                <Typography>Icon positions:</Typography>
                <View style={styles.row}>
                    <Button
                        label="Leading"
                        iconPosition="leading"
                        iconName="home-outline"
                    />
                    <Button
                        label="Trailing"
                        iconPosition="trailing"
                        iconName="send-outline"
                    />
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
            </View>
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
        gap: 12,
    },
    row: {
        flexDirection: "row",
        gap: 12,
        flexWrap: "wrap",
    },
});
