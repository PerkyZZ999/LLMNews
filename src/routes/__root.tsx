/// <reference types="vite/client" />

import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Outlet,
	Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import { AppShell } from "@/components/layout/app-shell";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeScript } from "@/components/theme/theme-script";
import { AppError, AppNotFound } from "@/components/ui/route-status";
import appCss from "@/styles/app.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
	{
		head: () => ({
			meta: [
				{
					charSet: "utf-8",
				},
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1",
				},
				{
					title: "LLMNews",
				},
				{
					name: "description",
					content:
						"Fast, structured coverage of model releases and AI coding tools.",
				},
			],
			links: [{ rel: "stylesheet", href: appCss }],
		}),
		component: RootComponent,
		errorComponent: AppError,
		notFoundComponent: AppNotFound,
	},
);

function RootComponent() {
	const { queryClient } = Route.useRouteContext();

	return (
		<RootDocument>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider>
					<AppShell>
						<Outlet />
					</AppShell>
				</ThemeProvider>
			</QueryClientProvider>
		</RootDocument>
	);
}

function RootDocument({ children }: { children: ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<ThemeScript />
				<HeadContent />
			</head>
			<body>
				{children}
				<Scripts />
			</body>
		</html>
	);
}
