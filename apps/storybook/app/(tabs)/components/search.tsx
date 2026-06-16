import { Section } from "@/components/Section";
import { Surface } from "@/components/Surface";
import {
    EDSStyleSheet,
    Search,
    Typography,
    useStyles,
} from "@equinor/eds-mobile-components";
import { useState } from "react";
import { ScrollView } from "react-native";

export default function SearchScreen() {
    const [value, setValue] = useState("");
    const [cancellableValue, setCancellableValue] = useState("");
    const styles = useStyles(themeStyles);

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Section>
                <Typography>
                    Search lets users filter or find content using a dedicated
                    input with a magnify icon and a clear button.
                </Typography>
            </Section>

            <Section title="Default" />
            <Surface>
                <Search
                    placeholder="Search"
                    value={value}
                    onChange={setValue}
                />
            </Surface>

            <Section title="With Cancel Button">
                <Typography>
                    When cancellable is true, a Cancel button slides in when the
                    input is focused.
                </Typography>
            </Section>
            <Surface>
                <Search
                    placeholder="Search"
                    value={cancellableValue}
                    onChange={setCancellableValue}
                    cancellable
                />
            </Surface>

            <Section title="Invalid" />
            <Surface>
                <Search placeholder="Search" invalid />
            </Surface>

            <Section title="Read-Only">
                <Typography>
                    The value is visible and can be selected and copied, but
                    cannot be edited. Long-press to select text.
                </Typography>
                <Typography size="sm" style={styles.note}>
                    Note: on iOS, read-only mode switches to a multiline text
                    view internally to enable text selection. Long values will
                    wrap rather than truncate. This is an iOS platform
                    constraint.
                </Typography>
            </Section>
            <Surface>
                <Search
                    value="This is a read-only value."
                    readOnly
                />
            </Surface>

            <Section title="Disabled" />
            <Surface>
                <Search placeholder="Search" disabled />
            </Surface>
        </ScrollView>
    );
}

const themeStyles = EDSStyleSheet.create((token) => ({
    note: {
        color: token.colors.text.neutral.subtle,
    },
}));
