import { useStore } from "@tanstack/react-store";
import {
	createContext,
	type ReactNode,
	useContext,
	useEffect,
	useMemo,
} from "react";

import {
	applyThemePreference,
	loadUiPreferences,
	persistUiPreferences,
	resolveThemePreference,
	setThemePreference,
	type ThemePreference,
	uiPreferencesStore,
} from "@/lib/state/ui-preferences";

type ThemeContextValue = {
	theme: ThemePreference;
	resolvedTheme: "dark" | "light";
	setTheme: (theme: ThemePreference) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
	const preferences = useStore(uiPreferencesStore, (state) => state);
	const resolvedTheme = resolveThemePreference(preferences.theme);

	useEffect(() => {
		uiPreferencesStore.setState(() => loadUiPreferences());
	}, []);

	useEffect(() => {
		applyThemePreference(preferences.theme);
		persistUiPreferences(preferences);
	}, [preferences]);

	const value = useMemo(
		() => ({
			theme: preferences.theme,
			resolvedTheme,
			setTheme: setThemePreference,
		}),
		[preferences.theme, resolvedTheme],
	);

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error("useTheme must be used within ThemeProvider");
	}

	return context;
}
