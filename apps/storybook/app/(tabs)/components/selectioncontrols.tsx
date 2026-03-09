import { radioButtons, switchControl } from "@/codeSnippets/selectioncontrols";
import { Section } from "@/components/Section";
import { useCodeSnippet } from "@/hooks/useCodeSnippet";
import { Radio, Spacer, Switch, Typography } from "@equinor/eds-mobile-components";
import { useState } from "react";
import { ScrollView, View } from "react-native";

export default function SelectionControlsScreen() {
    const [selectedRadio, setSelectedRadio] = useState<number>(0);
    const [switchActive, setSwitchActive] = useState(false);
    const [switchWithLabel, setSwitchWithLabel] = useState(true);
    const { ViewCode, CodeSnippetDialog } = useCodeSnippet();

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Section>
                <Typography>
                    Radio buttons and switches let users make choices — pick one
                    option from a group, or toggle a setting on and off.
                </Typography>
            </Section>
            <Spacer amount="medium" />
            <Section title="Radio Buttons">
                <View
                    style={{
                        flexDirection: "row",
                        gap: 16,
                        alignItems: "center",
                    }}
                >
                    <Radio
                        checked={selectedRadio === 0}
                        onPress={() => setSelectedRadio(0)}
                        color="primary"
                    />
                    <Radio
                        checked={selectedRadio === 1}
                        onPress={() => setSelectedRadio(1)}
                        color="secondary"
                    />
                    <Radio
                        checked={selectedRadio === 2}
                        onPress={() => setSelectedRadio(2)}
                        color="success"
                    />
                    <Radio
                        checked={selectedRadio === 3}
                        onPress={() => setSelectedRadio(3)}
                        color="warning"
                    />
                    <Radio
                        checked={selectedRadio === 4}
                        onPress={() => setSelectedRadio(4)}
                        color="danger"
                    />
                    <Radio checked={true} disabled color="primary" />
                </View>

                <ViewCode title="Radio Buttons" code={radioButtons} />
            </Section>

            <Section title="Switch">
                <Typography variant="p">
                    Toggle switch in an active state and a switch in a disabled state
                </Typography>
                <View
                    style={{
                        flexDirection: "row",
                        gap: 32,
                        alignItems: "center",
                    }}
                >
                    <Switch active={switchActive} onChange={setSwitchActive} />
                    <Switch active={false} disabled />
                </View>
                <ViewCode title="Switch Control" code={switchControl} />
            </Section>

            <Section title="Switch with Label">
                <Typography variant="p">
                    Switch with an inline label
                </Typography>
                <View style={{ gap: 8 }}>
                    <Switch
                        active={switchWithLabel}
                        onChange={setSwitchWithLabel}
                        label="Enable notifications"
                    />
                    <Switch
                        active={true}
                        disabled
                        label="Disabled option"
                    />
                </View>
            </Section>

            <CodeSnippetDialog />
        </ScrollView>
    );
}
