import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";

import { AppPending } from "@/components/ui/route-status";
import { initializeObservability } from "@/lib/observability/logger";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
	initializeObservability();

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 30_000,
				refetchOnWindowFocus: false,
			},
		},
	});

	const router = createRouter({
		routeTree,
		context: {
			queryClient,
		},
		defaultPendingComponent: AppPending,
		defaultPendingMs: 150,
		defaultPreload: "intent",
		scrollRestoration: true,
	});

	return router;
}

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof getRouter>;
	}
}
