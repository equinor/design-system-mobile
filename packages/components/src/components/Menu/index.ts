import { Menu as _Menu, MenuProps } from "./Menu";
import { MenuCheckboxItem, MenuCheckboxItemProps } from "./MenuCheckboxItem";
import { MenuDivider } from "./MenuDivider";
import { MenuItem, MenuItemProps } from "./MenuItem";
import { MenuSection, MenuSectionProps } from "./MenuSection";
import { MenuSubItem, MenuSubItemProps } from "./MenuSubItem";

type MenuFamily = typeof _Menu & {
    Item: typeof MenuItem;
    CheckboxItem: typeof MenuCheckboxItem;
    SubItem: typeof MenuSubItem;
    Section: typeof MenuSection;
    Divider: typeof MenuDivider;
};

const Menu = _Menu as MenuFamily;
Menu.Item = MenuItem;
Menu.CheckboxItem = MenuCheckboxItem;
Menu.SubItem = MenuSubItem;
Menu.Section = MenuSection;
Menu.Divider = MenuDivider;

export { Menu };
export type {
    MenuProps,
    MenuItemProps,
    MenuCheckboxItemProps,
    MenuSubItemProps,
    MenuSectionProps,
};
