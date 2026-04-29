import { create } from "zustand";

type AppStoreState = {
    scheme: "light" | "dark" | null;
    setScheme: (scheme: "light" | "dark" | null) => void;
    density: "comfortable" | "spacious";
    setDensity: (density: "comfortable" | "spacious") => void;
};

export const useAppStore = create<AppStoreState>((set) => ({
    scheme: null as "light" | "dark" | null,
    setScheme: (scheme: "light" | "dark" | null) => set({ scheme }),
    density: "spacious",
    setDensity: (density: "comfortable" | "spacious") => set({ density }),
}));
