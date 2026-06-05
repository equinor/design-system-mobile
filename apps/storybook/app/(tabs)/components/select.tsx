import { Section } from "@/components/Section";
import { Surface } from "@/components/Surface";
import {
    EDSStyleSheet,
    Select,
    Typography,
    useStyles,
} from "@equinor/eds-mobile-components";
import { useState } from "react";
import { ScrollView } from "react-native";

const ITEMS = [
    { title: "Option 1", value: "option1" },
    { title: "Option 2", value: "option2" },
    { title: "Option 3", value: "option3" },
    { title: "Option 4", value: "option4" },
    { title: "Option 5", value: "option5" },
];

export default function SelectScreen() {
    const [selected, setSelected] = useState<string | undefined>(undefined);
    const [multiSelected, setMultiSelected] = useState<string[]>([]);
    const styles = useStyles(themeStyles);

    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={{ flex: 1 }}
        >
            <Section>
                <Typography>
                    Select lets users choose a single option from a dropdown
                    list.
                </Typography>
            </Section>

            <Section title="With label and helper text" />
            <Surface>
                <Select
                    label="Title"
                    helperText="Help with more details"
                    items={ITEMS}
                    selectedItem={selected}
                    onSelect={setSelected}
                    placeholder="Select an option"
                />
            </Surface>

            <Section title="Without label" />
            <Surface>
                <Select
                    items={ITEMS}
                    selectedItem={selected}
                    onSelect={setSelected}
                    placeholder="Select an option"
                />
            </Surface>

            <Section title="Invalid" />
            <Surface>
                <Select
                    label="Title"
                    helperText="Help with more details"
                    items={ITEMS}
                    selectedItem={selected}
                    onSelect={setSelected}
                    invalid
                    placeholder="Select an option"
                />
            </Surface>

            <Section title="Read-only" />
            <Surface>
                <Select
                    label="Title"
                    items={ITEMS}
                    selectedItem="option2"
                    onSelect={() => {}}
                    readOnly
                />
            </Surface>

            <Section title="Disabled" />
            <Surface>
                <Select
                    label="Title"
                    items={ITEMS}
                    selectedItem={undefined}
                    onSelect={() => {}}
                    disabled
                    placeholder="Select an option"
                />
            </Surface>

            <Section style={styles.groupHeader}>
                <Typography.Header size="lg" weight="bolder">
                    Multiselect
                </Typography.Header>
            </Section>
            <Section>
                <Typography>
                    Not in Figma yet — kept for reference while the combobox
                    discussion is ongoing.
                </Typography>
            </Section>

            <Section title="Default" />
            <Surface>
                <Select.Multi
                    items={ITEMS}
                    selectedItems={multiSelected}
                    onSelect={setMultiSelected}
                    placeholder="Select options"
                />
            </Surface>
        </ScrollView>
    );
}

const themeStyles = EDSStyleSheet.create((token) => ({
    groupHeader: {
        paddingTop: token.spacing.spacing.vertical.lg,
    },
}));
