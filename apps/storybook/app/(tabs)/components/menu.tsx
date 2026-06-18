import { Section } from "@/components/Section";
import { Surface } from "@/components/Surface";
import {
    Button,
    EDSStyleSheet,
    Icon,
    Menu,
    Typography,
    useStyles,
    useToken,
} from "@equinor/eds-mobile-components";
import React, { useRef, useState } from "react";
import { ScrollView, View } from "react-native";
export default function MenuScreen() {
    const styles = useStyles(themeStyles);
    const token = useToken();

    const defaultAnchorRef = useRef<View>(null);
    const [defaultOpen, setDefaultOpen] = useState(false);

    const adornmentsAnchorRef = useRef<View>(null);
    const [adornmentsOpen, setAdornmentsOpen] = useState(false);

    const disabledAnchorRef = useRef<View>(null);
    const [disabledOpen, setDisabledOpen] = useState(false);

    const sectionAnchorRef = useRef<View>(null);
    const [sectionOpen, setSectionOpen] = useState(false);

    const dividerAnchorRef = useRef<View>(null);
    const [dividerOpen, setDividerOpen] = useState(false);

    const checkboxAnchorRef = useRef<View>(null);
    const [checkboxOpen, setCheckboxOpen] = useState(false);
    const [checkedItems, setCheckedItems] = useState({
        grid: true,
        rulers: false,
        guides: true,
    });

    const subMenuAnchorRef = useRef<View>(null);
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Section>
                <Typography>
                    A Menu presents a list of contextual actions anchored to a
                    trigger element. It is dismissed after selecting an item or
                    tapping outside.
                </Typography>
            </Section>
            <Surface>
                <View style={styles.row}>
                    <Button
                        ref={defaultAnchorRef}
                        label="Open menu"
                        onPress={() => setDefaultOpen(true)}
                    />
                </View>
                <Menu
                    anchorEl={defaultAnchorRef}
                    open={defaultOpen}
                    onClose={() => setDefaultOpen(false)}
                >
                    <Menu.Item label="Edit" onPress={() => {}} />
                    <Menu.Item label="Duplicate" onPress={() => {}} />
                    <Menu.Item label="Delete" onPress={() => {}} />
                </Menu>
            </Surface>

            <Section title="Items">
                <Typography>
                    Items support optional leading and trailing slots for custom
                    content such as icons, keyboard shortcuts, or badges. Both
                    can be used independently or together. Items can also be
                    disabled — a disabled item keeps the menu open and does
                    nothing when tapped.
                </Typography>
            </Section>
            <Surface>
                <View style={styles.row}>
                    <Button
                        ref={adornmentsAnchorRef}
                        label="Icon + trailing"
                        onPress={() => setAdornmentsOpen(true)}
                    />
                    <Button
                        ref={disabledAnchorRef}
                        label="With disabled"
                        onPress={() => setDisabledOpen(true)}
                    />
                </View>

                <Menu
                    anchorEl={adornmentsAnchorRef}
                    open={adornmentsOpen}
                    onClose={() => setAdornmentsOpen(false)}
                >
                    <Menu.Item
                        label="Cut"
                        leading={
                            <Icon
                                name="content-cut"
                                size={token.spacing.sizing.icon.sm}
                            />
                        }
                        trailing={<Typography size="xs">⌘X</Typography>}
                        onPress={() => {}}
                    />
                    <Menu.Item
                        label="Copy"
                        leading={
                            <Icon
                                name="content-copy"
                                size={token.spacing.sizing.icon.sm}
                            />
                        }
                        trailing={<Typography size="xs">⌘C</Typography>}
                        onPress={() => {}}
                    />
                    <Menu.Item
                        label="Paste"
                        leading={
                            <Icon
                                name="content-paste"
                                size={token.spacing.sizing.icon.sm}
                            />
                        }
                        trailing={<Typography size="xs">⌘V</Typography>}
                        onPress={() => {}}
                    />
                </Menu>

                <Menu
                    anchorEl={disabledAnchorRef}
                    open={disabledOpen}
                    onClose={() => setDisabledOpen(false)}
                >
                    <Menu.Item label="Edit" onPress={() => {}} />
                    <Menu.Item label="Duplicate" disabled onPress={() => {}} />
                    <Menu.Item label="Delete" onPress={() => {}} />
                </Menu>
            </Surface>

            <Section title="Grouping">
                <Typography>
                    Use sections to group related items under a label, and
                    dividers for a lighter visual separation without a title.
                </Typography>
            </Section>
            <Surface>
                <View style={styles.row}>
                    <Button
                        ref={sectionAnchorRef}
                        label="Sections"
                        onPress={() => setSectionOpen(true)}
                    />
                    <Button
                        ref={dividerAnchorRef}
                        label="Divider"
                        onPress={() => setDividerOpen(true)}
                    />
                </View>

                <Menu
                    anchorEl={sectionAnchorRef}
                    open={sectionOpen}
                    onClose={() => setSectionOpen(false)}
                >
                    <Menu.Section title="File">
                        <Menu.Item label="New" onPress={() => {}} />
                        <Menu.Item label="Open" onPress={() => {}} />
                    </Menu.Section>
                    <Menu.Section title="Edit">
                        <Menu.Item label="Cut" onPress={() => {}} />
                        <Menu.Item label="Copy" onPress={() => {}} />
                        <Menu.Item label="Paste" onPress={() => {}} />
                    </Menu.Section>
                </Menu>

                <Menu
                    anchorEl={dividerAnchorRef}
                    open={dividerOpen}
                    onClose={() => setDividerOpen(false)}
                >
                    <Menu.Item label="Edit" onPress={() => {}} />
                    <Menu.Item label="Duplicate" onPress={() => {}} />
                    <Menu.Divider />
                    <Menu.Item label="Delete" onPress={() => {}} />
                </Menu>
            </Surface>

            <Section title="Checkbox items">
                <Typography>
                    Checkbox items let users toggle options on or off within the
                    menu. The menu stays open so multiple options can be changed
                    in one interaction.
                </Typography>
            </Section>
            <Surface>
                <View style={styles.row}>
                    <Button
                        ref={checkboxAnchorRef}
                        label="View options"
                        onPress={() => setCheckboxOpen(true)}
                    />
                </View>
                <Menu
                    anchorEl={checkboxAnchorRef}
                    open={checkboxOpen}
                    onClose={() => setCheckboxOpen(false)}
                >
                    <Menu.CheckboxItem
                        label="Grid"
                        checked={checkedItems.grid}
                        onPress={() =>
                            setCheckedItems(s => ({ ...s, grid: !s.grid }))
                        }
                    />
                    <Menu.CheckboxItem
                        label="Rulers"
                        checked={checkedItems.rulers}
                        onPress={() =>
                            setCheckedItems(s => ({ ...s, rulers: !s.rulers }))
                        }
                    />
                    <Menu.CheckboxItem
                        label="Guides"
                        checked={checkedItems.guides}
                        onPress={() =>
                            setCheckedItems(s => ({ ...s, guides: !s.guides }))
                        }
                    />
                </Menu>
            </Surface>

            <Section title="Sub-menu">
                <Typography>
                    A sub-menu item expands inline below the trigger to reveal
                    a nested list of options. Selecting any item closes the
                    whole menu.
                </Typography>
                <Typography>
                    Keep sub-menu labels short. Because the expanded items
                    increase the menu height, long labels or many nested options
                    can produce a lengthy, hard-to-scan menu.
                </Typography>
            </Section>
            <Surface>
                <View style={styles.row}>
                    <Button
                        ref={subMenuAnchorRef}
                        label="Open menu"
                        onPress={() => setSubMenuOpen(true)}
                    />
                </View>
                <Menu
                    anchorEl={subMenuAnchorRef}
                    open={subMenuOpen}
                    onClose={() => setSubMenuOpen(false)}
                >
                    <Menu.Item label="New file" onPress={() => {}} />
                    <Menu.SubItem label="Open recent">
                        <Menu.Item label="project-alpha.eds" onPress={() => {}} />
                        <Menu.Item label="report-q2.eds" onPress={() => {}} />
                        <Menu.Item label="mockup-v3.eds" onPress={() => {}} />
                    </Menu.SubItem>
                    <Menu.Divider />
                    <Menu.Item label="Save" onPress={() => {}} />
                </Menu>
            </Surface>
        </ScrollView>
    );
}

const themeStyles = EDSStyleSheet.create((token) => ({
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        rowGap: token.spacing.spacing.vertical.md,
    },
}));
