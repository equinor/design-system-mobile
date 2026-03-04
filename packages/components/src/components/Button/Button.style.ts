import { EDSStyleSheet } from "../../styling";
import { MasterToken } from "../../styling/tokens";
import { ButtonTone, ButtonVariant } from "./types";

const getBackgroundColorForButton = (
    token: MasterToken,
    disabled: boolean,
    tone: ButtonTone,
    variant: ButtonVariant
) => {
    const variantColors = {};

    const toneColors = {
        accent: {
            default: token.newColors.Bg.Accent["Fill Emphasis"].Default,
            pressed: token.newColors.Bg.Accent["Fill Emphasis"].Active,
        },
        neutral: {
            default: token.newColors.Bg.Neutral["Fill Emphasis"].Default,
            pressed: token.newColors.Bg.Neutral["Fill Emphasis"].Active,
        },
        danger: {
            default: token.newColors.Bg.Danger["Fill Emphasis"].Default,
            pressed: token.newColors.Bg.Danger["Fill Emphasis"].Active,
        },
    };
};

export const buttonContentStyles = EDSStyleSheet.create((token) => {
    return {
        default: {},
        pressed: {
            backgroundColor: token.colors.interactive.primary,
        },
        container: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
        },
    };
});
