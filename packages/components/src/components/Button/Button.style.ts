import { MasterToken } from "src/styling/tokens";
import { EDSStyleSheet } from "../../styling";
import { ButtonTone } from "./types";

const getBackgroundColorForButton = (
    token: MasterToken,
    disabled: boolean,
    tone: ButtonTone,
    variant: ButtonVariant
) => {};

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
