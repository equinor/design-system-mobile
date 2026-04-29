import { FontSource, useFonts } from "expo-font";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import EquinorBold from "../assets/fonts/Equinor-Bold.otf";
import EquinorBoldItalic from "../assets/fonts/Equinor-BoldItalic.otf";
import EquinorItalic from "../assets/fonts/Equinor-Italic.otf";
import EquinorLight from "../assets/fonts/Equinor-Light.otf";
import EquinorLightItalic from "../assets/fonts/Equinor-LightItalic.otf";
import EquinorMedium from "../assets/fonts/Equinor-Medium.otf";
import EquinorMediumItalic from "../assets/fonts/Equinor-MediumItalic.otf";
import EquinorRegular from "../assets/fonts/Equinor-Regular.otf";
import InterLight from "../assets/fonts/Inter_18pt-Light.ttf";
import InterMedium from "../assets/fonts/Inter_18pt-Medium.ttf";
import InterRegular from "../assets/fonts/Inter_18pt-Regular.ttf";

const fontMap = {
    ...MaterialCommunityIcons.font,
    "Equinor-Bold": EquinorBold as FontSource,
    "Equinor-BoldItalic": EquinorBoldItalic as FontSource,
    "Equinor-Italic": EquinorItalic as FontSource,
    "Equinor-Light": EquinorLight as FontSource,
    "Equinor-LightItalic": EquinorLightItalic as FontSource,
    "Equinor-Medium": EquinorMedium as FontSource,
    "Equinor-MediumItalic": EquinorMediumItalic as FontSource,
    "Equinor-Regular": EquinorRegular as FontSource,
    "Inter_18pt-Light": InterLight as FontSource,
    "Inter_18pt-Regular": InterRegular as FontSource,
    "Inter_18pt-Medium": InterMedium as FontSource,
};

/**
 * Initializes, preloads and caches fonts and assets for the component library.
 * This hook is required for fonts and icons to function properly.
 * @returns A tuple array of the loading state in addition to any potential errors caught during asset initialization.
 */
export const useEDS = () => {
    const load = useFonts(fontMap);
    return load;
};
