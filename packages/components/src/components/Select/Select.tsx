import React, { useCallback, useRef, useState } from "react";
import { LayoutRectangle, Pressable, ScrollView, View } from "react-native";
import { EDSStyleSheet } from "../../styling";
import { useStyles } from "../../hooks/useStyles";
import { Icon } from "../Icon";
import { inputTokenStyles } from "../Input/inputStyle";
import { Menu } from "../Menu";
import { Typography } from "../Typography";
import { SelectBaseProps } from "./types";

export type SelectProps<T> = SelectBaseProps<T> & {
    /**
     * The currently selected item, or undefined if nothing is selected.
     */
    selectedItem: T | undefined;

    /**
     * Callback function called when an item is selected or deselected.
     */
    onSelect: (value: T | undefined) => void;

    /**
     * Label displayed above the select field.
     */
    label?: string;

    /**
     * Helper text displayed below the label, above the field.
     */
    helperText?: string;
};

export const Select = <T,>({
    items,
    selectedItem,
    placeholder = "Select an option",
    disabled = false,
    onSelect,
    readOnly = false,
    invalid,
    label,
    helperText,
}: SelectProps<T>) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuLayout, setMenuLayout] = useState<LayoutRectangle | undefined>();

    const triggerRef = useRef<View | null>(null);
    const inputStyles = useStyles(inputTokenStyles, {
        readOnly,
        invalid,
        isSelected: menuOpen,
        disabled,
    });
    const styles = useStyles(selectStyles);

    const selectedItemTitle = selectedItem
        ? (items.find((item) => item.value === selectedItem)?.title ??
          placeholder)
        : placeholder;

    const handleSelect = useCallback(
        (value: T) => {
            const newValue = selectedItem === value ? undefined : value;
            onSelect(newValue);
        },
        [onSelect, selectedItem]
    );

    const showErrorIcon = invalid && !disabled;

    return (
        <View style={styles.container}>
            {label && (
                <View style={styles.labelSection}>
                    <Typography size="md">{label}</Typography>
                    {helperText && (
                        <Typography size="sm" style={styles.helperText}>
                            {helperText}
                        </Typography>
                    )}
                </View>
            )}
            <Pressable
                ref={triggerRef}
                style={inputStyles.contentContainer}
                disabled={disabled || readOnly}
                onPress={() => setMenuOpen(!menuOpen)}
                onLayout={(event) => setMenuLayout(event.nativeEvent.layout)}
                accessibilityRole="combobox"
                accessibilityState={{
                    disabled: disabled || readOnly,
                    expanded: menuOpen,
                }}
            >
                {showErrorIcon && (
                    <Icon
                        name="alert-circle"
                        size={16}
                        color={inputStyles.errorIcon.color}
                    />
                )}
                <Typography
                    style={[
                        inputStyles.textInput,
                        !selectedItem && inputStyles.placeholder,
                    ]}
                    numberOfLines={1}
                >
                    {selectedItemTitle}
                </Typography>
                {!readOnly && (
                    <Icon
                        color={inputStyles.chevronIcon.color}
                        name={menuOpen ? "menu-up" : "menu-down"}
                    />
                )}
            </Pressable>
            <Menu
                key={`menu-${menuLayout?.height}`}
                anchorEl={triggerRef}
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
                placement="bottom-start"
                style={[styles.menuOverlay, { width: menuLayout?.width }]}
            >
                <ScrollView>
                    {items.map((item) => (
                        <Menu.Item
                            key={
                                typeof item.value === "object"
                                    ? JSON.stringify(item.value)
                                    : String(item.value)
                            }
                            onPress={() => handleSelect(item.value)}
                            title={item.title}
                            iconName={item.icon}
                            trailingIconName={
                                selectedItem === item.value
                                    ? "check"
                                    : undefined
                            }
                            active={selectedItem === item.value}
                        />
                    ))}
                </ScrollView>
            </Menu>
        </View>
    );
};

const selectStyles = EDSStyleSheet.create((token) => ({
    container: {
        flexGrow: 1,
        gap: token.spacing.spacing.vertical.sm,
    },
    labelSection: {
        gap: token.spacing.spacing.vertical.sm,
    },
    helperText: {
        color: token.colors.text.neutral.subtle,
    },
    menuOverlay: {
        marginVertical: -token.spacing.spacing.vertical.sm,
        maxHeight: 300,
    },
}));

Select.displayName = "Select";
