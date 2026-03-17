import { useTheme } from "@/components/theme/theme-provider";
import { Button } from "@/components/ui/button";

const themeOrder = ["dark", "light", "system"] as const;

export function ThemeToggle() {
	const { resolvedTheme, setTheme, theme } = useTheme();

	return (
		<Button
			variant="outline"
			size="sm"
			onClick={() => {
				const currentIndex = themeOrder.indexOf(theme);
				const nextTheme = themeOrder[(currentIndex + 1) % themeOrder.length];
				setTheme(nextTheme);
			}}
		>
			{resolvedTheme === "dark" ? "Dark" : "Light"} · {theme}
		</Button>
	);
}
