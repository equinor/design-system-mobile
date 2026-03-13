import { Section } from "@/components/Section";
import {
    Checkbox,
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
    const [checkA, setCheckA] = useState(true);
    const [checkB, setCheckB] = useState(false);
    const [checkC, setCheckC] = useState(false);
    const [checkNoLabelA, setCheckNoLabelA] = useState(true);
    const [checkNoLabelB, setCheckNoLabelB] = useState(false);
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

            <Spacer amount="large" />
            <Section>
                <Typography variant="h4">Checkboxes</Typography>
            </Section>
            <Spacer amount="medium" />
            <Section title="With labels">
                <View>
                    <Checkbox
                        checked={checkA}
                        onPress={setCheckA}
                        label="Checked"
                    />
                    <Checkbox
                        checked={checkB}
                        onPress={setCheckB}
                        label="Unchecked"
                    />
                    <Checkbox
                        checked={checkC}
                        onPress={setCheckC}
                        indeterminate
                        label="Indeterminate"
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
                    <Checkbox
                        checked={checkNoLabelA}
                        onPress={setCheckNoLabelA}
                        accessibilityLabel="Option A"
                    />
                    <Checkbox
                        checked={checkNoLabelB}
                        onPress={setCheckNoLabelB}
                        accessibilityLabel="Option B"
                    />
                </View>
            </Section>
            <Spacer amount="medium" />
            <Section title="Disabled">
                <View>
                    <Checkbox
                        checked={false}
                        disabled
                        label="Disabled unchecked"
                    />
                    <Checkbox
                        checked={true}
                        disabled
                        label="Disabled checked"
                    />
                    <Checkbox
                        indeterminate
                        disabled
                        label="Disabled indeterminate"
                    />
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
