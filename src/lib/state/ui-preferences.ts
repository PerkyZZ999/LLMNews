import { Store } from "@tanstack/store";

export const uiPreferencesStorageKey = "llmnews-ui-preferences";

export type ThemePreference = "dark" | "light" | "system";
export type DensityPreference = "compact" | "comfortable";

export type UiPreferencesState = {
	theme: ThemePreference;
	density: DensityPreference;
};

const defaultUiPreferences: UiPreferencesState = {
	theme: "dark",
	density: "compact",
};

export const uiPreferencesStore = new Store<UiPreferencesState>(
	defaultUiPreferences,
);

export function loadUiPreferences(): UiPreferencesState {
	if (typeof window === "undefined") {
		return defaultUiPreferences;
	}

	const rawValue = window.localStorage.getItem(uiPreferencesStorageKey);

	if (!rawValue) {
		return defaultUiPreferences;
	}

	try {
		const parsedValue = JSON.parse(rawValue) as Partial<UiPreferencesState>;

		return {
			theme: parsedValue.theme ?? defaultUiPreferences.theme,
			density: parsedValue.density ?? defaultUiPreferences.density,
		};
	} catch {
		return defaultUiPreferences;
	}
}

export function persistUiPreferences(state: UiPreferencesState) {
	if (typeof window === "undefined") {
		return;
	}

	window.localStorage.setItem(uiPreferencesStorageKey, JSON.stringify(state));
}

export function applyThemePreference(theme: ThemePreference) {
	if (typeof document === "undefined") {
		return resolveThemePreference(theme);
	}

	const resolvedTheme = resolveThemePreference(theme);

	document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
	document.documentElement.style.colorScheme = resolvedTheme;

	return resolvedTheme;
}

export function resolveThemePreference(theme: ThemePreference) {
	if (theme !== "system") {
		return theme;
	}

	if (typeof window === "undefined") {
		return "dark";
	}

	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
}

export function setThemePreference(theme: ThemePreference) {
	uiPreferencesStore.setState((state) => ({
		...state,
		theme,
	}));
}

export function setDensityPreference(density: DensityPreference) {
	uiPreferencesStore.setState((state) => ({
		...state,
		density,
	}));
}
