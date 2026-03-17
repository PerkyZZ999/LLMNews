import { createRequestLogger, initLogger } from "evlog";

import { environment } from "@/lib/env";

let loggerInitialized = false;

export const eventCatalog = {
	appStartup: "app.startup",
	routeFailure: "app.route.failure",
	adminAction: "admin.action",
	ingestionEvent: "ingestion.event",
} as const;

export function initializeObservability() {
	if (loggerInitialized || typeof window !== "undefined") {
		return;
	}

	initLogger({
		env: {
			service: "llmnews-web",
			environment: environment.appEnv,
			version: "0.1.0",
		},
	});

	loggerInitialized = true;
}

export function emitWideEvent(
	event: keyof typeof eventCatalog,
	details: Record<string, unknown> = {},
) {
	if (typeof window !== "undefined") {
		return;
	}

	initializeObservability();

	const log = createRequestLogger({ event: eventCatalog[event] });
	log.set(details);
	log.emit();
}
