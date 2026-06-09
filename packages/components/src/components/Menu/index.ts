import { Menu as _Menu, MenuProps } from "./Menu";
import { MenuDivider } from "./MenuDivider";
import { MenuItem, MenuItemProps } from "./MenuItem";
import { MenuSection, MenuSectionProps } from "./MenuSection";

type MenuFamily = typeof _Menu & {
    Item: typeof MenuItem;
    Section: typeof MenuSection;
    Divider: typeof MenuDivider;
};

const Menu = _Menu as MenuFamily;
Menu.Item = MenuItem;
Menu.Section = MenuSection;
Menu.Divider = MenuDivider;

export { Menu };
export type { MenuProps, MenuItemProps, MenuSectionProps };
