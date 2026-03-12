import { Section } from "@/components/Section";
import {
    Radio,
    Spacer,
    Switch,
    Typography,
    useToken,
} from "@equinor/eds-mobile-components";
import { useState } from "react";
import { ScrollView, View } from "react-native";

export default function SelectionControlsScreen() {
    const token = useToken();
    const [selectedRadio, setSelectedRadio] = useState<number>(0);
    const [selectedRadioNoLabel, setSelectedRadioNoLabel] = useState<number>(0);
    const [switchActive, setSwitchActive] = useState(false);
    const [switchSecondaryActive, setSwitchSecondaryActive] = useState(true);
    const [switchDangerActive, setSwitchDangerActive] = useState(true);
    const [smallSwitchActive, setSmallSwitchActive] = useState(true);

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Section>
                <Typography>
                    Radio buttons and switches let users make choices — pick one
                    option from a group, or toggle a setting on and off.
                </Typography>
            </Section>

            <Spacer amount="medium" />
            <Section>
                <Typography variant="h4">Radio Buttons</Typography>
            </Section>
            <Spacer amount="medium" />
            <Section title="With labels">
                <View>
                    <Radio
                        checked={selectedRadio === 0}
                        onPress={() => setSelectedRadio(0)}
                        label="Option A"
                    />
                    <Radio
                        checked={selectedRadio === 1}
                        onPress={() => setSelectedRadio(1)}
                        label="Option B"
                    />
                    <Radio
                        checked={selectedRadio === 2}
                        onPress={() => setSelectedRadio(2)}
                        label="Option C"
                    />
                </View>
            </Section>
            <Spacer amount="medium" />
            <Section title="Without visible label">
                <View
                    style={{
                        flexDirection: "row",
                        gap: token.newSpacing.spacing.horizontal.md,
                    }}
                >
                    <Radio
                        checked={selectedRadioNoLabel === 0}
                        onPress={() => setSelectedRadioNoLabel(0)}
                        accessibilityLabel="Option D"
                    />
                    <Radio
                        checked={selectedRadioNoLabel === 1}
                        onPress={() => setSelectedRadioNoLabel(1)}
                        accessibilityLabel="Option E"
                    />
                </View>
            </Section>
            <Spacer amount="medium" />
            <Section title="Disabled">
                <View>
                    <Radio
                        checked={false}
                        disabled
                        label="Disabled unchecked"
                    />
                    <Radio checked={true} disabled label="Disabled checked" />
                </View>
            </Section>

            <Spacer amount="medium" />
            <Section>
                <Typography variant="h4">Switch</Typography>
            </Section>

            <Section title="Without labels">
                <View
                    style={{
                        flexDirection: "row",
                        gap: token.newSpacing.spacing.horizontal.lg,
                        alignItems: "center",
                    }}
                >
                    <Switch
                        active={switchActive}
                        onChange={setSwitchActive}
                        color="primary"
                    />

                    <Switch
                        active={switchSecondaryActive}
                        onChange={setSwitchSecondaryActive}
                        color="secondary"
                    />
                </View>
            </Section>

            <Section title="Danger and Disabled">
                <View
                    style={{
                        flexDirection: "row",
                        gap: token.newSpacing.spacing.horizontal.lg,
                        alignItems: "center",
                    }}
                >
                    <Switch
                        active={switchDangerActive}
                        onChange={setSwitchDangerActive}
                        color="danger"
                    />

                    <Switch active={true} disabled color="primary" />
                </View>
            </Section>

            <Section title="Small Switch">
                <View
                    style={{
                        flexDirection: "row",
                        gap: token.newSpacing.spacing.horizontal.md,
                        alignItems: "center",
                    }}
                >
                    <Switch.Small
                        active={smallSwitchActive}
                        onChange={setSmallSwitchActive}
                    />

                    <Switch.Small active={true} disabled />
                </View>
            </Section>
        </ScrollView>
    );
}
