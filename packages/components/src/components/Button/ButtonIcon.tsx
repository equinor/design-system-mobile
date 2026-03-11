import { FC } from "react";
import { useStyles } from "../../hooks/useStyles";
import { EDSStyleSheet } from "../../styling";
import { Icon, IconName } from "../Icon";
import { ButtonSize, ButtonTone, ButtonVariant } from "./types";
import { SIZE_MAP, TEXT_VARIANT_MAP } from "./utils";

type ButtonIconProps = {
    name: IconName;
    tone: ButtonTone;
    variant: ButtonVariant;
    size: ButtonSize;
    disabled: boolean;
};

export const ButtonIcon: FC<ButtonIconProps> = ({
    name,
    tone,
    variant,
    size,
    disabled,
}) => {
    const styles = useStyles(tokenStyles, { size, disabled, variant, tone });
    return <Icon name={name} style={styles.icon} />;
};

type ButtonIconStyleProps = {
    tone: ButtonTone;
    disabled: boolean;
    size: ButtonSize;
    variant: ButtonVariant;
};

const tokenStyles = EDSStyleSheet.create(
    (token, { disabled, size, variant, tone }: ButtonIconStyleProps) => {
        const sizeKey = SIZE_MAP[size];
        return {
            icon: {
                fontSize: token.newSpacing.sizing.icon[sizeKey],
                color: token.newColors.text[tone][TEXT_VARIANT_MAP[variant]],
                padding: 2,
                margin: -4,
            },
        };
    }
);
