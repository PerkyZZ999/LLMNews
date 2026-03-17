import { uiPreferencesStorageKey } from "@/lib/state/ui-preferences";

const themeScript = `
(() => {
  const storageKey = '${uiPreferencesStorageKey}';
  const fallbackTheme = 'dark';

  try {
    const rawValue = window.localStorage.getItem(storageKey);
    const parsedValue = rawValue ? JSON.parse(rawValue) : {};
    const requestedTheme = parsedValue.theme ?? fallbackTheme;
    const resolvedTheme = requestedTheme === 'system'
      ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : requestedTheme;

    document.documentElement.classList.toggle('dark', resolvedTheme === 'dark');
    document.documentElement.style.colorScheme = resolvedTheme;
  } catch {
    document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = 'dark';
  }
})();
`;

export function ThemeScript() {
	return <script>{themeScript}</script>;
}
