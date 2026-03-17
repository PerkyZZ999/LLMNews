import { Link, useRouterState } from "@tanstack/react-router";
import { useStore } from "@tanstack/react-store";
import type { ReactNode } from "react";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { uiPreferencesStore } from "@/lib/state/ui-preferences";
import { cn } from "@/lib/ui/cn";

const navigationItems = [
	{ to: "/", label: "Home" },
	{ to: "/models", label: "Models" },
	{ to: "/benchmarks", label: "Benchmarks" },
	{ to: "/coding-tools", label: "AI Coding Apps" },
	{ to: "/admin", label: "Admin" },
];

export function AppShell({ children }: { children: ReactNode }) {
	const pathname = useRouterState({
		select: (state) => state.location.pathname,
	});
	const preferences = useStore(uiPreferencesStore, (state) => state);

	return (
		<div
			className={cn(
				"min-h-screen",
				preferences.density === "compact" ? "tracking-[0.01em]" : "",
			)}
		>
			<header className="sticky top-0 z-50 border-b border-line bg-surface-0/80 backdrop-blur-xl">
				<div className="page-shell flex min-h-18 flex-col justify-center gap-3 py-4 lg:min-h-20 lg:flex-row lg:items-center lg:justify-between lg:py-0">
					<div className="flex items-center gap-4">
						<Link className="flex items-center gap-3" to="/">
							<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow-[0_0_30px_-12px_var(--shadow-color)]">
								LN
							</div>
							<div>
								<div className="text-lg font-semibold tracking-tight">
									LLMNews
								</div>
								<div className="technical-label text-muted-foreground">
									editorial intelligence feed
								</div>
							</div>
						</Link>
						<Badge className="hidden sm:flex">Phase 1 foundation</Badge>
					</div>
					<div className="flex flex-col gap-3 lg:flex-row lg:items-center">
						<nav className="flex flex-wrap items-center gap-2">
							{navigationItems.map((item) => {
								const isActive =
									pathname === item.to || pathname.startsWith(`${item.to}/`);

								return (
									<Link
										activeProps={{
											className: "bg-primary text-primary-foreground",
										}}
										className={cn(
											"rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground",
											isActive && "bg-primary text-primary-foreground",
										)}
										key={item.to}
										to={item.to}
									>
										{item.label}
									</Link>
								);
							})}
						</nav>
						<ThemeToggle />
					</div>
				</div>
			</header>
			<main className="page-shell py-8 sm:py-10">{children}</main>
			<footer className="page-shell border-t border-line py-6 text-sm text-muted-foreground">
				Foundation scaffold for the public product and internal editorial
				dashboard.
			</footer>
		</div>
	);
}
