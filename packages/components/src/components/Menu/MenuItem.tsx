import React, { useContext } from "react";
import { View } from "react-native";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { Icon, IconName } from "../Icon";
import { PressableHighlight } from "../PressableHighlight";
import { Typography } from "../Typography";
import { MenuContext } from "./Menu";

export type MenuItemProps = {
    /**
     * The title of the menu item.
     */
    title: string;
    /**
     * A boolean value indicating whether or not the item should be selected as active.
     * An active item has a different visual appearance than a non-active item.
     */
    active?: boolean;
    /**
     * A boolean value indicating whether or not the item should be disabled.
     * A disabled item has a different visual appearance than a non-disabled item.
     */
    disabled?: boolean;
    /**
     * A callback method invoked when the item is pressed.
     */
    onPress?: () => void;
    /**
     * A boolean value indicating whether or not the parent menu should be dismissed when a user presses this item.
     */
    closeMenuOnClick?: boolean;
    /**
     * Icon displayed to the left of the title.
     */
    iconName?: IconName;
    /**
     * Icon displayed to the right of the title.
     */
    trailingIconName?: IconName;
};

export const MenuItem = ({
    title,
    active = false,
    disabled = false,
    onPress = () => null,
    closeMenuOnClick = true,
    iconName,
    trailingIconName,
}: MenuItemProps) => {
    const menuContext = useContext(MenuContext);
    const styles = useStyles(themeStyles, { active, disabled });

    const onPressItem = () => {
        if (closeMenuOnClick && !disabled) {
            menuContext.close();
        }
        onPress();
    };

    return (
        <View style={styles.itemContainer}>
            <PressableHighlight
                style={styles.pressableContainer}
                onPress={onPressItem}
                disabled={disabled}
            >
                <View style={styles.contentContainer}>
                    {iconName && (
                        <Icon name={iconName} color={styles.textStyle.color} />
                    )}
                    <Typography size="md" style={[styles.textStyle, styles.label]}>
                        {title}
                    </Typography>
                    {trailingIconName && (
                        <Icon
                            name={trailingIconName}
                            color={styles.trailingIconColor.color}
                        />
                    )}
                </View>
            </PressableHighlight>
        </View>
    );
};

const themeStyles = EDSStyleSheet.create(
    (theme, props: { active: boolean; disabled: boolean }) => {
        const activeColor =
            props.active && theme.colors.text.neutral.strong;
        const disabledColor =
            props.disabled && theme.colors.text.disabled;
        return {
            itemContainer: {
                backgroundColor: props.active
                    ? theme.colors.bg.neutral.fillMuted.default
                    : theme.colors.bg.neutral.surface,
                minHeight: theme.spacing.sizing.selectable.xl,
                justifyContent: "center",
            },
            pressableContainer: {
                paddingHorizontal: theme.spacing.spacing.inset.sm.horizontal,
                paddingVertical:
                    theme.spacing.spacing.inset.lg.verticalSquished,
            },
            textStyle: {
                color:
                    disabledColor ||
                    activeColor ||
                    theme.colors.text.neutral.strong,
            },
            trailingIconColor: {
                color:
                    disabledColor ||
                    theme.colors.text.neutral.subtle,
            },
            label: {
                flex: 1,
            },
            contentContainer: {
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: theme.spacing.spacing.icon.sm.gapHorizontal,
            },
        };
    }
);
